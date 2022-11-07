import { newSpecPage } from '@stencil/core/testing';
import { IvyGridItem } from '../ivy-grid-item';

describe('ivy-grid-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyGridItem],
      html: `<ivy-grid-item></ivy-grid-item>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-grid-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-grid-item>
    `);
  });
});
