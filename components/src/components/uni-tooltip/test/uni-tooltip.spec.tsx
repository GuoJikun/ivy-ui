import { newSpecPage } from '@stencil/core/testing';
import { UniTooltip } from '../uni-tooltip';

describe('uni-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniTooltip],
      html: `<uni-tooltip></uni-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-tooltip>
    `);
  });
});
