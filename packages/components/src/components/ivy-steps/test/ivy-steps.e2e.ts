import { newE2EPage } from '@stencil/core/testing';

describe('ivy-steps', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ivy-steps></ivy-steps>');

    const element = await page.find('ivy-steps');
    expect(element).toHaveClass('hydrated');
  });
});
