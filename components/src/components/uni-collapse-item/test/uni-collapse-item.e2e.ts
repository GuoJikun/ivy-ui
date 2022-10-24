import { newE2EPage } from '@stencil/core/testing';

describe('uni-collapse-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-collapse-item></uni-collapse-item>');

    const element = await page.find('uni-collapse-item');
    expect(element).toHaveClass('hydrated');
  });
});
