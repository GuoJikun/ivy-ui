import { Breadcrumb, BreadcrumbItem } from "./breadcrumb";

if (!customElements.get("ivy-breadcrumb")) {
    customElements.define("ivy-breadcrumb", Breadcrumb);
}
if (!customElements.get("ivy-breadcrumb-item")) {
    customElements.define("ivy-breadcrumb-item", BreadcrumbItem);
}
