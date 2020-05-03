import { gql } from "@apollo/client";

export const RESEARCHERS_QUERY = gql`
  query getResearchers {
    getResearchers {
      id
      firstName
      lastName
      email
      age
      rol
      nationality
      image
      phenomena{
        id
        description
      }
    }
  }
`;

export const RESEARCHER_QUERY = gql`
  query getResearcher($idR: Int!) {
    getResearcher(id: $idR) {
      id
      firstName
      lastName
      email
      age
      rol
      password
      nationality
      image
      phenomena {
        id
        title
      }
    }
  }
`;

export const ADD_RESEARCHER = gql`
  mutation addResearcher(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $nationality: String!
    $age: Int!
    $rol: Rol!
    $image: String!
  ) {
    createResearcher(
      data: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
        nationality: $nationality
        age: $age
        rol: $rol
        image: $image
      }
    ) {
      id
    }
  }
`;

export const UPDATE_RESEARCHER = gql`
  mutation updateResearcher(
      $id: Int!
      $firstName: String!
      $lastName: String!
      $email: String!
      $password: String!
      $nationality: String!
      $age: Int!
      $rol: Rol!
      $image: String!) {
      updateResearcher(
        id: $id,
        researcher: {
          firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
        nationality: $nationality
        age: $age
        rol: $rol
        image: $image
        }
      ) {
        id
      }
    }
`

export const DELETE_RESEARCHER = gql`
  mutation deleteResearcher(
    $id: Int!
  ){
    deleteResearcher(
      id: $id
    )
  }
`