import { newSpecPage } from '@stencil/core/testing';
import { IvyDescriptionItem } from '../ivy-description-item';

describe('ivy-description-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyDescriptionItem],
      html: `<ivy-description-item></ivy-description-item>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-description-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-description-item>
    `);
  });
});
