import { newSpecPage } from '@stencil/core/testing';
import { UniRow } from '../uni-row';

describe('uni-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniRow],
      html: `<uni-row></uni-row>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-row>
    `);
  });
});
