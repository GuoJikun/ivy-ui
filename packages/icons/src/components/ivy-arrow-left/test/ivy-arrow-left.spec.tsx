import { newSpecPage } from '@stencil/core/testing';
import { IvyArrowLeft } from '../ivy-arrow-left';

describe('ivy-arrow-left', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyArrowLeft],
      html: `<ivy-arrow-left></ivy-arrow-left>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-arrow-left>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-arrow-left>
    `);
  });
});
