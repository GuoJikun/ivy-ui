import { newE2EPage } from '@stencil/core/testing';

describe('ivy-right-circle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-right-circle></ivy-right-circle>');

    const element = await page.find('ivy-right-circle');
    expect(element).toHaveClass('hydrated');
  });
});
