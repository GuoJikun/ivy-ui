import { newE2EPage } from '@stencil/core/testing';

describe('ivy-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-badge></ivy-badge>');

    const element = await page.find('ivy-badge');
    expect(element).toHaveClass('hydrated');
  });
});
