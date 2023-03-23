import { newE2EPage } from '@stencil/core/testing';

describe('ivy-aspect-ratio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-aspect-ratio></ivy-aspect-ratio>');

    const element = await page.find('ivy-aspect-ratio');
    expect(element).toHaveClass('hydrated');
  });
});
