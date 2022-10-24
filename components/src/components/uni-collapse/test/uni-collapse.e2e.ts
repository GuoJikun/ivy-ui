import { newE2EPage } from '@stencil/core/testing';

describe('uni-collapse', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-collapse></uni-collapse>');

    const element = await page.find('uni-collapse');
    expect(element).toHaveClass('hydrated');
  });
});
