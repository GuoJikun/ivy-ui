import { newSpecPage } from '@stencil/core/testing';
import { IvyMessage } from '../ivy-message';

describe('ivy-message', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyMessage],
      html: `<ivy-message></ivy-message>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-message>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-message>
    `);
  });
});
