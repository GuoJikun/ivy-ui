import { Component, Host, h, Prop, Watch, Event, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'ivy-drawer',
  styleUrl: 'ivy-drawer.css',
  shadow: true,
})
export class IvyDrawer {
  @Prop() width: string = '36vw';

  @Prop({
    attribute: 'show-header',
    mutable: true,
    reflect: true,
  })
  showHeader: boolean = false;

  @Prop({
    attribute: 'header',
  })
  header: string = '';

  @Prop({
    attribute: 'mask-closable',
    mutable: true,
    reflect: true,
  })
  maskClosable: boolean = true;

  @Prop({
    attribute: 'placement',
    mutable: true,
    reflect: true,
  })
  placement: string = 'right';

  @Watch('placement')
  validateName(val: string) {
    const flag = ['left', 'right', 'top', 'bottom'].includes(val);
    if (!flag) {
      throw new Error('attr placement must is left/right/top/bottom');
    }
  }

  renderHeader() {
    if (this.showHeader) {
      return (
        <div class="ivy-drawer-header">
          <slot name="header">{this.header}</slot>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <Host show={this.visible}>
        <div class="ivy-mask" onClick={this.maskClose.bind(this)}></div>
        <div
          class="ivy-drawer"
          style={{ width: ['left', 'right'].includes(this.placement) ? this.width : '100%', height: ['top', 'bottom'].includes(this.placement) ? this.width : '100%' }}
        >
          {this.renderHeader()}

          <div class="ivy-drawer-body">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }

  @Prop({
    attribute: 'show',
    mutable: true,
    reflect: true,
  })
  visible: Boolean = false;

  @Event() closed: EventEmitter;
  closeHandler() {
    this.closed.emit();
  }

  @Method()
  async open() {
    this.visible = true;
  }
  @Method()
  async close() {
    this.closeHandler();
    this.visible = false;
  }

  maskClose() {
    if (this.maskClosable) {
      this.visible = false;
    }
  }
}
