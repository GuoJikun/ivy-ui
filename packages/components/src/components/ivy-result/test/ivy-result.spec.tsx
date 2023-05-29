import { newSpecPage } from '@stencil/core/testing';
import { IvyResult } from '../ivy-result';

describe('ivy-result', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyResult],
      html: `<ivy-result></ivy-result>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-result>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-result>
    `);
  });
});
