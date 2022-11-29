import { newE2EPage } from '@stencil/core/testing';

describe('ivy-left', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-left></ivy-left>');

    const element = await page.find('ivy-left');
    expect(element).toHaveClass('hydrated');
  });
});
