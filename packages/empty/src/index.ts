import { Empty } from "./empty";

if (!customElements.get("ivy-empty")) {
    customElements.define("ivy-empty", Empty);
}
