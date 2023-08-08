import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ivy',
  globalStyle: 'src/index.css',
  globalScript: 'src/global.ts',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
      customElementsExportBehavior: 'bundle',
      copy: [{ src: 'components/ivy-icon/assets/iconfont.svg', dest: 'dist/components/assets/iconfont.svg', warn: true }],
    },
  ],
};
