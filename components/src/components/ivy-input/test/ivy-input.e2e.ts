import { newE2EPage } from '@stencil/core/testing';

describe('ivy-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-input></ivy-input>');

    const element = await page.find('ivy-input');
    expect(element).toHaveClass('hydrated');
  });
});
