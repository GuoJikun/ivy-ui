import { newE2EPage } from '@stencil/core/testing';

describe('uni-col', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-col></uni-col>');

    const element = await page.find('uni-col');
    expect(element).toHaveClass('hydrated');
  });
});
