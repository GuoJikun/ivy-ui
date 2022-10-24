import { newE2EPage } from '@stencil/core/testing';

describe('ivy-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-card></ivy-card>');

    const element = await page.find('ivy-card');
    expect(element).toHaveClass('hydrated');
  });
});
