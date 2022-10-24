import { newSpecPage } from '@stencil/core/testing';
import { UniBreadcrumbItem } from '../uni-breadcrumb-item';

describe('uni-breadcrumb-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniBreadcrumbItem],
      html: `<uni-breadcrumb-item></uni-breadcrumb-item>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-breadcrumb-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-breadcrumb-item>
    `);
  });
});
