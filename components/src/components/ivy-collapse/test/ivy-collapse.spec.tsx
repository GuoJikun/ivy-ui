import { newSpecPage } from '@stencil/core/testing';
import { IvyCollapse } from '../ivy-collapse';

describe('ivy-collapse', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyCollapse],
      html: `<ivy-collapse></ivy-collapse>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-collapse>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-collapse>
    `);
  });
});
