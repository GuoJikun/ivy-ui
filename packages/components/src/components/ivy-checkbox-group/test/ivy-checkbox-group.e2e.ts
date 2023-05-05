import { newE2EPage } from '@stencil/core/testing';

describe('ivy-checkbox-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-checkbox-group></ivy-checkbox-group>');

    const element = await page.find('ivy-checkbox-group');
    expect(element).toHaveClass('hydrated');
  });
});
