/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface UniArrowUp {
        "color": string;
        "size": string;
    }
    interface UniRefresh {
        "color": string;
        "size": string;
    }
}
declare global {
    interface HTMLUniArrowUpElement extends Components.UniArrowUp, HTMLStencilElement {
    }
    var HTMLUniArrowUpElement: {
        prototype: HTMLUniArrowUpElement;
        new (): HTMLUniArrowUpElement;
    };
    interface HTMLUniRefreshElement extends Components.UniRefresh, HTMLStencilElement {
    }
    var HTMLUniRefreshElement: {
        prototype: HTMLUniRefreshElement;
        new (): HTMLUniRefreshElement;
    };
    interface HTMLElementTagNameMap {
        "uni-arrow-up": HTMLUniArrowUpElement;
        "uni-refresh": HTMLUniRefreshElement;
    }
}
declare namespace LocalJSX {
    interface UniArrowUp {
        "color"?: string;
        "size"?: string;
    }
    interface UniRefresh {
        "color"?: string;
        "size"?: string;
    }
    interface IntrinsicElements {
        "uni-arrow-up": UniArrowUp;
        "uni-refresh": UniRefresh;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "uni-arrow-up": LocalJSX.UniArrowUp & JSXBase.HTMLAttributes<HTMLUniArrowUpElement>;
            "uni-refresh": LocalJSX.UniRefresh & JSXBase.HTMLAttributes<HTMLUniRefreshElement>;
        }
    }
}
