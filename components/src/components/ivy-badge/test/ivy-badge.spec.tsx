import { newSpecPage } from '@stencil/core/testing';
import { IvyBadge } from '../ivy-badge';

describe('ivy-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyBadge],
      html: `<ivy-badge></ivy-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-badge>
    `);
  });
});
