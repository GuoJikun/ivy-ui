import { newSpecPage } from '@stencil/core/testing';
import { UniEmpty } from '../uni-empty';

describe('uni-empty', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniEmpty],
      html: `<uni-empty></uni-empty>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-empty>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-empty>
    `);
  });
});
