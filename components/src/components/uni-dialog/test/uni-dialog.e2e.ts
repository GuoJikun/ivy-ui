import { newE2EPage } from '@stencil/core/testing';

describe('uni-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-dialog></uni-dialog>');

    const element = await page.find('uni-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
