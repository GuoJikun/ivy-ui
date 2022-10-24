import { newSpecPage } from '@stencil/core/testing';
import { UniBreadcrumb } from '../uni-breadcrumb';

describe('uni-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniBreadcrumb],
      html: `<uni-breadcrumb></uni-breadcrumb>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-breadcrumb>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-breadcrumb>
    `);
  });
});
