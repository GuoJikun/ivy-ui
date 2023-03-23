import { newSpecPage } from '@stencil/core/testing';
import { IvyLeft } from '../ivy-left';

describe('ivy-left', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyLeft],
      html: `<ivy-left></ivy-left>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-left>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-left>
    `);
  });
});
