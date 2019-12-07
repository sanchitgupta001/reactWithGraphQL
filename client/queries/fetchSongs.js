/**
 * Created by sanchitgupta001 on 07/12/2019
 */
import gql from 'graphql-tag';

export default gql`
  {
    songs {
      title
      id
    }
  }
`;
