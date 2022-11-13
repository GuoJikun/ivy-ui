import { newSpecPage } from '@stencil/core/testing';
import { IvyRadio } from '../ivy-radio';

describe('ivy-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyRadio],
      html: `<ivy-radio></ivy-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-radio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-radio>
    `);
  });
});
