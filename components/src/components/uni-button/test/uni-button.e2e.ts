import { newE2EPage } from '@stencil/core/testing';

describe('uni-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-button></uni-button>');

    const element = await page.find('uni-button');
    expect(element).toHaveClass('hydrated');
  });
});
