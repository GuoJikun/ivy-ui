import { newE2EPage } from '@stencil/core/testing';

describe('ivy-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-row></ivy-row>');

    const element = await page.find('ivy-row');
    expect(element).toHaveClass('hydrated');
  });
});
