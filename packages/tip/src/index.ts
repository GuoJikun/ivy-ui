import Tip from "./tip";

if (!window.customElements.get("ivy-tip")) {
    window.customElements.define("ivy-tip", Tip);
}
