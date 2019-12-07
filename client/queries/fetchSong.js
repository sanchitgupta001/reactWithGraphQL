/**
 * Created by sanchitgupta001 on 15/10/2019
 */
import gql from 'graphql-tag';

// ! specifies that the field is mandatory
export default gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
      }
    }
  }
`;
