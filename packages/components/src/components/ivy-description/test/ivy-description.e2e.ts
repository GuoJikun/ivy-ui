import { newE2EPage } from '@stencil/core/testing';

describe('ivy-description', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-description></ivy-description>');

    const element = await page.find('ivy-description');
    expect(element).toHaveClass('hydrated');
  });
});
