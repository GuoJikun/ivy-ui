import { newSpecPage } from '@stencil/core/testing';
import { UniTimelineItem } from '../uni-timeline-item';

describe('uni-timeline-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniTimelineItem],
      html: `<uni-timeline-item></uni-timeline-item>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-timeline-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-timeline-item>
    `);
  });
});
