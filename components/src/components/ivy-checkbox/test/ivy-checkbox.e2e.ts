import { newE2EPage } from '@stencil/core/testing';

describe('ivy-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-checkbox></ivy-checkbox>');

    const element = await page.find('ivy-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
