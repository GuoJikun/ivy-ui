import { newE2EPage } from '@stencil/core/testing';

describe('ivy-up', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-up></ivy-up>');

    const element = await page.find('ivy-up');
    expect(element).toHaveClass('hydrated');
  });
});
