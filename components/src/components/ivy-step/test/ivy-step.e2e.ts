import { newE2EPage } from '@stencil/core/testing';

describe('ivy-step', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-step></ivy-step>');

    const element = await page.find('ivy-step');
    expect(element).toHaveClass('hydrated');
  });
});
