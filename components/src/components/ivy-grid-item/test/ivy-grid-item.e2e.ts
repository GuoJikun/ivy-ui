import { newE2EPage } from '@stencil/core/testing';

describe('ivy-grid-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-grid-item></ivy-grid-item>');

    const element = await page.find('ivy-grid-item');
    expect(element).toHaveClass('hydrated');
  });
});
