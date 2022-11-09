import { newE2EPage } from '@stencil/core/testing';

describe('ivy-arrow-left', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-arrow-left></ivy-arrow-left>');

    const element = await page.find('ivy-arrow-left');
    expect(element).toHaveClass('hydrated');
  });
});
