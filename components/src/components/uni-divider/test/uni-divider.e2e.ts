import { newE2EPage } from '@stencil/core/testing';

describe('uni-divider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-divider></uni-divider>');

    const element = await page.find('uni-divider');
    expect(element).toHaveClass('hydrated');
  });
});
