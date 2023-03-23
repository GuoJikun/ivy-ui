import { newE2EPage } from '@stencil/core/testing';

describe('ivy-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-radio></ivy-radio>');

    const element = await page.find('ivy-radio');
    expect(element).toHaveClass('hydrated');
  });
});
