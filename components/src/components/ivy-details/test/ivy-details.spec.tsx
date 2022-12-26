import { newSpecPage } from '@stencil/core/testing';
import { IvyDetails } from '../ivy-details';

describe('ivy-details', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyDetails],
      html: `<ivy-details></ivy-details>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-details>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-details>
    `);
  });
});
