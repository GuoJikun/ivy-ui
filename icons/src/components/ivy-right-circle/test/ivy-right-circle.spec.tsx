import { newSpecPage } from '@stencil/core/testing';
import { IvyRightCircle } from '../ivy-right-circle';

describe('ivy-right-circle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyRightCircle],
      html: `<ivy-right-circle></ivy-right-circle>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-right-circle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-right-circle>
    `);
  });
});
