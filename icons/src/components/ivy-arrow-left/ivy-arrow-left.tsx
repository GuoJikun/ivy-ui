import { Component, Host, h, Prop } from '@stencil/core';
@Component({
  tag: "ivy-arrow-left",
  styleUrl: 'ivy-arrow-left.css',
  shadow: true,
})
export class IvyArrowLeft {
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48"><path fill-opacity=".01" fill="currentColor" d="M0 0h48v48H0z" data-follow-fill="#fff"/><path stroke-linejoin="round" stroke-width="2" stroke="currentColor" d="M31 36 19 24l12-12" data-follow-stroke="#333"/></svg>
      </Host>
    )
  }
}