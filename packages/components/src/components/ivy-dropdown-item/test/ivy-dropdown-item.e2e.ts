import { newE2EPage } from '@stencil/core/testing';

describe('ivy-dropdown-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-dropdown-item></ivy-dropdown-item>');

    const element = await page.find('ivy-dropdown-item');
    expect(element).toHaveClass('hydrated');
  });
});
