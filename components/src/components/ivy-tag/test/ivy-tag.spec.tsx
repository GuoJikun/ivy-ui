import { newSpecPage } from '@stencil/core/testing';
import { IvyTag } from '../ivy-tag';

describe('ivy-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyTag],
      html: `<ivy-tag></ivy-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-tag>
    `);
  });
});
