import { newE2EPage } from '@stencil/core/testing';

describe('uni-arrow-up', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-arrow-up></uni-arrow-up>');

    const element = await page.find('uni-arrow-up');
    expect(element).toHaveClass('hydrated');
  });
});
