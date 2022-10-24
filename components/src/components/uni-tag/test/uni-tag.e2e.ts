import { newE2EPage } from '@stencil/core/testing';

describe('uni-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-tag></uni-tag>');

    const element = await page.find('uni-tag');
    expect(element).toHaveClass('hydrated');
  });
});
