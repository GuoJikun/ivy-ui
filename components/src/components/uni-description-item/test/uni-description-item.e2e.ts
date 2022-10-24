import { newE2EPage } from '@stencil/core/testing';

describe('uni-description-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-description-item></uni-description-item>');

    const element = await page.find('uni-description-item');
    expect(element).toHaveClass('hydrated');
  });
});
