import { newSpecPage } from '@stencil/core/testing';
import { IvyPager } from '../ivy-pager';

describe('ivy-pager', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyPager],
      html: `<ivy-pager></ivy-pager>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-pager>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-pager>
    `);
  });
});
