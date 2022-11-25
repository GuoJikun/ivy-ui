import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ivy-message',
  styleUrl: 'ivy-message.css',
  shadow: true,
})
export class IvyMessage {
  @Prop({
    attribute: 'type',
    reflect: true,
    mutable: true,
  })
  type: string = 'info';

  @Prop({
    reflect: true,
  })
  content: string;

  @Prop({
    attribute: 'show',
    reflect: true,
    mutable: true,
  })
  show: boolean;

  render() {
    return (
      <Host type={this.type} show={this.show}>
        <div class="message">
          {/* <ivy-icon name="info" class="message-icon"></ivy-icon> */}
          <div class="message-content">{this.content}</div>
        </div>
      </Host>
    );
  }
}
