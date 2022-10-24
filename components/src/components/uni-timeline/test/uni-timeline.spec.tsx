import { newSpecPage } from '@stencil/core/testing';
import { UniTimeline } from '../uni-timeline';

describe('uni-timeline', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniTimeline],
      html: `<uni-timeline></uni-timeline>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-timeline>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-timeline>
    `);
  });
});
