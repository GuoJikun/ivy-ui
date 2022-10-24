import { newSpecPage } from '@stencil/core/testing';
import { UniCarousel } from '../uni-carousel';

describe('uni-carousel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniCarousel],
      html: `<uni-carousel></uni-carousel>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-carousel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-carousel>
    `);
  });
});
