const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  output: 'export',  // Add this for static export
  experimental: {
    nextScriptWorkers: true,
  },
  // Remove or comment out redirects() - incompatible with static export [web:33]
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/home',
  //       permanent: true,
  //     },
  //   ]
  // },
})
