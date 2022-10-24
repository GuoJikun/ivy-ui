import { newSpecPage } from '@stencil/core/testing';
import { UniArrowUp } from '../uni-arrow-up';

describe('uni-arrow-up', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniArrowUp],
      html: `<uni-arrow-up></uni-arrow-up>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-arrow-up>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-arrow-up>
    `);
  });
});
