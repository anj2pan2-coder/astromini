const isProd = process.env.NODE_ENV === 'production'

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // cssnano only in production: deduplicates rules, removes whitespace/comments
    ...(isProd && {
      cssnano: {
        preset: ['advanced', {
          discardComments: { removeAll: true },
          reduceIdents: false, // keep animation names stable
          zindex: false,       // don't rewrite z-index values
        }],
      },
    }),
  },
}
