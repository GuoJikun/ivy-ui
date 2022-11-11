import { newSpecPage } from '@stencil/core/testing';
import { IvySelect } from '../ivy-select';

describe('ivy-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvySelect],
      html: `<ivy-select></ivy-select>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-select>
    `);
  });
});
