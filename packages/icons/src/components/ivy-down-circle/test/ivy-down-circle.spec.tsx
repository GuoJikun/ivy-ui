import { newSpecPage } from '@stencil/core/testing';
import { IvyDownCircle } from '../ivy-down-circle';

describe('ivy-down-circle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyDownCircle],
      html: `<ivy-down-circle></ivy-down-circle>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-down-circle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-down-circle>
    `);
  });
});
