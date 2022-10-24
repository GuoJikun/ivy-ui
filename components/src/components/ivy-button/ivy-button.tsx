import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ivy-button',
  styleUrl: 'ivy-button.css',
  shadow: true,
})
export class IvyButton {
  @Prop({
    attribute: 'type',
    reflect: true,
  })
  type: string = 'default';

  @Prop({
    attribute: 'plain',
    reflect: true,
  })
  plain: boolean = false;

  @Prop({
    attribute: 'round',
    reflect: true,
  })
  round: boolean = false;

  @Prop({
    attribute: 'loading',
    reflect: true,
  })
  loading: boolean = false;

  render() {
    return (
      <Host type={this.type} loading={this.loading} round={this.round} plain={this.plain}>
        <svg aria-hidden="true" id="hidden-svg">
          <symbol id="ivy-icon-loading" viewBox="0 0 1024 1024">
            <path d="M512 64q14.016 0 23.008 8.992T544 96v192q0 14.016-8.992 23.008T512 320t-23.008-8.992T480 288V96q0-14.016 8.992-23.008T512 64z m0 640q14.016 0 23.008 8.992T544 736v192q0 14.016-8.992 23.008T512 960t-23.008-8.992T480 928v-192q0-14.016 8.992-23.008T512 704z m448-192q0 14.016-8.992 23.008T928 544h-192q-14.016 0-23.008-8.992T704 512t8.992-23.008T736 480h192q14.016 0 23.008 8.992T960 512z m-640 0q0 14.016-8.992 23.008T288 544H96q-14.016 0-23.008-8.992T64 512t8.992-23.008T96 480h192q14.016 0 23.008 8.992T320 512zM195.008 195.008q10.016-8.992 23.008-8.992t22.016 8.992l136 136q8.992 10.016 8.992 22.496t-9.504 22.016-22.016 9.504-22.496-8.992l-136-136q-8.992-8.992-8.992-22.016t8.992-23.008zM648 648q10.016-10.016 22.496-10.016t22.496 10.016l136 136q8.992 8.992 8.992 22.016t-9.504 22.496-22.496 9.504-22.016-8.992l-136-136q-10.016-10.016-10.016-22.496t10.016-22.496z m180.992-452.992q8.992 10.016 8.992 23.008t-8.992 22.016l-136 136q-10.016 8.992-22.496 8.992t-22.016-9.504-9.504-22.016 8.992-22.496l136-136q8.992-8.992 22.016-8.992t23.008 8.992zM376 648q10.016 10.016 10.016 22.496t-10.016 22.496l-136 136q-8.992 8.992-22.016 8.992t-22.496-9.504-9.504-22.496 8.992-22.016l136-136q10.016-10.016 22.496-10.016t22.496 10.016z"></path>
          </symbol>
        </svg>
        <slot name="icon">
          <svg viewBox="0 0 1024 1024" class="ivy-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" aria-hidden="true" id="ivy-loading">
            <use href="#ivy-icon-loading"></use>
          </svg>
        </slot>
        <span class="ivy-button-inner">
          <slot />
        </span>
      </Host>
    );
  }
}
