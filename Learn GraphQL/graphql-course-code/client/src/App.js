import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


function App() {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        // uri: LINK_OF_GRAPHQL_API,    Connect API and Start Working... (Communication)
        uri: 'http://localhost:3001/graphql',
    });

    return(
        <ApolloProvider client={client}>
            <div className='App'>
                <h1>
                    Hello World
                </h1>
            </div>
        </ApolloProvider>
    );
}

export default App;
