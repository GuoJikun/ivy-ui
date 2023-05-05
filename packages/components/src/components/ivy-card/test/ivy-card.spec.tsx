import { newSpecPage } from '@stencil/core/testing';
import { IvyCard } from '../ivy-card';

describe('ivy-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyCard],
      html: `<ivy-card></ivy-card>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-card>
    `);
  });
});
