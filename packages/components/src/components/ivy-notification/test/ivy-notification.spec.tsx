import { newSpecPage } from '@stencil/core/testing';
import { IvyNotification } from '../ivy-notification';

describe('ivy-notification', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyNotification],
      html: `<ivy-notification></ivy-notification>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-notification>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-notification>
    `);
  });
});
