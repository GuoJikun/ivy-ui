import { newE2EPage } from '@stencil/core/testing';

describe('ivy-timeline', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-timeline></ivy-timeline>');

    const element = await page.find('ivy-timeline');
    expect(element).toHaveClass('hydrated');
  });
});
