import { newE2EPage } from '@stencil/core/testing';

describe('ivy-arrow-up', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-arrow-up></ivy-arrow-up>');

    const element = await page.find('ivy-arrow-up');
    expect(element).toHaveClass('hydrated');
  });
});
