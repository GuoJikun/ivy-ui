import { newSpecPage } from '@stencil/core/testing';
import { IvyRefresh } from '../ivy-refresh';

describe('ivy-refresh', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyRefresh],
      html: `<ivy-refresh></ivy-refresh>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-refresh>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-refresh>
    `);
  });
});
