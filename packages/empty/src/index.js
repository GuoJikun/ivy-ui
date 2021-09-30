import { Empty } from "./empty.js";

if (!customElements.get("ivy-empty")) {
    customElements.define("ivy-empty", Empty);
}
