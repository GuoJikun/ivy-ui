import { newE2EPage } from '@stencil/core/testing';

describe('ivy-radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-radio-group></ivy-radio-group>');

    const element = await page.find('ivy-radio-group');
    expect(element).toHaveClass('hydrated');
  });
});
