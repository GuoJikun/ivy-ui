import { newSpecPage } from '@stencil/core/testing';
import { IvyAspectRatio } from '../ivy-aspect-ratio';

describe('ivy-aspect-ratio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyAspectRatio],
      html: `<ivy-aspect-ratio></ivy-aspect-ratio>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-aspect-ratio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-aspect-ratio>
    `);
  });
});
