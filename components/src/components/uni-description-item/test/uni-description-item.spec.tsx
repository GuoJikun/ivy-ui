import { newSpecPage } from '@stencil/core/testing';
import { UniDescriptionItem } from '../uni-description-item';

describe('uni-description-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniDescriptionItem],
      html: `<uni-description-item></uni-description-item>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-description-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-description-item>
    `);
  });
});
