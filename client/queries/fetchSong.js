/**
 * Created by sanchitgupta001 on 07/12/2019
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
        likes
      }
    }
  }
`;
