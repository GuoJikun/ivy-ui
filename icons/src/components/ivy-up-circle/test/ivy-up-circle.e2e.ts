import { newE2EPage } from '@stencil/core/testing';

describe('ivy-up-circle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-up-circle></ivy-up-circle>');

    const element = await page.find('ivy-up-circle');
    expect(element).toHaveClass('hydrated');
  });
});
