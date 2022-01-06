import Notification from "./Notification.js";

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

if (!customElements.get("ivy-notification")) {
    customElements.define("ivy-notification", Notification);
    window.onload = function () {
        addMessageBox();
        window.$notification = Notification;
    };
}
