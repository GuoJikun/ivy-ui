import { newE2EPage } from '@stencil/core/testing';

describe('uni-description', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-description></uni-description>');

    const element = await page.find('uni-description');
    expect(element).toHaveClass('hydrated');
  });
});
