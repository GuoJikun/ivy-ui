import { newSpecPage } from '@stencil/core/testing';
import { IvySwitch } from '../ivy-switch';

describe('ivy-switch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvySwitch],
      html: `<ivy-switch></ivy-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-switch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-switch>
    `);
  });
});
