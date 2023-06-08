import { newE2EPage } from '@stencil/core/testing';

describe('ivy-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-table></ivy-table>');

    const element = await page.find('ivy-table');
    expect(element).toHaveClass('hydrated');
  });
});
