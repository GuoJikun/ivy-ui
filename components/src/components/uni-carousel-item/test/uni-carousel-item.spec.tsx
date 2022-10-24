import { newSpecPage } from '@stencil/core/testing';
import { UniCarouselItem } from '../uni-carousel-item';

describe('uni-carousel-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniCarouselItem],
      html: `<uni-carousel-item></uni-carousel-item>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-carousel-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-carousel-item>
    `);
  });
});
