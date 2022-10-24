import { newSpecPage } from '@stencil/core/testing';
import { IvyDescription } from '../ivy-description';

describe('ivy-description', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyDescription],
      html: `<ivy-description></ivy-description>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-description>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-description>
    `);
  });
});
