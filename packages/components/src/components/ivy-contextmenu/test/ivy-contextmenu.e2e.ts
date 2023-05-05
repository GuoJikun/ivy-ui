import { newE2EPage } from '@stencil/core/testing';

describe('ivy-contextmenu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-contextmenu></ivy-contextmenu>');

    const element = await page.find('ivy-contextmenu');
    expect(element).toHaveClass('hydrated');
  });
});
