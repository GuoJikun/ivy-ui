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
    interface IvyCheckbox {
        "checked": boolean;
        "disabled": boolean;
        "falseValue": string;
        "trueValue": string;
        "value": string;
    }
    interface IvyCheckboxGroup {
        "disabled": boolean;
        "removeValue": (item: string) => Promise<void>;
        "setValue": (item: string) => Promise<void>;
        "value": Array<string>;
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
    interface IvyContextmenu {
        "visible": boolean;
    }
    interface IvyContextmenuItem {
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
    interface IvyDetails {
        "header": string;
        "open": boolean;
    }
    interface IvyDialog {
        "close": () => Promise<void>;
        "header": string;
        "open": () => Promise<void>;
        "visible": Boolean;
    }
    interface IvyDivider {
    }
    interface IvyDrawer {
        "close": () => Promise<void>;
        "header": string;
        "maskClosable": boolean;
        "open": () => Promise<void>;
        "placement": string;
        "showHeader": boolean;
        "visible": Boolean;
        "width": string;
    }
    interface IvyDropdown {
        "disabled": boolean;
    }
    interface IvyDropdownItem {
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
    interface IvyInput {
        "autoFocus": boolean;
        "disabled": boolean;
        "placeholder": string;
        "readonly": boolean;
        "type": string;
        "value": string;
    }
    interface IvyMessage {
        "content": string;
        "show": boolean;
        "type": string;
    }
    interface IvyNotification {
        "content": string;
        "header": string;
        "show": boolean;
        "type": string;
    }
    interface IvyOption {
        "disabled": boolean;
        "label": string;
        "value": string;
    }
    interface IvyPager {
        "defaultPage": string;
        "layout": string;
        "setTotal": (total: number) => Promise<void>;
        "size": string;
        "sizes": string;
        "total": string;
    }
    interface IvyProgress {
        "color": string;
        "formatter": string;
        "setValue": (val: string | number) => Promise<void>;
        "showText": boolean;
        "value": string | number;
    }
    interface IvyRadio {
        "checked": boolean;
        "disabled": boolean;
        "value": string;
    }
    interface IvyRadioGroup {
        "disabled": boolean;
        "dispatchEventChange": (val: string) => Promise<void>;
        "value": string;
    }
    interface IvyRow {
    }
    interface IvyScrollbar {
        "height": string;
        "maxHeight": string;
        "minSize": number;
    }
    interface IvySelect {
        "disabled": boolean;
        "placeholder": string;
        "value": string;
    }
    interface IvySpace {
        "direction": string;
    }
    interface IvyStep {
        "content": string;
        "setIndex": (val: string) => Promise<void>;
        "status": string;
    }
    interface IvySteps {
        "current": string;
        "status": string;
    }
    interface IvySwitch {
        "checked": boolean;
        "disabled": boolean;
    }
    interface IvyTabPane {
        "index": string;
        "label": string;
        "show": boolean;
    }
    interface IvyTabs {
        "active": string;
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
export interface IvyCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIvyCheckboxElement;
}
export interface IvyCheckboxGroupCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIvyCheckboxGroupElement;
}
export interface IvyContextmenuCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIvyContextmenuElement;
}
export interface IvyDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIvyDialogElement;
}
export interface IvyDrawerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIvyDrawerElement;
}
export interface IvyDropdownCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIvyDropdownElement;
}
export interface IvyInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIvyInputElement;
}
export interface IvyPagerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIvyPagerElement;
}
export interface IvyRadioCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIvyRadioElement;
}
export interface IvyRadioGroupCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIvyRadioGroupElement;
}
export interface IvySelectCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIvySelectElement;
}
export interface IvySwitchCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIvySwitchElement;
}
export interface IvyTabsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIvyTabsElement;
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
    interface HTMLIvyCheckboxElement extends Components.IvyCheckbox, HTMLStencilElement {
    }
    var HTMLIvyCheckboxElement: {
        prototype: HTMLIvyCheckboxElement;
        new (): HTMLIvyCheckboxElement;
    };
    interface HTMLIvyCheckboxGroupElement extends Components.IvyCheckboxGroup, HTMLStencilElement {
    }
    var HTMLIvyCheckboxGroupElement: {
        prototype: HTMLIvyCheckboxGroupElement;
        new (): HTMLIvyCheckboxGroupElement;
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
    interface HTMLIvyContextmenuElement extends Components.IvyContextmenu, HTMLStencilElement {
    }
    var HTMLIvyContextmenuElement: {
        prototype: HTMLIvyContextmenuElement;
        new (): HTMLIvyContextmenuElement;
    };
    interface HTMLIvyContextmenuItemElement extends Components.IvyContextmenuItem, HTMLStencilElement {
    }
    var HTMLIvyContextmenuItemElement: {
        prototype: HTMLIvyContextmenuItemElement;
        new (): HTMLIvyContextmenuItemElement;
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
    interface HTMLIvyDetailsElement extends Components.IvyDetails, HTMLStencilElement {
    }
    var HTMLIvyDetailsElement: {
        prototype: HTMLIvyDetailsElement;
        new (): HTMLIvyDetailsElement;
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
    interface HTMLIvyDropdownElement extends Components.IvyDropdown, HTMLStencilElement {
    }
    var HTMLIvyDropdownElement: {
        prototype: HTMLIvyDropdownElement;
        new (): HTMLIvyDropdownElement;
    };
    interface HTMLIvyDropdownItemElement extends Components.IvyDropdownItem, HTMLStencilElement {
    }
    var HTMLIvyDropdownItemElement: {
        prototype: HTMLIvyDropdownItemElement;
        new (): HTMLIvyDropdownItemElement;
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
    interface HTMLIvyInputElement extends Components.IvyInput, HTMLStencilElement {
    }
    var HTMLIvyInputElement: {
        prototype: HTMLIvyInputElement;
        new (): HTMLIvyInputElement;
    };
    interface HTMLIvyMessageElement extends Components.IvyMessage, HTMLStencilElement {
    }
    var HTMLIvyMessageElement: {
        prototype: HTMLIvyMessageElement;
        new (): HTMLIvyMessageElement;
    };
    interface HTMLIvyNotificationElement extends Components.IvyNotification, HTMLStencilElement {
    }
    var HTMLIvyNotificationElement: {
        prototype: HTMLIvyNotificationElement;
        new (): HTMLIvyNotificationElement;
    };
    interface HTMLIvyOptionElement extends Components.IvyOption, HTMLStencilElement {
    }
    var HTMLIvyOptionElement: {
        prototype: HTMLIvyOptionElement;
        new (): HTMLIvyOptionElement;
    };
    interface HTMLIvyPagerElement extends Components.IvyPager, HTMLStencilElement {
    }
    var HTMLIvyPagerElement: {
        prototype: HTMLIvyPagerElement;
        new (): HTMLIvyPagerElement;
    };
    interface HTMLIvyProgressElement extends Components.IvyProgress, HTMLStencilElement {
    }
    var HTMLIvyProgressElement: {
        prototype: HTMLIvyProgressElement;
        new (): HTMLIvyProgressElement;
    };
    interface HTMLIvyRadioElement extends Components.IvyRadio, HTMLStencilElement {
    }
    var HTMLIvyRadioElement: {
        prototype: HTMLIvyRadioElement;
        new (): HTMLIvyRadioElement;
    };
    interface HTMLIvyRadioGroupElement extends Components.IvyRadioGroup, HTMLStencilElement {
    }
    var HTMLIvyRadioGroupElement: {
        prototype: HTMLIvyRadioGroupElement;
        new (): HTMLIvyRadioGroupElement;
    };
    interface HTMLIvyRowElement extends Components.IvyRow, HTMLStencilElement {
    }
    var HTMLIvyRowElement: {
        prototype: HTMLIvyRowElement;
        new (): HTMLIvyRowElement;
    };
    interface HTMLIvyScrollbarElement extends Components.IvyScrollbar, HTMLStencilElement {
    }
    var HTMLIvyScrollbarElement: {
        prototype: HTMLIvyScrollbarElement;
        new (): HTMLIvyScrollbarElement;
    };
    interface HTMLIvySelectElement extends Components.IvySelect, HTMLStencilElement {
    }
    var HTMLIvySelectElement: {
        prototype: HTMLIvySelectElement;
        new (): HTMLIvySelectElement;
    };
    interface HTMLIvySpaceElement extends Components.IvySpace, HTMLStencilElement {
    }
    var HTMLIvySpaceElement: {
        prototype: HTMLIvySpaceElement;
        new (): HTMLIvySpaceElement;
    };
    interface HTMLIvyStepElement extends Components.IvyStep, HTMLStencilElement {
    }
    var HTMLIvyStepElement: {
        prototype: HTMLIvyStepElement;
        new (): HTMLIvyStepElement;
    };
    interface HTMLIvyStepsElement extends Components.IvySteps, HTMLStencilElement {
    }
    var HTMLIvyStepsElement: {
        prototype: HTMLIvyStepsElement;
        new (): HTMLIvyStepsElement;
    };
    interface HTMLIvySwitchElement extends Components.IvySwitch, HTMLStencilElement {
    }
    var HTMLIvySwitchElement: {
        prototype: HTMLIvySwitchElement;
        new (): HTMLIvySwitchElement;
    };
    interface HTMLIvyTabPaneElement extends Components.IvyTabPane, HTMLStencilElement {
    }
    var HTMLIvyTabPaneElement: {
        prototype: HTMLIvyTabPaneElement;
        new (): HTMLIvyTabPaneElement;
    };
    interface HTMLIvyTabsElement extends Components.IvyTabs, HTMLStencilElement {
    }
    var HTMLIvyTabsElement: {
        prototype: HTMLIvyTabsElement;
        new (): HTMLIvyTabsElement;
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
        "ivy-checkbox": HTMLIvyCheckboxElement;
        "ivy-checkbox-group": HTMLIvyCheckboxGroupElement;
        "ivy-col": HTMLIvyColElement;
        "ivy-collapse": HTMLIvyCollapseElement;
        "ivy-collapse-item": HTMLIvyCollapseItemElement;
        "ivy-contextmenu": HTMLIvyContextmenuElement;
        "ivy-contextmenu-item": HTMLIvyContextmenuItemElement;
        "ivy-description": HTMLIvyDescriptionElement;
        "ivy-description-item": HTMLIvyDescriptionItemElement;
        "ivy-details": HTMLIvyDetailsElement;
        "ivy-dialog": HTMLIvyDialogElement;
        "ivy-divider": HTMLIvyDividerElement;
        "ivy-drawer": HTMLIvyDrawerElement;
        "ivy-dropdown": HTMLIvyDropdownElement;
        "ivy-dropdown-item": HTMLIvyDropdownItemElement;
        "ivy-empty": HTMLIvyEmptyElement;
        "ivy-grid": HTMLIvyGridElement;
        "ivy-grid-item": HTMLIvyGridItemElement;
        "ivy-image": HTMLIvyImageElement;
        "ivy-input": HTMLIvyInputElement;
        "ivy-message": HTMLIvyMessageElement;
        "ivy-notification": HTMLIvyNotificationElement;
        "ivy-option": HTMLIvyOptionElement;
        "ivy-pager": HTMLIvyPagerElement;
        "ivy-progress": HTMLIvyProgressElement;
        "ivy-radio": HTMLIvyRadioElement;
        "ivy-radio-group": HTMLIvyRadioGroupElement;
        "ivy-row": HTMLIvyRowElement;
        "ivy-scrollbar": HTMLIvyScrollbarElement;
        "ivy-select": HTMLIvySelectElement;
        "ivy-space": HTMLIvySpaceElement;
        "ivy-step": HTMLIvyStepElement;
        "ivy-steps": HTMLIvyStepsElement;
        "ivy-switch": HTMLIvySwitchElement;
        "ivy-tab-pane": HTMLIvyTabPaneElement;
        "ivy-tabs": HTMLIvyTabsElement;
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
    interface IvyCheckbox {
        "checked"?: boolean;
        "disabled"?: boolean;
        "falseValue"?: string;
        "onChanged"?: (event: IvyCheckboxCustomEvent<boolean>) => void;
        "trueValue"?: string;
        "value"?: string;
    }
    interface IvyCheckboxGroup {
        "disabled"?: boolean;
        "onChange"?: (event: IvyCheckboxGroupCustomEvent<Array<string>>) => void;
        "value"?: Array<string>;
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
    interface IvyContextmenu {
        "onCommand"?: (event: IvyContextmenuCustomEvent<string>) => void;
        "visible"?: boolean;
    }
    interface IvyContextmenuItem {
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
    interface IvyDetails {
        "header"?: string;
        "open"?: boolean;
    }
    interface IvyDialog {
        "header"?: string;
        "onClosed"?: (event: IvyDialogCustomEvent<string>) => void;
        "onSure"?: (event: IvyDialogCustomEvent<string>) => void;
        "visible"?: Boolean;
    }
    interface IvyDivider {
    }
    interface IvyDrawer {
        "header"?: string;
        "maskClosable"?: boolean;
        "onClosed"?: (event: IvyDrawerCustomEvent<any>) => void;
        "placement"?: string;
        "showHeader"?: boolean;
        "visible"?: Boolean;
        "width"?: string;
    }
    interface IvyDropdown {
        "disabled"?: boolean;
        "onCommand"?: (event: IvyDropdownCustomEvent<string>) => void;
    }
    interface IvyDropdownItem {
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
    interface IvyInput {
        "autoFocus"?: boolean;
        "disabled"?: boolean;
        "onBlur"?: (event: IvyInputCustomEvent<any>) => void;
        "onChanged"?: (event: IvyInputCustomEvent<string | number | boolean>) => void;
        "onFocus"?: (event: IvyInputCustomEvent<any>) => void;
        "placeholder"?: string;
        "readonly"?: boolean;
        "type"?: string;
        "value"?: string;
    }
    interface IvyMessage {
        "content"?: string;
        "show"?: boolean;
        "type"?: string;
    }
    interface IvyNotification {
        "content"?: string;
        "header"?: string;
        "show"?: boolean;
        "type"?: string;
    }
    interface IvyOption {
        "disabled"?: boolean;
        "label"?: string;
        "value"?: string;
    }
    interface IvyPager {
        "defaultPage"?: string;
        "layout"?: string;
        "onCurrent-change"?: (event: IvyPagerCustomEvent<number>) => void;
        "size"?: string;
        "sizes"?: string;
        "total"?: string;
    }
    interface IvyProgress {
        "color"?: string;
        "formatter"?: string;
        "showText"?: boolean;
        "value"?: string | number;
    }
    interface IvyRadio {
        "checked"?: boolean;
        "disabled"?: boolean;
        "onChanged"?: (event: IvyRadioCustomEvent<boolean>) => void;
        "value"?: string;
    }
    interface IvyRadioGroup {
        "disabled"?: boolean;
        "onChanged"?: (event: IvyRadioGroupCustomEvent<string>) => void;
        "value"?: string;
    }
    interface IvyRow {
    }
    interface IvyScrollbar {
        "height"?: string;
        "maxHeight"?: string;
        "minSize"?: number;
    }
    interface IvySelect {
        "disabled"?: boolean;
        "onChanged"?: (event: IvySelectCustomEvent<string>) => void;
        "placeholder"?: string;
        "value"?: string;
    }
    interface IvySpace {
        "direction"?: string;
    }
    interface IvyStep {
        "content"?: string;
        "status"?: string;
    }
    interface IvySteps {
        "current"?: string;
        "status"?: string;
    }
    interface IvySwitch {
        "checked"?: boolean;
        "disabled"?: boolean;
        "onChanged"?: (event: IvySwitchCustomEvent<boolean>) => void;
    }
    interface IvyTabPane {
        "index"?: string;
        "label"?: string;
        "show"?: boolean;
    }
    interface IvyTabs {
        "active"?: string;
        "onTab-click"?: (event: IvyTabsCustomEvent<string>) => void;
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
        "ivy-checkbox": IvyCheckbox;
        "ivy-checkbox-group": IvyCheckboxGroup;
        "ivy-col": IvyCol;
        "ivy-collapse": IvyCollapse;
        "ivy-collapse-item": IvyCollapseItem;
        "ivy-contextmenu": IvyContextmenu;
        "ivy-contextmenu-item": IvyContextmenuItem;
        "ivy-description": IvyDescription;
        "ivy-description-item": IvyDescriptionItem;
        "ivy-details": IvyDetails;
        "ivy-dialog": IvyDialog;
        "ivy-divider": IvyDivider;
        "ivy-drawer": IvyDrawer;
        "ivy-dropdown": IvyDropdown;
        "ivy-dropdown-item": IvyDropdownItem;
        "ivy-empty": IvyEmpty;
        "ivy-grid": IvyGrid;
        "ivy-grid-item": IvyGridItem;
        "ivy-image": IvyImage;
        "ivy-input": IvyInput;
        "ivy-message": IvyMessage;
        "ivy-notification": IvyNotification;
        "ivy-option": IvyOption;
        "ivy-pager": IvyPager;
        "ivy-progress": IvyProgress;
        "ivy-radio": IvyRadio;
        "ivy-radio-group": IvyRadioGroup;
        "ivy-row": IvyRow;
        "ivy-scrollbar": IvyScrollbar;
        "ivy-select": IvySelect;
        "ivy-space": IvySpace;
        "ivy-step": IvyStep;
        "ivy-steps": IvySteps;
        "ivy-switch": IvySwitch;
        "ivy-tab-pane": IvyTabPane;
        "ivy-tabs": IvyTabs;
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
            "ivy-checkbox": LocalJSX.IvyCheckbox & JSXBase.HTMLAttributes<HTMLIvyCheckboxElement>;
            "ivy-checkbox-group": LocalJSX.IvyCheckboxGroup & JSXBase.HTMLAttributes<HTMLIvyCheckboxGroupElement>;
            "ivy-col": LocalJSX.IvyCol & JSXBase.HTMLAttributes<HTMLIvyColElement>;
            "ivy-collapse": LocalJSX.IvyCollapse & JSXBase.HTMLAttributes<HTMLIvyCollapseElement>;
            "ivy-collapse-item": LocalJSX.IvyCollapseItem & JSXBase.HTMLAttributes<HTMLIvyCollapseItemElement>;
            "ivy-contextmenu": LocalJSX.IvyContextmenu & JSXBase.HTMLAttributes<HTMLIvyContextmenuElement>;
            "ivy-contextmenu-item": LocalJSX.IvyContextmenuItem & JSXBase.HTMLAttributes<HTMLIvyContextmenuItemElement>;
            "ivy-description": LocalJSX.IvyDescription & JSXBase.HTMLAttributes<HTMLIvyDescriptionElement>;
            "ivy-description-item": LocalJSX.IvyDescriptionItem & JSXBase.HTMLAttributes<HTMLIvyDescriptionItemElement>;
            "ivy-details": LocalJSX.IvyDetails & JSXBase.HTMLAttributes<HTMLIvyDetailsElement>;
            "ivy-dialog": LocalJSX.IvyDialog & JSXBase.HTMLAttributes<HTMLIvyDialogElement>;
            "ivy-divider": LocalJSX.IvyDivider & JSXBase.HTMLAttributes<HTMLIvyDividerElement>;
            "ivy-drawer": LocalJSX.IvyDrawer & JSXBase.HTMLAttributes<HTMLIvyDrawerElement>;
            "ivy-dropdown": LocalJSX.IvyDropdown & JSXBase.HTMLAttributes<HTMLIvyDropdownElement>;
            "ivy-dropdown-item": LocalJSX.IvyDropdownItem & JSXBase.HTMLAttributes<HTMLIvyDropdownItemElement>;
            "ivy-empty": LocalJSX.IvyEmpty & JSXBase.HTMLAttributes<HTMLIvyEmptyElement>;
            "ivy-grid": LocalJSX.IvyGrid & JSXBase.HTMLAttributes<HTMLIvyGridElement>;
            "ivy-grid-item": LocalJSX.IvyGridItem & JSXBase.HTMLAttributes<HTMLIvyGridItemElement>;
            "ivy-image": LocalJSX.IvyImage & JSXBase.HTMLAttributes<HTMLIvyImageElement>;
            "ivy-input": LocalJSX.IvyInput & JSXBase.HTMLAttributes<HTMLIvyInputElement>;
            "ivy-message": LocalJSX.IvyMessage & JSXBase.HTMLAttributes<HTMLIvyMessageElement>;
            "ivy-notification": LocalJSX.IvyNotification & JSXBase.HTMLAttributes<HTMLIvyNotificationElement>;
            "ivy-option": LocalJSX.IvyOption & JSXBase.HTMLAttributes<HTMLIvyOptionElement>;
            "ivy-pager": LocalJSX.IvyPager & JSXBase.HTMLAttributes<HTMLIvyPagerElement>;
            "ivy-progress": LocalJSX.IvyProgress & JSXBase.HTMLAttributes<HTMLIvyProgressElement>;
            "ivy-radio": LocalJSX.IvyRadio & JSXBase.HTMLAttributes<HTMLIvyRadioElement>;
            "ivy-radio-group": LocalJSX.IvyRadioGroup & JSXBase.HTMLAttributes<HTMLIvyRadioGroupElement>;
            "ivy-row": LocalJSX.IvyRow & JSXBase.HTMLAttributes<HTMLIvyRowElement>;
            "ivy-scrollbar": LocalJSX.IvyScrollbar & JSXBase.HTMLAttributes<HTMLIvyScrollbarElement>;
            "ivy-select": LocalJSX.IvySelect & JSXBase.HTMLAttributes<HTMLIvySelectElement>;
            "ivy-space": LocalJSX.IvySpace & JSXBase.HTMLAttributes<HTMLIvySpaceElement>;
            "ivy-step": LocalJSX.IvyStep & JSXBase.HTMLAttributes<HTMLIvyStepElement>;
            "ivy-steps": LocalJSX.IvySteps & JSXBase.HTMLAttributes<HTMLIvyStepsElement>;
            "ivy-switch": LocalJSX.IvySwitch & JSXBase.HTMLAttributes<HTMLIvySwitchElement>;
            "ivy-tab-pane": LocalJSX.IvyTabPane & JSXBase.HTMLAttributes<HTMLIvyTabPaneElement>;
            "ivy-tabs": LocalJSX.IvyTabs & JSXBase.HTMLAttributes<HTMLIvyTabsElement>;
            "ivy-tag": LocalJSX.IvyTag & JSXBase.HTMLAttributes<HTMLIvyTagElement>;
            "ivy-timeline": LocalJSX.IvyTimeline & JSXBase.HTMLAttributes<HTMLIvyTimelineElement>;
            "ivy-timeline-item": LocalJSX.IvyTimelineItem & JSXBase.HTMLAttributes<HTMLIvyTimelineItemElement>;
            "ivy-tip": LocalJSX.IvyTip & JSXBase.HTMLAttributes<HTMLIvyTipElement>;
            "ivy-tooltip": LocalJSX.IvyTooltip & JSXBase.HTMLAttributes<HTMLIvyTooltipElement>;
        }
    }
}
