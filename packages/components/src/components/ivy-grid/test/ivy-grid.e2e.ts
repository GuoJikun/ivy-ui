import { newE2EPage } from '@stencil/core/testing';

describe('ivy-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-grid></ivy-grid>');

    const element = await page.find('ivy-grid');
    expect(element).toHaveClass('hydrated');
  });
});
