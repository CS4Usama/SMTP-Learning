import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import DisplayData from './DisplayData';


function App() {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        // uri: LINK_OF_GRAPHQL_API,    Connect API and Start Working... (Communication)
        uri: 'http://localhost:4000/graphql',
    });

    return(
        <ApolloProvider client={client}>
            <div className='App'>
                <DisplayData />
            </div>
        </ApolloProvider>
    );
}

export default App;
