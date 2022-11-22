import { newSpecPage } from '@stencil/core/testing';
import { IvyDropdownItem } from '../ivy-dropdown-item';

describe('ivy-dropdown-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyDropdownItem],
      html: `<ivy-dropdown-item></ivy-dropdown-item>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-dropdown-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-dropdown-item>
    `);
  });
});
