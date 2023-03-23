import { newSpecPage } from '@stencil/core/testing';
import { IvyImage } from '../ivy-image';

describe('ivy-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyImage],
      html: `<ivy-image></ivy-image>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-image>
    `);
  });
});
