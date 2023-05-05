import { newSpecPage } from '@stencil/core/testing';
import { IvyCheckbox } from '../ivy-checkbox';

describe('ivy-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyCheckbox],
      html: `<ivy-checkbox></ivy-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-checkbox>
    `);
  });
});
