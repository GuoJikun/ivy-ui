import { newSpecPage } from '@stencil/core/testing';
import { UniDescription } from '../uni-description';

describe('uni-description', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniDescription],
      html: `<uni-description></uni-description>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-description>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-description>
    `);
  });
});
