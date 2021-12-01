import Tip from './tip.js'


if (!window.customElements.get("ivy-tip")) {
    window.customElements.define("ivy-tip", Tip);
}
