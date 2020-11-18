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
 * @returns {HTMLCollection} 查找的结果
 */
const findElementsUpward = (self, nodeName) => {
    let parents = [];
    let parent = self.parentNode;

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
 * @returns {HTMLElement | null} 查找的结果
 */
const findElementDownward = (self, nodeName) => {
    let childrens = self.children;
    let children = null;

    if (childrens.length) {
        for (const child of childrens) {
            const name = child.nodeName.toLowerCase();

            if (name === nodeName) {
                children = child;
                break;
            } else {
                childrens = findElementDownward(child, nodeName);
                if (children) break;
            }
        }
    }
    return childrens;
};

/**
 * 向下找到所有的指定组件
 * @param {HTMLElement} self 起点
 * @param {String} nodeName 查找的元素名称
 * @returns {HTMLCollection} 查找的结果
 */
const findElementsDownward = (self, nodeName) => {
    const children = self.children;
    return [...children].reduce((elements, child) => {
        if (child.nodeName.toLowerCase() === nodeName) {
            elements.push(child);
        }
        const foundChildren = findElementsDownward(child, nodeName);
        return elements.concat(foundChildren);
    }, []);
};

/**
 * 找到指定组件的兄弟组件
 * @param {HTMLElement} self 起点
 * @param {String} componentName 查找的元素名称
 * @param {Boolean} exceptMe 是否包含自身
 * @returns {HTMLCollection} 查找的结果
 */
const findBrothersElements = (self, nodeName, exceptMe = true) => {
    let res = self.$parent.$children;
    res = res.filter(item => {
        return item.nodeName.toLowerCase() === nodeName;
    });
    let index = res.findIndex(item => item._uid === self._uid);
    if (exceptMe) res.splice(index, 1);
    return res;
};

export { findElementUpward, findElementsUpward, findElementDownward, findElementsDownward, findBrothersElements };
