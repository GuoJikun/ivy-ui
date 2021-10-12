import DatePicker from "./datepicker.js";

if (!window.customElements.get("ivy-date-picker")) {
    window.customElements.define("ivy-date-picker", DatePicker);
}
