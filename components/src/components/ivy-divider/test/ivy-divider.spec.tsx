import { newSpecPage } from '@stencil/core/testing';
import { IvyDivider } from '../ivy-divider';

describe('ivy-divider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyDivider],
      html: `<ivy-divider></ivy-divider>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-divider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-divider>
    `);
  });
});
