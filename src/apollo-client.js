import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://dwjb-portfolio-strapi-2021.herokuapp.com/graphql',
  cache: new InMemoryCache(),
})

export default client
