import { newE2EPage } from '@stencil/core/testing';

describe('ivy-right', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-right></ivy-right>');

    const element = await page.find('ivy-right');
    expect(element).toHaveClass('hydrated');
  });
});
