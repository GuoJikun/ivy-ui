import { Steps, Step } from "./steps.js";

if (!customElements.get("ivy-steps")) {
    customElements.define("ivy-steps", Steps);
}

if (!customElements.get("ivy-step")) {
    customElements.define("ivy-step", Step);
}
