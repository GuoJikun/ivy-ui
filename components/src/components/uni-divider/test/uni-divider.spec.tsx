import { newSpecPage } from '@stencil/core/testing';
import { UniDivider } from '../uni-divider';

describe('uni-divider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniDivider],
      html: `<uni-divider></uni-divider>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-divider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-divider>
    `);
  });
});
