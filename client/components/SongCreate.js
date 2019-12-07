/**
 * Created by sanchitgupta001 on 07/12/2019
 */
import React, { Component } from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';

import fetchSongsQuery from '../queries/fetchSongs';

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  onSubmit(e) {
    e.preventDefault();

    this.props
      .mutate({
        /*
				mutate is provided to us by react-apollo in the props;
				we need to pass corresponding variables in the variables object passed as an argument;
				we need to pass refetchQueries which we want to fetch after the new mutation is performed as by default graphql will not refetch the other queries
				(in our case songs list)
				*/
        variables: { title: this.state.title },
        refetchQueries: [{ query: fetchSongsQuery }] // can pass variables as well
      })
      .then(() => hashHistory.push('/'))
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
