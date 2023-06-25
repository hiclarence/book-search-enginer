import { gql } from "@apollo/client";

export const QUERY_ME = gql`
 {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
            _id
            image
            link
            description
            authors
            _id
            bookId
            title
        }
    }
}
`;
