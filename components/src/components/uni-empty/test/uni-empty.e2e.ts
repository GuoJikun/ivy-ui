import { newE2EPage } from '@stencil/core/testing';

describe('uni-empty', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-empty></uni-empty>');

    const element = await page.find('uni-empty');
    expect(element).toHaveClass('hydrated');
  });
});
