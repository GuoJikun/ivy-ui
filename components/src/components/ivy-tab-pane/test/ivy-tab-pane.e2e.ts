import { newE2EPage } from '@stencil/core/testing';

describe('ivy-tab-pane', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-tab-pane></ivy-tab-pane>');

    const element = await page.find('ivy-tab-pane');
    expect(element).toHaveClass('hydrated');
  });
});
