import { newSpecPage } from '@stencil/core/testing';
import { IvyLink } from '../ivy-link';

describe('ivy-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyLink],
      html: `<ivy-link></ivy-link>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-link>
    `);
  });
});
