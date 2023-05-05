import { newE2EPage } from '@stencil/core/testing';

describe('ivy-scrollbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-scrollbar></ivy-scrollbar>');

    const element = await page.find('ivy-scrollbar');
    expect(element).toHaveClass('hydrated');
  });
});
