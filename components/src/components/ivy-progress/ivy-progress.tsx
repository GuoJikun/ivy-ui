import { Component, Host, h, Prop, Method } from '@stencil/core';

@Component({
  tag: 'ivy-progress',
  styleUrl: 'ivy-progress.css',
  shadow: true,
})
export class IvyProgress {
  @Prop({
    attribute: 'value',
    mutable: true,
    reflect: true,
  })
  value: string | number = '0';
  @Prop() color: string;
  @Prop() formatter: string = '{value}%';
  @Prop() showText: boolean = false;

  render() {
    return (
      <Host>
        <div class="bar">
          <div class="inner" style={{ 'width': `${this.value}%`, '--ivy-progress-color': this.color ? this.color : null }}></div>
        </div>
        <span class="text" style={{ display: this.showText ? 'inline' : 'none' }}>
          {this.formatter.replace('{value}', this.value.toString())}
        </span>
      </Host>
    );
  }

  @Method()
  async setValue(val: string | number) {
    this.value = val.toString();
  }
}
