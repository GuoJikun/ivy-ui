import { newSpecPage } from '@stencil/core/testing';
import { UniCol } from '../uni-col';

describe('uni-col', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniCol],
      html: `<uni-col></uni-col>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-col>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-col>
    `);
  });
});
