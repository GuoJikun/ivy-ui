import { newSpecPage } from '@stencil/core/testing';
import { IvyTooltip } from '../ivy-tooltip';

describe('ivy-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyTooltip],
      html: `<ivy-tooltip></ivy-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-tooltip>
    `);
  });
});
