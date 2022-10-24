import { newSpecPage } from '@stencil/core/testing';
import { UniTag } from '../uni-tag';

describe('uni-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniTag],
      html: `<uni-tag></uni-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-tag>
    `);
  });
});
