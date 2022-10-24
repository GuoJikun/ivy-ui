import { newSpecPage } from '@stencil/core/testing';
import { IvyRow } from '../ivy-row';

describe('ivy-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyRow],
      html: `<ivy-row></ivy-row>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-row>
    `);
  });
});
