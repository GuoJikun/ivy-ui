import { newSpecPage } from '@stencil/core/testing';
import { UniDrawer } from '../uni-drawer';

describe('uni-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniDrawer],
      html: `<uni-drawer></uni-drawer>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-drawer>
    `);
  });
});
