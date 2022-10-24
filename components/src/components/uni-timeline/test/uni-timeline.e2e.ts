import { newE2EPage } from '@stencil/core/testing';

describe('uni-timeline', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-timeline></uni-timeline>');

    const element = await page.find('uni-timeline');
    expect(element).toHaveClass('hydrated');
  });
});
