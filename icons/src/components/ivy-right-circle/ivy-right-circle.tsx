import { Component, Host, h, Prop } from '@stencil/core';
@Component({
  tag: "ivy-right-circle",
  styleUrl: 'ivy-right-circle.css',
  shadow: true,
})
export class IvyRightCircle {
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48"><path stroke-linejoin="round" stroke-width="3" stroke="currentColor" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" data-follow-stroke="#9b9b9b"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="currentColor" d="m21 33 9-9-9-9" data-follow-stroke="#9b9b9b"/></svg>
      </Host>
    )
  }
}