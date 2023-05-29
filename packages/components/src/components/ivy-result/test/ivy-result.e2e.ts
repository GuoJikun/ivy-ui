import { newE2EPage } from '@stencil/core/testing';

describe('ivy-result', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-result></ivy-result>');

    const element = await page.find('ivy-result');
    expect(element).toHaveClass('hydrated');
  });
});
