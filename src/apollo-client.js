import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://secure-refuge-04009.herokuapp.com/graphql',
  cache: new InMemoryCache(),
})

export default client
