import { newE2EPage } from '@stencil/core/testing';

describe('ivy-down-circle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-down-circle></ivy-down-circle>');

    const element = await page.find('ivy-down-circle');
    expect(element).toHaveClass('hydrated');
  });
});
