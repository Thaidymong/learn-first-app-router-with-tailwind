import { gql } from "@apollo/client";

export const QUERY_WOMEN_PRODUCTS = gql`
  query Womenproduct {
    womenproduct {
      id
      image
      summary
      title
      category_id
      created_at
      description
    }
  }
`;
