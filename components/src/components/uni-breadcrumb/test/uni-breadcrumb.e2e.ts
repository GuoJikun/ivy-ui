import { newE2EPage } from '@stencil/core/testing';

describe('uni-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-breadcrumb></uni-breadcrumb>');

    const element = await page.find('uni-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
