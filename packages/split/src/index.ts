import Split from "./split.js";

if (!customElements.get("ivy-split")) {
    customElements.define("ivy-split", Split);
}
