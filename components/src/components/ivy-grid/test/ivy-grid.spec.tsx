import { newSpecPage } from '@stencil/core/testing';
import { IvyGrid } from '../ivy-grid';

describe('ivy-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyGrid],
      html: `<ivy-grid></ivy-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-grid>
    `);
  });
});
