import { newSpecPage } from '@stencil/core/testing';
import { IvySpace } from '../ivy-space';

describe('ivy-space', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvySpace],
      html: `<ivy-space></ivy-space>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-space>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-space>
    `);
  });
});
