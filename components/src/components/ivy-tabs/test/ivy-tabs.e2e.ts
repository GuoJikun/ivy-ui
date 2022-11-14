import { newE2EPage } from '@stencil/core/testing';

describe('ivy-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-tabs></ivy-tabs>');

    const element = await page.find('ivy-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
