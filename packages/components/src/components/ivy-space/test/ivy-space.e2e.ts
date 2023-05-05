import { newE2EPage } from '@stencil/core/testing';

describe('ivy-space', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-space></ivy-space>');

    const element = await page.find('ivy-space');
    expect(element).toHaveClass('hydrated');
  });
});
