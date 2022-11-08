import { newSpecPage } from '@stencil/core/testing';
import { IvyContextmenuItem } from '../ivy-contextmenu-item';

describe('ivy-contextmenu-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyContextmenuItem],
      html: `<ivy-contextmenu-item></ivy-contextmenu-item>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-contextmenu-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-contextmenu-item>
    `);
  });
});
