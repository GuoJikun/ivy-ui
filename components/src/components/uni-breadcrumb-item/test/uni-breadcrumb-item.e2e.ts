import { newE2EPage } from '@stencil/core/testing';

describe('uni-breadcrumb-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-breadcrumb-item></uni-breadcrumb-item>');

    const element = await page.find('uni-breadcrumb-item');
    expect(element).toHaveClass('hydrated');
  });
});
