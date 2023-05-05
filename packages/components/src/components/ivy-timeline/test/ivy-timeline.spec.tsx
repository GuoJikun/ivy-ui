import { newSpecPage } from '@stencil/core/testing';
import { IvyTimeline } from '../ivy-timeline';

describe('ivy-timeline', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyTimeline],
      html: `<ivy-timeline></ivy-timeline>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-timeline>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-timeline>
    `);
  });
});
