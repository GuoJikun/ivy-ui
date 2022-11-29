import { newE2EPage } from '@stencil/core/testing';

describe('ivy-left-circle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-left-circle></ivy-left-circle>');

    const element = await page.find('ivy-left-circle');
    expect(element).toHaveClass('hydrated');
  });
});
