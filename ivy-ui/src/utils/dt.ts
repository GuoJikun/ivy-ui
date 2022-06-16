/**
 * 生成css字符串
 * @param {String} style
 * @returns
 */
const style = (style: TemplateStringsArray): string => {
    return `<style type="text/css">${style}</style>` as string;
};

const buildShadowRoot = (html = "", self: HTMLElement) => {
    const shadowRoot = self.attachShadow({
        mode: "open",
    });
    const template = document.createElement("template");
    template.innerHTML = html;
    shadowRoot.appendChild(template.content.cloneNode(true));
    return shadowRoot;
};
