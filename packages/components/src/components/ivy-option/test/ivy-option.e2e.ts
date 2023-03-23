import { newE2EPage } from '@stencil/core/testing';

describe('ivy-option', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-option></ivy-option>');

    const element = await page.find('ivy-option');
    expect(element).toHaveClass('hydrated');
  });
});
