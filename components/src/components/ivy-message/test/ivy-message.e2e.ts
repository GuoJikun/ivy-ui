import { newE2EPage } from '@stencil/core/testing';

describe('ivy-message', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-message></ivy-message>');

    const element = await page.find('ivy-message');
    expect(element).toHaveClass('hydrated');
  });
});
