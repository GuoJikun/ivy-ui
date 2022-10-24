import { newE2EPage } from '@stencil/core/testing';

describe('ivy-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-drawer></ivy-drawer>');

    const element = await page.find('ivy-drawer');
    expect(element).toHaveClass('hydrated');
  });
});
