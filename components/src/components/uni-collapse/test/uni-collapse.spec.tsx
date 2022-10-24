import { newSpecPage } from '@stencil/core/testing';
import { UniCollapse } from '../uni-collapse';

describe('uni-collapse', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniCollapse],
      html: `<uni-collapse></uni-collapse>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-collapse>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-collapse>
    `);
  });
});
