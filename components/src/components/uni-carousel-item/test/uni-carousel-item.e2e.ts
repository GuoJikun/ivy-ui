import { newE2EPage } from '@stencil/core/testing';

describe('uni-carousel-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-carousel-item></uni-carousel-item>');

    const element = await page.find('uni-carousel-item');
    expect(element).toHaveClass('hydrated');
  });
});
