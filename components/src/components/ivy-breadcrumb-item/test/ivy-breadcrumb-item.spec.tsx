import { newSpecPage } from '@stencil/core/testing';
import { IvyBreadcrumbItem } from '../ivy-breadcrumb-item';

describe('ivy-breadcrumb-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyBreadcrumbItem],
      html: `<ivy-breadcrumb-item></ivy-breadcrumb-item>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-breadcrumb-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-breadcrumb-item>
    `);
  });
});
