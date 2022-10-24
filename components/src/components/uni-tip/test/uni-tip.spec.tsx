import { newSpecPage } from '@stencil/core/testing';
import { UniTip } from '../uni-tip';

describe('uni-tip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniTip],
      html: `<uni-tip></uni-tip>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-tip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-tip>
    `);
  });
});
