import { newSpecPage } from '@stencil/core/testing';
import { IvyLeftCircle } from '../ivy-left-circle';

describe('ivy-left-circle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyLeftCircle],
      html: `<ivy-left-circle></ivy-left-circle>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-left-circle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-left-circle>
    `);
  });
});
