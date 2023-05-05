import { newE2EPage } from '@stencil/core/testing';

describe('ivy-contextmenu-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-contextmenu-item></ivy-contextmenu-item>');

    const element = await page.find('ivy-contextmenu-item');
    expect(element).toHaveClass('hydrated');
  });
});
