import { newE2EPage } from '@stencil/core/testing';

describe('ivy-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-text></ivy-text>');

    const element = await page.find('ivy-text');
    expect(element).toHaveClass('hydrated');
  });
});
