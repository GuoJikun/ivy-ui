import { newE2EPage } from '@stencil/core/testing';

describe('ivy-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-link></ivy-link>');

    const element = await page.find('ivy-link');
    expect(element).toHaveClass('hydrated');
  });
});
