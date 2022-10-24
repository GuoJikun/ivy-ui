import { newE2EPage } from '@stencil/core/testing';

describe('uni-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-row></uni-row>');

    const element = await page.find('uni-row');
    expect(element).toHaveClass('hydrated');
  });
});
