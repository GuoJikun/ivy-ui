import { newSpecPage } from '@stencil/core/testing';
import { IvyEmpty } from '../ivy-empty';

describe('ivy-empty', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IvyEmpty],
      html: `<ivy-empty></ivy-empty>`,
    });
    expect(page.root).toEqualHtml(`
      <ivy-empty>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ivy-empty>
    `);
  });
});
