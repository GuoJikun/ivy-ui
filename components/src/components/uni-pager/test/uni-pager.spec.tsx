import { newSpecPage } from '@stencil/core/testing';
import { UniPager } from '../uni-pager';

describe('uni-pager', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniPager],
      html: `<uni-pager></uni-pager>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-pager>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-pager>
    `);
  });
});
