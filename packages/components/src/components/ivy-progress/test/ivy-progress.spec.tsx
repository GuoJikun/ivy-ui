import { newSpecPage } from '@stencil/core/testing';
import { IvyProgress } from '../ivy-progress';

describe('ivy-progress', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyProgress],
      html: `<ivy-progress></ivy-progress>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-progress>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-progress>
    `);
  });
});
