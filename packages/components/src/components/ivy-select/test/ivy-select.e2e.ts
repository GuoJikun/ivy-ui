import { newE2EPage } from '@stencil/core/testing';

describe('ivy-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-select></ivy-select>');

    const element = await page.find('ivy-select');
    expect(element).toHaveClass('hydrated');
  });
});
