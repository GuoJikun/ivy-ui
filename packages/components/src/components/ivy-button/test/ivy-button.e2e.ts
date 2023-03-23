import { newE2EPage } from '@stencil/core/testing';

describe('ivy-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-button></ivy-button>');

    const element = await page.find('ivy-button');
    expect(element).toHaveClass('hydrated');
  });
});
