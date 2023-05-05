import { newE2EPage } from '@stencil/core/testing';

describe('ivy-collapse-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-collapse-item></ivy-collapse-item>');

    const element = await page.find('ivy-collapse-item');
    expect(element).toHaveClass('hydrated');
  });
});
