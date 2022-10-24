import { newE2EPage } from '@stencil/core/testing';

describe('ivy-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-breadcrumb></ivy-breadcrumb>');

    const element = await page.find('ivy-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
