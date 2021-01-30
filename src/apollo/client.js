import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import fetch from "node-fetch";
import { setContext } from 'apollo-link-context'

const httpLink = createHttpLink({
  uri:'https://yoga-backend.herokuapp.com/',
  // uri:'http://localhost:4000/',
  fetch
})

const authLink = setContext((_, { headers }) => {

    return{
      headers:{
        ...headers,
       
      }
    }
})
const client = new ApolloClient({

  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
})

export default client;
