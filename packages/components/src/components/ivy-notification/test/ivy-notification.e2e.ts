import { newE2EPage } from '@stencil/core/testing';

describe('ivy-notification', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-notification></ivy-notification>');

    const element = await page.find('ivy-notification');
    expect(element).toHaveClass('hydrated');
  });
});
