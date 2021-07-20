// const withTM = require('next-transpile-modules')

// module.exports = withTM({
//   transpileModules: ['gsap'],
// })

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'tsx'],
  reactStrictMode: true,
  env: {
    MAILCHIMP_AUDIENCE_ID: '534e46c2fa', // WebJam
    MAILCHIMP_SERVER_PREFIX: 'us6',
    MAILCHIMP_API_KEY: '1a8e4419ab2cde7ef11fbb5f2f550827-us6', // WebJam
  },
})
const withImages = require('next-images')
module.exports = withImages({
  images: {
    domains: ['res.cloudinary.com'], // correct to go here? not 100% sure how to mix different package configs
  },
})
