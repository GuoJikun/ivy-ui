import { newSpecPage } from '@stencil/core/testing';
import { UniDialog } from '../uni-dialog';

describe('uni-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniDialog],
      html: `<uni-dialog></uni-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-dialog>
    `);
  });
});
