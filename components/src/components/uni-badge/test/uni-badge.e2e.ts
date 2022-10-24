import { newE2EPage } from '@stencil/core/testing';

describe('uni-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-badge></uni-badge>');

    const element = await page.find('uni-badge');
    expect(element).toHaveClass('hydrated');
  });
});
