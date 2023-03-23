import { newSpecPage } from '@stencil/core/testing';
import { IvyCarouselItem } from '../ivy-carousel-item';

describe('ivy-carousel-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyCarouselItem],
      html: `<ivy-carousel-item></ivy-carousel-item>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-carousel-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-carousel-item>
    `);
  });
});
