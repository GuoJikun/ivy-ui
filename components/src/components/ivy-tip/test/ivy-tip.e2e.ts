import { newE2EPage } from '@stencil/core/testing';

describe('ivy-tip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-tip></ivy-tip>');

    const element = await page.find('ivy-tip');
    expect(element).toHaveClass('hydrated');
  });
});
