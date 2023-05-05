import { newSpecPage } from '@stencil/core/testing';
import { IvyInput } from '../ivy-input';

describe('ivy-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyInput],
      html: `<ivy-input></ivy-input>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-input>
    `);
  });
});
