import { newSpecPage } from '@stencil/core/testing';
import { UniRefresh } from '../uni-refresh';

describe('uni-refresh', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniRefresh],
      html: `<uni-refresh></uni-refresh>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-refresh>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-refresh>
    `);
  });
});
