import { newE2EPage } from '@stencil/core/testing';

describe('uni-timeline-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-timeline-item></uni-timeline-item>');

    const element = await page.find('uni-timeline-item');
    expect(element).toHaveClass('hydrated');
  });
});
