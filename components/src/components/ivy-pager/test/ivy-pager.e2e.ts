import { newE2EPage } from '@stencil/core/testing';

describe('ivy-pager', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-pager></ivy-pager>');

    const element = await page.find('ivy-pager');
    expect(element).toHaveClass('hydrated');
  });
});
