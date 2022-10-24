import { newE2EPage } from '@stencil/core/testing';

describe('uni-carousel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-carousel></uni-carousel>');

    const element = await page.find('uni-carousel');
    expect(element).toHaveClass('hydrated');
  });
});
