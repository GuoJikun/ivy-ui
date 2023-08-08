import { newSpecPage } from '@stencil/core/testing';
import { IvyIcon } from '../ivy-icon';

describe('ivy-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyIcon],
      html: `<ivy-icon></ivy-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-icon>
    `);
  });
});
