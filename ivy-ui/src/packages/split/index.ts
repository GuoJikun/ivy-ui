import Split from "./src/split.js";

if (!customElements.get("ivy-split")) {
    customElements.define("ivy-split", Split);
}
