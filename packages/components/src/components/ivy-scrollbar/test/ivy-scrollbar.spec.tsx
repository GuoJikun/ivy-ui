import { newSpecPage } from '@stencil/core/testing';
import { IvyScrollbar } from '../ivy-scrollbar';

describe('ivy-scrollbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyScrollbar],
      html: `<ivy-scrollbar></ivy-scrollbar>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-scrollbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-scrollbar>
    `);
  });
});
