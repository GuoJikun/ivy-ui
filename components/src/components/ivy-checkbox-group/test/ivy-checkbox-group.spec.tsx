import { newSpecPage } from '@stencil/core/testing';
import { IvyCheckboxGroup } from '../ivy-checkbox-group';

describe('ivy-checkbox-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyCheckboxGroup],
      html: `<ivy-checkbox-group></ivy-checkbox-group>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-checkbox-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-checkbox-group>
    `);
  });
});
