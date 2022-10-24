import { newE2EPage } from '@stencil/core/testing';

describe('ivy-refresh', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-refresh></ivy-refresh>');

    const element = await page.find('ivy-refresh');
    expect(element).toHaveClass('hydrated');
  });
});
