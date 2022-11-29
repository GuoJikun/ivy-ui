import { newSpecPage } from '@stencil/core/testing';
import { IvyDown } from '../ivy-down';

describe('ivy-down', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyDown],
      html: `<ivy-down></ivy-down>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-down>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-down>
    `);
  });
});
