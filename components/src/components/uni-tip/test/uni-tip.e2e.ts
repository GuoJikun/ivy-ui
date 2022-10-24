import { newE2EPage } from '@stencil/core/testing';

describe('uni-tip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-tip></uni-tip>');

    const element = await page.find('uni-tip');
    expect(element).toHaveClass('hydrated');
  });
});
