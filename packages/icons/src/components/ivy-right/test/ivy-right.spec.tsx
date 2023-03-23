import { newSpecPage } from '@stencil/core/testing';
import { IvyRight } from '../ivy-right';

describe('ivy-right', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyRight],
      html: `<ivy-right></ivy-right>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-right>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-right>
    `);
  });
});
