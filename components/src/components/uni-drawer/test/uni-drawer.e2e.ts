import { newE2EPage } from '@stencil/core/testing';

describe('uni-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-drawer></uni-drawer>');

    const element = await page.find('uni-drawer');
    expect(element).toHaveClass('hydrated');
  });
});
