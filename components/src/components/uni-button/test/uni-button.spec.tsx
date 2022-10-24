import { newSpecPage } from '@stencil/core/testing';
import { UniButton } from '../uni-button';

describe('uni-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniButton],
      html: `<uni-button></uni-button>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-button>
    `);
  });
});
