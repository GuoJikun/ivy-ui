/**
 * 向上查找指定的元素
 * @param {HTMLElement} self 起点
 * @param {String} nodeName 查找的元素名称
 * @returns {HTMLElement | null} 查找的结果
 */
function findElementUpward(self, nodeName) {
  let parent = self.parentNode;
  let name = parent.nodeName.toLowerCase();

  while (parent && (!name || nodeName !== name)) {
    parent = parent.parentNode;
    if (parent) {
      name = parent.nodeName.toLowerCase();
    }
  }
  return parent;
}
/**
 * 向上找到所有的指定元素
 * @param {HTMLElement} self 起点
 * @param {String} nodeName 查找的元素名称
 * @returns {} 查找的结果
 */
const findElementsUpward = (self, nodeName) => {
  let parents = [];
  let parent = self.parentElement;

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
const findElementDownward = (self, nodeName) => {
  let children = self.children;
  let child = null;

  if (children.length) {
    for (const el of children) {
      const name = el.nodeName.toLowerCase();

      if (name === nodeName) {
        child = el;
        break;
      } else {
        children = findElementDownward(el, nodeName);
        if (children) break;
      }
    }
  }
  return children;
};

/**
 * 向下找到所有的指定组件
 * @param {HTMLElement} self 起点
 * @param {String} nodeName 查找的元素名称
 * @returns {} 查找的结果
 */
const findElementsDownward = (self, nodeName) => {
  const children = self.children;
  let tmp = [];
  return [...children].reduce((elementList, child) => {
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
const findBrothersElements = (self, nodeName, exceptMe = true) => {
  let res = [...self.parentElement?.children];
  res = res.filter((item) => {
    return item.nodeName.toLowerCase() === nodeName;
  });
  let index = res.findIndex((item) => item === self);
  if (exceptMe) res.splice(index, 1);
  return res;
};

/**
 * 颜色叠加
 * @param {String} c1 颜色1-HEX格式
 * @param {String} c2 颜色2-HEX格式
 * @param {Number} ratio 小数-c1:所占比重；1-ratio:c2所占比重
 * @returns {String} HEX格式
 */
const colorBlend = (c1, c2, ratio) => {
  ratio = Math.max(Math.min(ratio, 1), 0);
  const r1 = parseInt(c1.substring(1, 3), 16);
  const g1 = parseInt(c1.substring(3, 5), 16);
  const b1 = parseInt(c1.substring(5, 7), 16);
  const r2 = parseInt(c2.substring(1, 3), 16);
  const g2 = parseInt(c2.substring(3, 5), 16);
  const b2 = parseInt(c2.substring(5, 7), 16);
  let r = Math.round(r1 * ratio + r2 * (1 - ratio));
  let g = Math.round(g1 * ratio + g2 * (1 - ratio));
  let b = Math.round(b1 * ratio + b2 * (1 - ratio));
  r = "" + (r || 0).toString(16);
  g = "" + (g || 0).toString(16);
  b = "" + (b || 0).toString(16);
  return `#${r}${g}${b}`;
};

const buildShadowRoot = (html = "", self) => {
  const shadowRoot = self.attachShadow({
    mode: "open",
  });
  const template = document.createElement("template");
  template.innerHTML = html;
  shadowRoot.appendChild(template.content.cloneNode(true));
  return shadowRoot;
};

/**
 * 生成css字符串
 * @param {String} style
 * @returns
 */
const style = (style) => {
  return `<style type="text/css">${style}</style>`;
};

export {
  findElementUpward,
  findElementsUpward,
  findElementDownward,
  findElementsDownward,
  findBrothersElements,
  colorBlend,
  buildShadowRoot,
  style,
};
