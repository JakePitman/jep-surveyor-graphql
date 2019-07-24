import { gql } from "apollo-boost";

export default gql`
  mutation deleteRatingQuestion($id: id) {
    ... on Id {
      id
    }
  }
`;
