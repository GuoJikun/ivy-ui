import { newSpecPage } from '@stencil/core/testing';
import { IvyLoading } from '../ivy-loading';

describe('ivy-loading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyLoading],
      html: `<ivy-loading></ivy-loading>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-loading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-loading>
    `);
  });
});
