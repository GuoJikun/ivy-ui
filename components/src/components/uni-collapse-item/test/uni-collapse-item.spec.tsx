import { newSpecPage } from '@stencil/core/testing';
import { UniCollapseItem } from '../uni-collapse-item';

describe('uni-collapse-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniCollapseItem],
      html: `<uni-collapse-item></uni-collapse-item>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-collapse-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-collapse-item>
    `);
  });
});
