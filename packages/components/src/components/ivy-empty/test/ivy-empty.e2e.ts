import { newE2EPage } from '@stencil/core/testing';

describe('ivy-empty', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-empty></ivy-empty>');

    const element = await page.find('ivy-empty');
    expect(element).toHaveClass('hydrated');
  });
});
