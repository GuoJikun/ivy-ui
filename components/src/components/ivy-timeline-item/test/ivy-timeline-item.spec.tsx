import { newSpecPage } from '@stencil/core/testing';
import { IvyTimelineItem } from '../ivy-timeline-item';

describe('ivy-timeline-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyTimelineItem],
      html: `<ivy-timeline-item></ivy-timeline-item>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-timeline-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-timeline-item>
    `);
  });
});
