import { newE2EPage } from '@stencil/core/testing';

describe('ivy-col', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-col></ivy-col>');

    const element = await page.find('ivy-col');
    expect(element).toHaveClass('hydrated');
  });
});
