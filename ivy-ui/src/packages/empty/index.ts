import { Empty } from "./src/empty";

if (!customElements.get("ivy-empty")) {
    customElements.define("ivy-empty", Empty);
}
