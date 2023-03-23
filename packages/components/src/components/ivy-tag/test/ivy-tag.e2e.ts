import { newE2EPage } from '@stencil/core/testing';

describe('ivy-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-tag></ivy-tag>');

    const element = await page.find('ivy-tag');
    expect(element).toHaveClass('hydrated');
  });
});
