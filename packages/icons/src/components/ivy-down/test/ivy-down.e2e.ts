import { newE2EPage } from '@stencil/core/testing';

describe('ivy-down', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-down></ivy-down>');

    const element = await page.find('ivy-down');
    expect(element).toHaveClass('hydrated');
  });
});
