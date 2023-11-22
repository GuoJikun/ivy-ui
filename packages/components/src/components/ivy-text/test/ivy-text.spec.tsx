import { newSpecPage } from '@stencil/core/testing';
import { IvyText } from '../ivy-text';

describe('ivy-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyText],
      html: `<ivy-text></ivy-text>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-text>
    `);
  });
});
