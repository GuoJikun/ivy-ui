import { newSpecPage } from '@stencil/core/testing';
import { IvyButton } from '../ivy-button';

describe('ivy-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyButton],
      html: `<ivy-button></ivy-button>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-button>
    `);
  });
});
