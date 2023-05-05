import { newE2EPage } from '@stencil/core/testing';

describe('ivy-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-dialog></ivy-dialog>');

    const element = await page.find('ivy-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
