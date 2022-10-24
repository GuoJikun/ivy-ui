import { newE2EPage } from '@stencil/core/testing';

describe('uni-refresh', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-refresh></uni-refresh>');

    const element = await page.find('uni-refresh');
    expect(element).toHaveClass('hydrated');
  });
});
