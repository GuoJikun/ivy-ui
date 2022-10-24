import { newSpecPage } from '@stencil/core/testing';
import { IvyCarousel } from '../ivy-carousel';

describe('ivy-carousel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyCarousel],
      html: `<ivy-carousel></ivy-carousel>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-carousel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-carousel>
    `);
  });
});
