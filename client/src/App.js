import React from 'react';
import './App.css';
import Launches from "./component/Launches";
import Launch from "./component/Launch";
import logo from './logo.png';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {BrowserRouter as Router, Route} from "react-router-dom";

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="container">
                    <img src={logo} alt="SpaceX logo" style={{width: 300, display: "block", margin: "auto"}}/>
                    <Route exact path="/" component={Launches}/>
                    <Route exact path="/launch/:flight_number" component={Launch}/>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
