import { newSpecPage } from '@stencil/core/testing';
import { IvyStep } from '../ivy-step';

describe('ivy-step', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyStep],
      html: `<ivy-step></ivy-step>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-step>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-step>
    `);
  });
});
