import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ivy-timeline-item',
  styleUrl: 'ivy-timeline-item.css',
  shadow: true,
})
export class IvyTimelineItem {
  @Prop({
    attribute: 'timestamp',
    reflect: true,
  })
  timestamp: string = '';

  render() {
    return (
      <Host>
        <div class="ivy-timeline-dot"></div>
        <div class="ivy-timeline-line"></div>
        <div class="ivy-timeline-ctx">
          <div class="ivy-timeline-timestamp">{this.timestamp}</div>
          <div>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
