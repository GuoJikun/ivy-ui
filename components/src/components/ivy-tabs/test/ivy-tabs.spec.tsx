import { newSpecPage } from '@stencil/core/testing';
import { IvyTabs } from '../ivy-tabs';

describe('ivy-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyTabs],
      html: `<ivy-tabs></ivy-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-tabs>
    `);
  });
});
