import { gql } from "apollo-boost";

export default gql`
  {
    account {
      id
      name
      users {
        id
        name
        email
      }
      surveys {
        id
        name
        ratingQuestions {
          id
          title
        }
      }
    }
  }
`;
