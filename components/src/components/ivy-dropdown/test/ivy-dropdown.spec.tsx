import { newSpecPage } from '@stencil/core/testing';
import { IvyDropdown } from '../ivy-dropdown';

describe('ivy-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyDropdown],
      html: `<ivy-dropdown></ivy-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-dropdown>
    `);
  });
});
