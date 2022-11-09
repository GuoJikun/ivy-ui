import { newSpecPage } from '@stencil/core/testing';
import { IvyArrowDown } from '../ivy-arrow-down';

describe('ivy-arrow-down', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyArrowDown],
      html: `<ivy-arrow-down></ivy-arrow-down>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-arrow-down>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-arrow-down>
    `);
  });
});
