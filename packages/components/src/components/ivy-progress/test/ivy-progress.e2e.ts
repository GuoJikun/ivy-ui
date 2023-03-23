import { newE2EPage } from '@stencil/core/testing';

describe('ivy-progress', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-progress></ivy-progress>');

    const element = await page.find('ivy-progress');
    expect(element).toHaveClass('hydrated');
  });
});
