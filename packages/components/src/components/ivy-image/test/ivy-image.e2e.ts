import { newE2EPage } from '@stencil/core/testing';

describe('uni-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-image></uni-image>');

    const element = await page.find('uni-image');
    expect(element).toHaveClass('hydrated');
  });
});
