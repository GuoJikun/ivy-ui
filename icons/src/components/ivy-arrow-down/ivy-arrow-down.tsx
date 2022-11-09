import { Component, Host, h, Prop } from '@stencil/core';
@Component({
  tag: "ivy-arrow-down",
  styleUrl: 'ivy-arrow-down.css',
  shadow: true,
})
export class IvyArrowDown {
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48"><path fill-opacity=".01" fill="currentColor" d="M0 0h48v48H0z" data-follow-fill="#fff"/><path stroke-linejoin="round" stroke-width="2" stroke="currentColor" d="M37 18 25 30 13 18" data-follow-stroke="#333"/></svg>
      </Host>
    )
  }
}