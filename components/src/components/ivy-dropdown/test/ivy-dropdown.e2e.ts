import { newE2EPage } from '@stencil/core/testing';

describe('ivy-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-dropdown></ivy-dropdown>');

    const element = await page.find('ivy-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
