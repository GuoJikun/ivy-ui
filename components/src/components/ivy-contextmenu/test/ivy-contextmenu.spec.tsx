import { newSpecPage } from '@stencil/core/testing';
import { IvyContextmenu } from '../ivy-contextmenu';

describe('ivy-contextmenu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyContextmenu],
      html: `<ivy-contextmenu></ivy-contextmenu>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-contextmenu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-contextmenu>
    `);
  });
});
