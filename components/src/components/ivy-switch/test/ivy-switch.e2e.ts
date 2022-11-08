import { newE2EPage } from '@stencil/core/testing';

describe('ivy-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-switch></ivy-switch>');

    const element = await page.find('ivy-switch');
    expect(element).toHaveClass('hydrated');
  });
});
