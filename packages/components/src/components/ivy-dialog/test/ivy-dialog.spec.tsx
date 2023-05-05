import { newSpecPage } from '@stencil/core/testing';
import { IvyDialog } from '../ivy-dialog';

describe('ivy-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyDialog],
      html: `<ivy-dialog></ivy-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-dialog>
    `);
  });
});
