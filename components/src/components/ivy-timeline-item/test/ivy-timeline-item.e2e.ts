import { newE2EPage } from '@stencil/core/testing';

describe('ivy-timeline-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-timeline-item></ivy-timeline-item>');

    const element = await page.find('ivy-timeline-item');
    expect(element).toHaveClass('hydrated');
  });
});
