import { newSpecPage } from '@stencil/core/testing';
import { IvyCol } from '../ivy-col';

describe('ivy-col', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyCol],
      html: `<ivy-col></ivy-col>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-col>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-col>
    `);
  });
});
