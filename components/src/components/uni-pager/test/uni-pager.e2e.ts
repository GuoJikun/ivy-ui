import { newE2EPage } from '@stencil/core/testing';

describe('uni-pager', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-pager></uni-pager>');

    const element = await page.find('uni-pager');
    expect(element).toHaveClass('hydrated');
  });
});
