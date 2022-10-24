import { newE2EPage } from '@stencil/core/testing';

describe('uni-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-card></uni-card>');

    const element = await page.find('uni-card');
    expect(element).toHaveClass('hydrated');
  });
});
