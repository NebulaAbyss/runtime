import { getBanner, getPlugins } from '../../scripts/rollup-config-helper';

const pkg = require('./package.json');
const banner = getBanner(pkg);
const plugins = getPlugins(pkg);

export default () => {
  return [{
    input: 'src/index.ts',
    output: [{
      file: pkg.module,
      format: 'es',
      banner,
      sourcemap: true,
    }, {
      file: pkg.main,
      format: 'cjs',
      banner,
      sourcemap: true,
    }],
    plugins,
  }, {
    input: 'src/index.ts',
    output: {
      file: pkg.brower,
      format: 'umd',
      name: 'srm.specification',
      banner,
      sourcemap: true,
    },
    plugins: getPlugins(pkg, { min: true }),
  }];
};
