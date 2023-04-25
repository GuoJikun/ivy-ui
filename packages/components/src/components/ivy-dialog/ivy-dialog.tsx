import { Component, Host, h, Prop, Method, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ivy-dialog',
  styleUrl: 'ivy-dialog.css',
  shadow: true,
})
export class IvyDialog {
  @Prop({
    attribute: 'show',
    mutable: true,
    reflect: true,
  })
  visible: Boolean = false;

  @Prop({ reflect: true }) header: string;

  @Event() closed: EventEmitter<string>;
  closeHandler(type: string) {
    this.closed.emit(type);
  }

  @Event() sure: EventEmitter<string>;
  sureHandler() {
    this.sure.emit();
  }

  render() {
    return (
      <Host show={this.visible}>
        <div class="ivy-mask"></div>
        <div class="ivy-modal">
          <div class="ivy-modal-header">
            <slot name="header">{this.header}</slot>
          </div>
          <div class="ivy-modal-content">
            <slot></slot>
          </div>
          <div class="ivy-modal-footer">
            <slot name="footer">
              <button class="ivy-modal-button ivy-modal-button-cancel" onClick={this.cancel.bind(this)}>
                取消
              </button>
              <button class="ivy-modal-button ivy-modal-button-primary" onClick={this.sureEventHandler.bind(this)}>
                确定
              </button>
            </slot>
          </div>
          <div class="ivy-modal-close" onClick={this.close.bind(this)}></div>
        </div>
      </Host>
    );
  }
  @Method()
  async open() {
    this.visible = true;
  }
  @Method()
  async close() {
    this.visible = false;
    this.closeHandler('close');
  }

  sureEventHandler() {
    this.visible = false;
    this.sureHandler();
  }

  cancel() {
    this.visible = false;
    this.closeHandler('cancel');
  }
}
