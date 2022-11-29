import { newSpecPage } from '@stencil/core/testing';
import { IvyUp } from '../ivy-up';

describe('ivy-up', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyUp],
      html: `<ivy-up></ivy-up>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-up>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-up>
    `);
  });
});
