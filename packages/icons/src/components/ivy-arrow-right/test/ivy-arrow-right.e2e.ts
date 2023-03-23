import { newE2EPage } from '@stencil/core/testing';

describe('ivy-arrow-right', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-arrow-right></ivy-arrow-right>');

    const element = await page.find('ivy-arrow-right');
    expect(element).toHaveClass('hydrated');
  });
});
