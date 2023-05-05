import { newE2EPage } from '@stencil/core/testing';

describe('ivy-collapse', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-collapse></ivy-collapse>');

    const element = await page.find('ivy-collapse');
    expect(element).toHaveClass('hydrated');
  });
});
