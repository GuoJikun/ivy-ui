import { newSpecPage } from '@stencil/core/testing';
import { IvyTip } from '../ivy-tip';

describe('ivy-tip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyTip],
      html: `<ivy-tip></ivy-tip>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-tip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-tip>
    `);
  });
});
