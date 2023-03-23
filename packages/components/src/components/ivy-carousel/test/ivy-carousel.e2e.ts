import { newE2EPage } from '@stencil/core/testing';

describe('ivy-carousel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-carousel></ivy-carousel>');

    const element = await page.find('ivy-carousel');
    expect(element).toHaveClass('hydrated');
  });
});
