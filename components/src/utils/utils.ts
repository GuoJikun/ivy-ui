export type ScrollElement = HTMLElement | Window;

const defaultRoot = window;

function isElement(node: Element) {
  const ELEMENT_NODE_TYPE = 1;
  return node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === ELEMENT_NODE_TYPE;
}

/**
 * 获取变量类型
 * @param val
 * @returns
 */
export const getType = (val: unknown) => {
  return Object.prototype.toString.call(val).slice(8, -1);
};
/**
 * 是否是Object类型
 * @param val
 * @returns
 */
export const isObject = (val: unknown) => {
  return getType(val) === 'Object';
};

/**
 * 查找兄弟元素
 * @param self HTMLElement 元素自身
 * @param isSelf 是否包含此元素，默认为false
 * @returns
 */
export const getBrotherElements = (self: HTMLElement, isSelf: Boolean = false) => {
  const parent = self.parentElement || self.parentNode;
  const children = parent.children;
  const len = children.length;
  const list = [];
  for (let index = 0; index < len; index++) {
    if (isSelf) {
      list.push(children.item(index));
    } else {
      if (children.item(index) !== self) list.push(children.item(index));
    }
  }
  return list;
};

/**
 * 查询当前元素下符合条件的所有元素
 * @param self
 * @param tag 合法的css选择器
 * @returns
 */
export const findChildrenElements = (self: HTMLElement, tag: string) => {
  const children = self.querySelectorAll(tag);
  return children as unknown as Array<HTMLElement>;
};

/**
 * 向上查找指定的元素
 * @param {HTMLElement} self 起点
 * @param {String} nodeName 查找的元素名称
 * @returns {HTMLElement | null} 查找的结果
 */
export const findElementUpward = (self: HTMLElement, nodeName: string) => {
  let parent: ParentNode = self.parentNode as ParentNode;
  let name = parent.nodeName.toLowerCase();

  while (parent && (!name || nodeName !== name)) {
    parent = parent.parentNode as ParentNode;
    if (parent) {
      name = parent.nodeName.toLowerCase();
    }
  }
  return parent;
};

/**
 * 向上找到所有的指定元素
 * @param {HTMLElement} self 起点
 * @param {String} nodeName 查找的元素名称
 * @returns {} 查找的结果
 */
const findElementsUpward = (self: HTMLElement, nodeName: string): Array<HTMLElement> => {
  let parents = [];
  let parent = self.parentElement as HTMLElement;

  if (parent) {
    if (parent.nodeName.toLowerCase() === nodeName) {
      parents.push(parent);
    }
    return parents.concat(findElementsUpward(parent, nodeName));
  } else {
    return [];
  }
};

/**
 * 向下找到最近的指定组件
 * @param {HTMLElement} self 起点
 * @param {String} nodeName 查找的元素名称
 * @returns {} 查找的结果
 */
export const findElementDownward = (self: HTMLElement, nodeName: string) => {
  let children = self.children as unknown as any[];
  let child = null;

  if (children.length) {
    for (const el of children) {
      const name = el.nodeName.toLowerCase();

      if (name === nodeName) {
        child = el;
        break;
      } else {
        children = findElementDownward(el as HTMLElement, nodeName);
        if (children) break;
      }
    }
  }
  return child;
};

/**
 * 向下找到所有的指定组件
 * @param {HTMLElement} self 起点
 * @param {String} nodeName 查找的元素名称
 * @returns {} 查找的结果
 */
export const findElementsDownward = (self: HTMLElement, nodeName: string): Array<HTMLElement> => {
  const children: HTMLCollection = self.children;
  const tmp: Array<HTMLElement> = [];
  return [...(children as unknown as any[])].reduce((elementList, child: HTMLElement) => {
    if (child.nodeName.toLowerCase() === nodeName) {
      elementList.push(child);
    }
    const foundChildren = findElementsDownward(child, nodeName);
    elementList.push(...foundChildren);
    return elementList;
  }, tmp);
};

/**
 * 找到指定组件的兄弟组件
 * @param {HTMLElement} self 起点
 * @param {String} componentName 查找的元素名称
 * @param {Boolean} exceptMe 是否包含自身
 * @returns {HTMLCollection} 查找的结果
 */
export const findBrothersElements = (self: HTMLElement, nodeName: string, exceptMe = true) => {
  let res = [...(self.parentElement?.children as unknown as any[])];
  res = res.filter(item => {
    return item.nodeName.toLowerCase() === nodeName;
  });
  let index = res.findIndex(item => item === self);
  if (exceptMe) res.splice(index, 1);
  return res;
};

/**
 * 获取slot的子元素
 * @param slot slot 元素
 * @param tag 筛选的元素名称
 * @returns
 */
export const getAssignedElements = (slot: HTMLSlotElement, tag?: string) => {
  const tmp = slot.assignedElements();
  if (tag) {
    return tmp.filter(c => c.tagName.toLowerCase() === tag);
  }
  return tmp;
};

/**
 * 颜色叠加
 * @param {String} c1 颜色1-HEX格式
 * @param {String} c2 颜色2-HEX格式
 * @param {Number} ratio 小数-c1:所占比重；1-ratio:c2所占比重
 * @returns {String} HEX格式
 */
export const colorBlend = (c1: string, c2: string, ratio: number): string => {
  ratio = Math.max(Math.min(ratio, 1), 0);
  const r1 = parseInt(c1.substring(1, 3), 16);
  const g1 = parseInt(c1.substring(3, 5), 16);
  const b1 = parseInt(c1.substring(5, 7), 16);
  const r2 = parseInt(c2.substring(1, 3), 16);
  const g2 = parseInt(c2.substring(3, 5), 16);
  const b2 = parseInt(c2.substring(5, 7), 16);
  let r: any = Math.round(r1 * ratio + r2 * (1 - ratio));
  let g: any = Math.round(g1 * ratio + g2 * (1 - ratio));
  let b: any = Math.round(b1 * ratio + b2 * (1 - ratio));
  r = '' + (r || 0).toString(16);
  g = '' + (g || 0).toString(16);
  b = '' + (b || 0).toString(16);
  return `#${r}${g}${b}`;
};

export const throttle = (func: Function, delay = 0, atLeast: number = 200) => {
  let timer: any = null;
  let lastRun = 0;
  return (...args: any) => {
    const now = +new Date();
    if (timer) {
      clearTimeout(timer);
    }
    if (now - lastRun > atLeast) {
      lastRun = now;
      func.apply(this, args);
    } else {
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    }
  };
};

const overflowScrollReg = /scroll|auto/i;
// 获取滚动的父元素
export function getScrollParent(el: Element, root: ScrollElement | undefined = defaultRoot) {
  let node = el;

  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      return node;
    }
    node = node.parentNode as Element;
  }

  return root;
}
