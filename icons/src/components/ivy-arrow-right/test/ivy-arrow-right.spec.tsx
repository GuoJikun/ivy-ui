import { newSpecPage } from '@stencil/core/testing';
import { IvyArrowRight } from '../ivy-arrow-right';

describe('ivy-arrow-right', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyArrowRight],
      html: `<ivy-arrow-right></ivy-arrow-right>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-arrow-right>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-arrow-right>
    `);
  });
});
