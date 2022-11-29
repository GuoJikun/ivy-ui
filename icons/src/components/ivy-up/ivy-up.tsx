import { Component, Host, h, Prop } from '@stencil/core';
@Component({
  tag: "ivy-up",
  styleUrl: 'ivy-up.css',
  shadow: true,
})
export class IvyUp {
  @Prop({
    attribute: 'size',
    mutable: true,
    reflect: true,
  }) size:string = '14px';

  @Prop({
    attribute: 'color',
    mutable: true,
    reflect: true,
  }) color:string = '#333333';

  render(){
    return (
      <Host size={this.size} color={this.color}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48"><path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="currentColor" d="m13 30 12-12 12 12" data-follow-stroke="#9b9b9b"/></svg>
      </Host>
    )
  }
}