import Ts from 'rollup-plugin-typescript2'

export default {
  input: [
    './src/index.ts',
    './src/atoms/BetButton/index.ts'
  ],
  output: {
    dir: 'lib',
    format: 'esm',
    sourcemap: true
  },
  plugins: [Ts()],
  preserveModules: true,
  external: [
    'react',
    '@mui/material/Button',
    '@mui/material/styles'
  ]
}
