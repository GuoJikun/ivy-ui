import { newE2EPage } from '@stencil/core/testing';

describe('ivy-carousel-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-carousel-item></ivy-carousel-item>');

    const element = await page.find('ivy-carousel-item');
    expect(element).toHaveClass('hydrated');
  });
});
