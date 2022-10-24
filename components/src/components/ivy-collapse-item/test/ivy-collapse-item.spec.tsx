import { newSpecPage } from '@stencil/core/testing';
import { IvyCollapseItem } from '../ivy-collapse-item';

describe('ivy-collapse-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyCollapseItem],
      html: `<ivy-collapse-item></ivy-collapse-item>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-collapse-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-collapse-item>
    `);
  });
});
