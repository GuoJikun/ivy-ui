import { newE2EPage } from '@stencil/core/testing';

describe('ivy-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-tooltip></ivy-tooltip>');

    const element = await page.find('ivy-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
