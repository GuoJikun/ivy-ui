import { newSpecPage } from '@stencil/core/testing';
import { UniCard } from '../uni-card';

describe('uni-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniCard],
      html: `<uni-card></uni-card>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-card>
    `);
  });
});
