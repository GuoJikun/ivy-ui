import { newSpecPage } from '@stencil/core/testing';
import { IvyBreadcrumb } from '../ivy-breadcrumb';

describe('ivy-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyBreadcrumb],
      html: `<ivy-breadcrumb></ivy-breadcrumb>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-breadcrumb>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-breadcrumb>
    `);
  });
});
