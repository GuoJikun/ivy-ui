import { newSpecPage } from '@stencil/core/testing';
import { IvyOption } from '../ivy-option';

describe('ivy-option', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyOption],
      html: `<ivy-option></ivy-option>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-option>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-option>
    `);
  });
});
