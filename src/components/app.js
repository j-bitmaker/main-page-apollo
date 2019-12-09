import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import AppHeader from './app-header';
import AppBody from './app-body.js';
import AppFooter from './app-footer';
import {img, news, jobs} from '../services/graphql-service.js';
import {BrowserRouter as Router} from 'react-router-dom';

const App = () =>{
    const client = new ApolloClient({
        uri: 'https://api.spacex.land/graphql/'
    })
    return(
    <ApolloProvider client={client}>
        <Router>
            <div className='app'>
                <AppHeader/>
                <AppBody img={img} news={news} jobs={jobs}/>
                <AppFooter/>
            </div>
        </Router>
    </ApolloProvider>
    )
};

export default App;