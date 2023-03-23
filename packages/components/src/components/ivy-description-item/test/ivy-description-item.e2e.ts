import { newE2EPage } from '@stencil/core/testing';

describe('ivy-description-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-description-item></ivy-description-item>');

    const element = await page.find('ivy-description-item');
    expect(element).toHaveClass('hydrated');
  });
});
