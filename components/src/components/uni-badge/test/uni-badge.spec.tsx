import { newSpecPage } from '@stencil/core/testing';
import { UniBadge } from '../uni-badge';

describe('uni-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniBadge],
      html: `<uni-badge></uni-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-badge>
    `);
  });
});
