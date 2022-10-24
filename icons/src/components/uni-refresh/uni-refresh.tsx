import { Component, Host, h, Prop } from '@stencil/core';
@Component({
  tag: "uni-refresh",
  styleUrl: 'uni-refresh.css',
  shadow: true,
})
export class UniRefresh {
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48"><path stroke-linejoin="round" stroke-width="2" stroke="currentColor" d="M42 8v16M6 24v16M6 24c0 9.941 8.059 18 18 18a17.94 17.94 0 0 0 12.5-5.048M42 24c0-9.941-8.058-18-18-18a17.947 17.947 0 0 0-12.951 5.5" data-follow-stroke="#333"/></svg>
      </Host>
    )
  }
}