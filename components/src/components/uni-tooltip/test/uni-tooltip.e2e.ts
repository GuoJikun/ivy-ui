import { newE2EPage } from '@stencil/core/testing';

describe('uni-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-tooltip></uni-tooltip>');

    const element = await page.find('uni-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
