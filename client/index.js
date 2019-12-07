import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

import './style/style.css';

const client = new ApolloClient({
	dataIdFromObject: obj => obj.id
	// takes every single piece of data that is fetched by Apollo client from backend;
	// the result of this function is used to identify that piece of data inside apollo store/client
});

const Root = () => {
  return (
	  <ApolloProvider client={client}>
		  <Router history={hashHistory}>
			  <Route path="/" component={App}>
				  <IndexRoute component={SongList} />
				  <Route path="songs/new" component={SongCreate} />
				  <Route path="songs/:id" component={SongDetail} />
			  </Route>
		  </Router>
	  </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
