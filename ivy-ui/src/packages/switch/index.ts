import { Switch } from "./src/switch";
if (!customElements.get("ivy-switch")) {
    customElements.define("ivy-switch", Switch);
}
