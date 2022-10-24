import { newSpecPage } from '@stencil/core/testing';
import { IvyArrowUp } from '../ivy-arrow-up';

describe('ivy-arrow-up', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyArrowUp],
      html: `<ivy-arrow-up></ivy-arrow-up>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-arrow-up>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-arrow-up>
    `);
  });
});
