import { newE2EPage } from '@stencil/core/testing';

describe('ivy-details', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-details></ivy-details>');

    const element = await page.find('ivy-details');
    expect(element).toHaveClass('hydrated');
  });
});
