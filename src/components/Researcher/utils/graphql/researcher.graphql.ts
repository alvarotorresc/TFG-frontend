import { gql } from "@apollo/client";

export const RESEARCHERS_QUERY = gql`
  query researchers {
    researchers {
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
  query researcher($id: String!) {
    researcher(id: $id) {
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
      dto: {
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
      $id: String!
      $firstName: String!
      $lastName: String!
      $email: String!
      $password: String!
      $nationality: String!
      $age: Int!
      $rol: Rol!
      $image: String!) {
      updateResearcher(
        dto: {
          researcherId: $id
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