import { newSpecPage } from '@stencil/core/testing';
import { IvySteps } from '../ivy-steps';

describe('ivy-steps', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvySteps],
      html: `<ivy-steps></ivy-steps>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-steps>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-steps>
    `);
  });
});
