import { newE2EPage } from '@stencil/core/testing';

describe('ivy-divider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-divider></ivy-divider>');

    const element = await page.find('ivy-divider');
    expect(element).toHaveClass('hydrated');
  });
});
