import { newSpecPage } from '@stencil/core/testing';
import { IvyTabPane } from '../ivy-tab-pane';

describe('ivy-tab-pane', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyTabPane],
      html: `<ivy-tab-pane></ivy-tab-pane>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-tab-pane>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-tab-pane>
    `);
  });
});
