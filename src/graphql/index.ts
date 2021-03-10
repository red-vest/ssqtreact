import {ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat} from '@apollo/client';

const httpLink = new HttpLink({uri: `http://127.0.0.1:3000/graphql`})
const authMiddleware = new ApolloLink((operation: any, forward: any) => {
    operation.setContext({
        headers: {
            authorization: localStorage.getItem('token') || 'hello',
        }
    })
    return forward(operation);
})

export const client = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache()
});
