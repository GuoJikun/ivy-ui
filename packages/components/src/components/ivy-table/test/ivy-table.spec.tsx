import { newSpecPage } from '@stencil/core/testing';
import { IvyTable } from '../ivy-table';

describe('ivy-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyTable],
      html: `<ivy-table></ivy-table>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-table>
    `);
  });
});
