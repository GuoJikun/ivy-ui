import Notification from "./notification";

function addMessageBox() {
    const parent = document.createElement("div");
    parent.id = "ivy-notify-box";
    parent.style.position = "fixed";
    parent.style.top = "24px";
    parent.style.left = "0";
    parent.style.zIndex = "10000";
    parent.style.width = "100%";
    parent.style.pointerEvents = "none";
    parent.style.fontSize = "14px";
    document.body.appendChild(parent);
}
interface Window {
    $notification: any;
}
declare const window: Window & typeof globalThis;
if (!customElements.get("ivy-notification")) {
    customElements.define("ivy-notification", Notification);
    window.onload = function () {
        addMessageBox();
        window.$notification = Notification;
    };
}
