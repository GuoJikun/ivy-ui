import { newE2EPage } from '@stencil/core/testing';

describe('ivy-breadcrumb-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-breadcrumb-item></ivy-breadcrumb-item>');

    const element = await page.find('ivy-breadcrumb-item');
    expect(element).toHaveClass('hydrated');
  });
});
