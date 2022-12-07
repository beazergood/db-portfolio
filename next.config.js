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
    NEXT_PUBLIC_STRAPI_API_URL:
      'https://secure-refuge-04009.herokuapp.com/graphql',
  },

})
