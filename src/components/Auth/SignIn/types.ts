import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login(
    $email: String!
    $password: String!
  ){
    login(
      loginDto: {
        email: $email
        password: $password
      }
    ){
      accessToken
      researcherId
      type
    }
  }
`

export const LOGOUT = gql`
  mutation logout{
    logout
  }
`