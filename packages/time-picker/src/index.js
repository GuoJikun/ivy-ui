import TimePicker from "./time-picker";

if (!customElements.get("ivy-time-picker")) {
    customElements.define("ivy-time-picker", TimePicker);
}
