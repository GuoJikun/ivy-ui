import { Component, Host, h, Prop } from '@stencil/core';

export type IvyResultType = 'success' | 'warning' | 'danger' | 'info' | 'custom';

@Component({
  tag: 'ivy-result',
  styleUrl: 'ivy-result.css',
  shadow: true,
})
export class IvyResult {
  @Prop({
    attribute: 'type',
    reflect: true,
    mutable: true,
  })
  type: IvyResultType = 'success';

  @Prop({
    attribute: 'header',
  })
  header: string = '';

  @Prop({
    attribute: 'description',
  })
  description: string = '';

  render() {
    return (
      <Host>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', width: '0px', height: '0px', overflow: 'hidden' }}>
          <symbol id="success" fill="none" viewBox="0 0 48 48">
            <path
              stroke-linejoin="round"
              stroke-width="3"
              stroke="currentColor"
              d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4 19.938 19.938 0 0 0 9.858 9.858 19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
              data-follow-stroke="#9b9b9b"
            />
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="currentColor" d="m16 24 6 6 12-12" data-follow-stroke="#9b9b9b" />
          </symbol>
          <symbol id="warning" fill="none" viewBox="0 0 48 48">
            <path
              stroke-linejoin="round"
              stroke-width="3"
              stroke="currentColor"
              d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4 19.938 19.938 0 0 0 9.858 9.858 19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
              data-follow-stroke="#9b9b9b"
            />
            <path fill="currentColor" d="M24 37a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#9b9b9b" />
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="currentColor" d="M24 12v16" data-follow-stroke="#9b9b9b" />
          </symbol>
          <symbol id="error" fill="none" viewBox="0 0 48 48">
            <path
              stroke-linejoin="round"
              stroke-width="3"
              stroke="currentColor"
              d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
              data-follow-stroke="#9b9b9b"
            />
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="3"
              stroke="currentColor"
              d="M29.657 18.343 18.343 29.657M18.343 18.343l11.314 11.314"
              data-follow-stroke="#9b9b9b"
            />
          </symbol>
          <symbol id="info" fill="none" viewBox="0 0 48 48">
            <path
              stroke-linejoin="round"
              stroke-width="3"
              stroke="currentColor"
              d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4 19.938 19.938 0 0 0 9.858 9.858 19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
              data-follow-stroke="#9b9b9b"
            />
            <path fill="currentColor" d="M24 11a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#9b9b9b" />
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="currentColor" d="M24.5 34V20h-2M21 34h7" data-follow-stroke="#9b9b9b" />
          </symbol>
        </svg>
        <div class="ivy-result">
          <div class={`ivy-result__icon is-${this.type}`}>
            {this.type === 'custom' ? (
              <slot name="icon"></slot>
            ) : (
              <svg class="icon">
                <use xlinkHref={`#${this.type}`}></use>
              </svg>
            )}
          </div>
          <div class="ivy-result__header">{this.header}</div>
          <div class="ivy-result__description">{this.description}</div>
          <div class="ivy-result__extra">
            <slot name="extra"></slot>
          </div>
          <div class="ivy-result__content">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
