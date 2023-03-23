import { newSpecPage } from '@stencil/core/testing';
import { IvyUpCircle } from '../ivy-up-circle';

describe('ivy-up-circle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyUpCircle],
      html: `<ivy-up-circle></ivy-up-circle>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-up-circle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-up-circle>
    `);
  });
});
