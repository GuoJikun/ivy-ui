import { newSpecPage } from '@stencil/core/testing';
import { IvyRadioGroup } from '../ivy-radio-group';

describe('ivy-radio-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyRadioGroup],
      html: `<ivy-radio-group></ivy-radio-group>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-radio-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-radio-group>
    `);
  });
});
