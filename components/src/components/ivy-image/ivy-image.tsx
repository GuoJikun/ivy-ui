import { Component, Host, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'ivy-image',
  styleUrl: 'ivy-image.css',
  shadow: true,
})
export class IvyImage {
  @Prop() myObject: string;
  @Prop() myArray: string;
  @State() myInnerObject: object;
  @State() myInnerArray: Array<string>;

  componentWillLoad() {
    this.parseMyObjectProp(this.myObject);
    this.parseMyArrayProp(this.myArray);
  }

  @Watch('myObject')
  parseMyObjectProp(newValue: string) {
    if (newValue) this.myInnerObject = JSON.parse(newValue);
  }

  @Watch('myArray')
  parseMyArrayProp(newValue: string) {
    if (newValue) this.myInnerArray = JSON.parse(newValue);
  }

  @Watch('myInnerArray')
  watchTestHandler(newVal: Array<string>, val: Array<string>) {
    console.log(newVal, val);
  }
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
