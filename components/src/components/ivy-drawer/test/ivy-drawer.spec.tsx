import { newSpecPage } from '@stencil/core/testing';
import { IvyDrawer } from '../ivy-drawer';

describe('ivy-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyDrawer],
      html: `<ivy-drawer></ivy-drawer>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-drawer>
    `);
  });
});
