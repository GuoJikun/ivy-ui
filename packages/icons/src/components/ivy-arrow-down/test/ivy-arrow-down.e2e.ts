import { newE2EPage } from '@stencil/core/testing';

describe('ivy-arrow-down', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-arrow-down></ivy-arrow-down>');

    const element = await page.find('ivy-arrow-down');
    expect(element).toHaveClass('hydrated');
  });
});
