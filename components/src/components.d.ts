/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IvyAspectRatio {
        "aspectRatio": string;
        "width": string;
    }
    interface IvyBadge {
        "isDot": boolean;
        "max": string;
        "type": string;
        "value": string;
    }
    interface IvyBreadcrumb {
        "separator": string;
    }
    interface IvyBreadcrumbItem {
        "blank": boolean;
        "href": string;
        "separator": string;
        "setSeparator": (val: string) => Promise<void>;
    }
    interface IvyButton {
        "loading": boolean;
        "plain": boolean;
        "round": boolean;
        "type": string;
    }
    interface IvyCard {
        "header": string;
    }
    interface IvyCarousel {
        "defaultActive": string;
    }
    interface IvyCarouselItem {
    }
    interface IvyCol {
        "span": string;
    }
    interface IvyCollapse {
        "active": string;
    }
    interface IvyCollapseItem {
        "active": string;
        "index": string;
        "name": string;
    }
    interface IvyDescription {
        "border": boolean;
        "columns": number;
        "gutter": string;
        "header": string;
        "labelWidth": string;
    }
    interface IvyDescriptionItem {
        "columns": string;
        "gutter": string;
        "label": string;
        "labelWidth": string;
    }
    interface IvyDialog {
        "close": () => Promise<void>;
        "open": () => Promise<void>;
        "visible": Boolean;
    }
    interface IvyDivider {
    }
    interface IvyDrawer {
        "close": () => Promise<void>;
        "maskClosable": boolean;
        "open": () => Promise<void>;
        "placement": string;
        "showHeader": boolean;
        "visible": Boolean;
        "width": string;
    }
    interface IvyEmpty {
    }
    interface IvyGrid {
        "border": boolean;
        "col": string;
        "square": boolean;
    }
    interface IvyGridItem {
        "col": string;
    }
    interface IvyImage {
        "alt": string;
        "fit": string;
        "lazy": boolean;
        "src": string;
    }
    interface IvyPager {
        "defaultPage": string;
        "layout": string;
    }
    interface IvyRow {
    }
    interface IvySwitch {
        "checked": boolean;
        "disabled": boolean;
    }
    interface IvyTag {
        "size": string;
        "theme": string;
        "type": string;
    }
    interface IvyTimeline {
        "reverse": boolean;
    }
    interface IvyTimelineItem {
        "reverse": boolean;
        "timestamp": string;
    }
    interface IvyTip {
        "name": string;
        "type": string;
    }
    interface IvyTooltip {
        "content": string;
        "delay": string;
        "placement": string;
        "theme": string;
        "visible": boolean;
    }
}
export interface IvyDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIvyDialogElement;
}
export interface IvyDrawerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIvyDrawerElement;
}
export interface IvyPagerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIvyPagerElement;
}
export interface IvySwitchCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIvySwitchElement;
}
declare global {
    interface HTMLIvyAspectRatioElement extends Components.IvyAspectRatio, HTMLStencilElement {
    }
    var HTMLIvyAspectRatioElement: {
        prototype: HTMLIvyAspectRatioElement;
        new (): HTMLIvyAspectRatioElement;
    };
    interface HTMLIvyBadgeElement extends Components.IvyBadge, HTMLStencilElement {
    }
    var HTMLIvyBadgeElement: {
        prototype: HTMLIvyBadgeElement;
        new (): HTMLIvyBadgeElement;
    };
    interface HTMLIvyBreadcrumbElement extends Components.IvyBreadcrumb, HTMLStencilElement {
    }
    var HTMLIvyBreadcrumbElement: {
        prototype: HTMLIvyBreadcrumbElement;
        new (): HTMLIvyBreadcrumbElement;
    };
    interface HTMLIvyBreadcrumbItemElement extends Components.IvyBreadcrumbItem, HTMLStencilElement {
    }
    var HTMLIvyBreadcrumbItemElement: {
        prototype: HTMLIvyBreadcrumbItemElement;
        new (): HTMLIvyBreadcrumbItemElement;
    };
    interface HTMLIvyButtonElement extends Components.IvyButton, HTMLStencilElement {
    }
    var HTMLIvyButtonElement: {
        prototype: HTMLIvyButtonElement;
        new (): HTMLIvyButtonElement;
    };
    interface HTMLIvyCardElement extends Components.IvyCard, HTMLStencilElement {
    }
    var HTMLIvyCardElement: {
        prototype: HTMLIvyCardElement;
        new (): HTMLIvyCardElement;
    };
    interface HTMLIvyCarouselElement extends Components.IvyCarousel, HTMLStencilElement {
    }
    var HTMLIvyCarouselElement: {
        prototype: HTMLIvyCarouselElement;
        new (): HTMLIvyCarouselElement;
    };
    interface HTMLIvyCarouselItemElement extends Components.IvyCarouselItem, HTMLStencilElement {
    }
    var HTMLIvyCarouselItemElement: {
        prototype: HTMLIvyCarouselItemElement;
        new (): HTMLIvyCarouselItemElement;
    };
    interface HTMLIvyColElement extends Components.IvyCol, HTMLStencilElement {
    }
    var HTMLIvyColElement: {
        prototype: HTMLIvyColElement;
        new (): HTMLIvyColElement;
    };
    interface HTMLIvyCollapseElement extends Components.IvyCollapse, HTMLStencilElement {
    }
    var HTMLIvyCollapseElement: {
        prototype: HTMLIvyCollapseElement;
        new (): HTMLIvyCollapseElement;
    };
    interface HTMLIvyCollapseItemElement extends Components.IvyCollapseItem, HTMLStencilElement {
    }
    var HTMLIvyCollapseItemElement: {
        prototype: HTMLIvyCollapseItemElement;
        new (): HTMLIvyCollapseItemElement;
    };
    interface HTMLIvyDescriptionElement extends Components.IvyDescription, HTMLStencilElement {
    }
    var HTMLIvyDescriptionElement: {
        prototype: HTMLIvyDescriptionElement;
        new (): HTMLIvyDescriptionElement;
    };
    interface HTMLIvyDescriptionItemElement extends Components.IvyDescriptionItem, HTMLStencilElement {
    }
    var HTMLIvyDescriptionItemElement: {
        prototype: HTMLIvyDescriptionItemElement;
        new (): HTMLIvyDescriptionItemElement;
    };
    interface HTMLIvyDialogElement extends Components.IvyDialog, HTMLStencilElement {
    }
    var HTMLIvyDialogElement: {
        prototype: HTMLIvyDialogElement;
        new (): HTMLIvyDialogElement;
    };
    interface HTMLIvyDividerElement extends Components.IvyDivider, HTMLStencilElement {
    }
    var HTMLIvyDividerElement: {
        prototype: HTMLIvyDividerElement;
        new (): HTMLIvyDividerElement;
    };
    interface HTMLIvyDrawerElement extends Components.IvyDrawer, HTMLStencilElement {
    }
    var HTMLIvyDrawerElement: {
        prototype: HTMLIvyDrawerElement;
        new (): HTMLIvyDrawerElement;
    };
    interface HTMLIvyEmptyElement extends Components.IvyEmpty, HTMLStencilElement {
    }
    var HTMLIvyEmptyElement: {
        prototype: HTMLIvyEmptyElement;
        new (): HTMLIvyEmptyElement;
    };
    interface HTMLIvyGridElement extends Components.IvyGrid, HTMLStencilElement {
    }
    var HTMLIvyGridElement: {
        prototype: HTMLIvyGridElement;
        new (): HTMLIvyGridElement;
    };
    interface HTMLIvyGridItemElement extends Components.IvyGridItem, HTMLStencilElement {
    }
    var HTMLIvyGridItemElement: {
        prototype: HTMLIvyGridItemElement;
        new (): HTMLIvyGridItemElement;
    };
    interface HTMLIvyImageElement extends Components.IvyImage, HTMLStencilElement {
    }
    var HTMLIvyImageElement: {
        prototype: HTMLIvyImageElement;
        new (): HTMLIvyImageElement;
    };
    interface HTMLIvyPagerElement extends Components.IvyPager, HTMLStencilElement {
    }
    var HTMLIvyPagerElement: {
        prototype: HTMLIvyPagerElement;
        new (): HTMLIvyPagerElement;
    };
    interface HTMLIvyRowElement extends Components.IvyRow, HTMLStencilElement {
    }
    var HTMLIvyRowElement: {
        prototype: HTMLIvyRowElement;
        new (): HTMLIvyRowElement;
    };
    interface HTMLIvySwitchElement extends Components.IvySwitch, HTMLStencilElement {
    }
    var HTMLIvySwitchElement: {
        prototype: HTMLIvySwitchElement;
        new (): HTMLIvySwitchElement;
    };
    interface HTMLIvyTagElement extends Components.IvyTag, HTMLStencilElement {
    }
    var HTMLIvyTagElement: {
        prototype: HTMLIvyTagElement;
        new (): HTMLIvyTagElement;
    };
    interface HTMLIvyTimelineElement extends Components.IvyTimeline, HTMLStencilElement {
    }
    var HTMLIvyTimelineElement: {
        prototype: HTMLIvyTimelineElement;
        new (): HTMLIvyTimelineElement;
    };
    interface HTMLIvyTimelineItemElement extends Components.IvyTimelineItem, HTMLStencilElement {
    }
    var HTMLIvyTimelineItemElement: {
        prototype: HTMLIvyTimelineItemElement;
        new (): HTMLIvyTimelineItemElement;
    };
    interface HTMLIvyTipElement extends Components.IvyTip, HTMLStencilElement {
    }
    var HTMLIvyTipElement: {
        prototype: HTMLIvyTipElement;
        new (): HTMLIvyTipElement;
    };
    interface HTMLIvyTooltipElement extends Components.IvyTooltip, HTMLStencilElement {
    }
    var HTMLIvyTooltipElement: {
        prototype: HTMLIvyTooltipElement;
        new (): HTMLIvyTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "ivy-aspect-ratio": HTMLIvyAspectRatioElement;
        "ivy-badge": HTMLIvyBadgeElement;
        "ivy-breadcrumb": HTMLIvyBreadcrumbElement;
        "ivy-breadcrumb-item": HTMLIvyBreadcrumbItemElement;
        "ivy-button": HTMLIvyButtonElement;
        "ivy-card": HTMLIvyCardElement;
        "ivy-carousel": HTMLIvyCarouselElement;
        "ivy-carousel-item": HTMLIvyCarouselItemElement;
        "ivy-col": HTMLIvyColElement;
        "ivy-collapse": HTMLIvyCollapseElement;
        "ivy-collapse-item": HTMLIvyCollapseItemElement;
        "ivy-description": HTMLIvyDescriptionElement;
        "ivy-description-item": HTMLIvyDescriptionItemElement;
        "ivy-dialog": HTMLIvyDialogElement;
        "ivy-divider": HTMLIvyDividerElement;
        "ivy-drawer": HTMLIvyDrawerElement;
        "ivy-empty": HTMLIvyEmptyElement;
        "ivy-grid": HTMLIvyGridElement;
        "ivy-grid-item": HTMLIvyGridItemElement;
        "ivy-image": HTMLIvyImageElement;
        "ivy-pager": HTMLIvyPagerElement;
        "ivy-row": HTMLIvyRowElement;
        "ivy-switch": HTMLIvySwitchElement;
        "ivy-tag": HTMLIvyTagElement;
        "ivy-timeline": HTMLIvyTimelineElement;
        "ivy-timeline-item": HTMLIvyTimelineItemElement;
        "ivy-tip": HTMLIvyTipElement;
        "ivy-tooltip": HTMLIvyTooltipElement;
    }
}
declare namespace LocalJSX {
    interface IvyAspectRatio {
        "aspectRatio"?: string;
        "width"?: string;
    }
    interface IvyBadge {
        "isDot"?: boolean;
        "max"?: string;
        "type"?: string;
        "value"?: string;
    }
    interface IvyBreadcrumb {
        "separator"?: string;
    }
    interface IvyBreadcrumbItem {
        "blank"?: boolean;
        "href"?: string;
        "separator"?: string;
    }
    interface IvyButton {
        "loading"?: boolean;
        "plain"?: boolean;
        "round"?: boolean;
        "type"?: string;
    }
    interface IvyCard {
        "header"?: string;
    }
    interface IvyCarousel {
        "defaultActive"?: string;
    }
    interface IvyCarouselItem {
    }
    interface IvyCol {
        "span"?: string;
    }
    interface IvyCollapse {
        "active"?: string;
    }
    interface IvyCollapseItem {
        "active"?: string;
        "index"?: string;
        "name"?: string;
    }
    interface IvyDescription {
        "border"?: boolean;
        "columns"?: number;
        "gutter"?: string;
        "header"?: string;
        "labelWidth"?: string;
    }
    interface IvyDescriptionItem {
        "columns"?: string;
        "gutter"?: string;
        "label"?: string;
        "labelWidth"?: string;
    }
    interface IvyDialog {
        "onClosed"?: (event: IvyDialogCustomEvent<string>) => void;
        "onSure"?: (event: IvyDialogCustomEvent<string>) => void;
        "visible"?: Boolean;
    }
    interface IvyDivider {
    }
    interface IvyDrawer {
        "maskClosable"?: boolean;
        "onClosed"?: (event: IvyDrawerCustomEvent<any>) => void;
        "placement"?: string;
        "showHeader"?: boolean;
        "visible"?: Boolean;
        "width"?: string;
    }
    interface IvyEmpty {
    }
    interface IvyGrid {
        "border"?: boolean;
        "col"?: string;
        "square"?: boolean;
    }
    interface IvyGridItem {
        "col"?: string;
    }
    interface IvyImage {
        "alt"?: string;
        "fit"?: string;
        "lazy"?: boolean;
        "src"?: string;
    }
    interface IvyPager {
        "defaultPage"?: string;
        "layout"?: string;
        "onPageChange"?: (event: IvyPagerCustomEvent<string>) => void;
    }
    interface IvyRow {
    }
    interface IvySwitch {
        "checked"?: boolean;
        "disabled"?: boolean;
        "onChange"?: (event: IvySwitchCustomEvent<boolean>) => void;
    }
    interface IvyTag {
        "size"?: string;
        "theme"?: string;
        "type"?: string;
    }
    interface IvyTimeline {
        "reverse"?: boolean;
    }
    interface IvyTimelineItem {
        "reverse"?: boolean;
        "timestamp"?: string;
    }
    interface IvyTip {
        "name"?: string;
        "type"?: string;
    }
    interface IvyTooltip {
        "content"?: string;
        "delay"?: string;
        "placement"?: string;
        "theme"?: string;
        "visible"?: boolean;
    }
    interface IntrinsicElements {
        "ivy-aspect-ratio": IvyAspectRatio;
        "ivy-badge": IvyBadge;
        "ivy-breadcrumb": IvyBreadcrumb;
        "ivy-breadcrumb-item": IvyBreadcrumbItem;
        "ivy-button": IvyButton;
        "ivy-card": IvyCard;
        "ivy-carousel": IvyCarousel;
        "ivy-carousel-item": IvyCarouselItem;
        "ivy-col": IvyCol;
        "ivy-collapse": IvyCollapse;
        "ivy-collapse-item": IvyCollapseItem;
        "ivy-description": IvyDescription;
        "ivy-description-item": IvyDescriptionItem;
        "ivy-dialog": IvyDialog;
        "ivy-divider": IvyDivider;
        "ivy-drawer": IvyDrawer;
        "ivy-empty": IvyEmpty;
        "ivy-grid": IvyGrid;
        "ivy-grid-item": IvyGridItem;
        "ivy-image": IvyImage;
        "ivy-pager": IvyPager;
        "ivy-row": IvyRow;
        "ivy-switch": IvySwitch;
        "ivy-tag": IvyTag;
        "ivy-timeline": IvyTimeline;
        "ivy-timeline-item": IvyTimelineItem;
        "ivy-tip": IvyTip;
        "ivy-tooltip": IvyTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ivy-aspect-ratio": LocalJSX.IvyAspectRatio & JSXBase.HTMLAttributes<HTMLIvyAspectRatioElement>;
            "ivy-badge": LocalJSX.IvyBadge & JSXBase.HTMLAttributes<HTMLIvyBadgeElement>;
            "ivy-breadcrumb": LocalJSX.IvyBreadcrumb & JSXBase.HTMLAttributes<HTMLIvyBreadcrumbElement>;
            "ivy-breadcrumb-item": LocalJSX.IvyBreadcrumbItem & JSXBase.HTMLAttributes<HTMLIvyBreadcrumbItemElement>;
            "ivy-button": LocalJSX.IvyButton & JSXBase.HTMLAttributes<HTMLIvyButtonElement>;
            "ivy-card": LocalJSX.IvyCard & JSXBase.HTMLAttributes<HTMLIvyCardElement>;
            "ivy-carousel": LocalJSX.IvyCarousel & JSXBase.HTMLAttributes<HTMLIvyCarouselElement>;
            "ivy-carousel-item": LocalJSX.IvyCarouselItem & JSXBase.HTMLAttributes<HTMLIvyCarouselItemElement>;
            "ivy-col": LocalJSX.IvyCol & JSXBase.HTMLAttributes<HTMLIvyColElement>;
            "ivy-collapse": LocalJSX.IvyCollapse & JSXBase.HTMLAttributes<HTMLIvyCollapseElement>;
            "ivy-collapse-item": LocalJSX.IvyCollapseItem & JSXBase.HTMLAttributes<HTMLIvyCollapseItemElement>;
            "ivy-description": LocalJSX.IvyDescription & JSXBase.HTMLAttributes<HTMLIvyDescriptionElement>;
            "ivy-description-item": LocalJSX.IvyDescriptionItem & JSXBase.HTMLAttributes<HTMLIvyDescriptionItemElement>;
            "ivy-dialog": LocalJSX.IvyDialog & JSXBase.HTMLAttributes<HTMLIvyDialogElement>;
            "ivy-divider": LocalJSX.IvyDivider & JSXBase.HTMLAttributes<HTMLIvyDividerElement>;
            "ivy-drawer": LocalJSX.IvyDrawer & JSXBase.HTMLAttributes<HTMLIvyDrawerElement>;
            "ivy-empty": LocalJSX.IvyEmpty & JSXBase.HTMLAttributes<HTMLIvyEmptyElement>;
            "ivy-grid": LocalJSX.IvyGrid & JSXBase.HTMLAttributes<HTMLIvyGridElement>;
            "ivy-grid-item": LocalJSX.IvyGridItem & JSXBase.HTMLAttributes<HTMLIvyGridItemElement>;
            "ivy-image": LocalJSX.IvyImage & JSXBase.HTMLAttributes<HTMLIvyImageElement>;
            "ivy-pager": LocalJSX.IvyPager & JSXBase.HTMLAttributes<HTMLIvyPagerElement>;
            "ivy-row": LocalJSX.IvyRow & JSXBase.HTMLAttributes<HTMLIvyRowElement>;
            "ivy-switch": LocalJSX.IvySwitch & JSXBase.HTMLAttributes<HTMLIvySwitchElement>;
            "ivy-tag": LocalJSX.IvyTag & JSXBase.HTMLAttributes<HTMLIvyTagElement>;
            "ivy-timeline": LocalJSX.IvyTimeline & JSXBase.HTMLAttributes<HTMLIvyTimelineElement>;
            "ivy-timeline-item": LocalJSX.IvyTimelineItem & JSXBase.HTMLAttributes<HTMLIvyTimelineItemElement>;
            "ivy-tip": LocalJSX.IvyTip & JSXBase.HTMLAttributes<HTMLIvyTipElement>;
            "ivy-tooltip": LocalJSX.IvyTooltip & JSXBase.HTMLAttributes<HTMLIvyTooltipElement>;
        }
    }
}
