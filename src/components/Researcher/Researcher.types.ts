import researcher from "../../models/researcher";
import { gql } from "@apollo/client";

export type ResearcherProps = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  rol: string;
  nationality: string;
  image: string;
  researcher: researcher;
  phenomena: []
};

export type CardProps = {
  id: number;
  name: string;
  email: string;
  age: number;
  rol: string;
  image: string;
  nationality: string;
  phenomena: []
};

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

enum Rol {
  ADMIN = "ADMIN",
  RESEARCHER = "RESEARCHER",
}

export const urlImages = [
  "https://semantic-ui.com/images/avatar/large/steve.jpg",
  "https://semantic-ui.com/images/avatar/large/helen.jpg",
  "https://semantic-ui.com/images/avatar/large/elliot.jpg",
  "https://semantic-ui.com/images/avatar2/large/kristy.png",
  "https://semantic-ui.com/images/avatar2/large/matthew.png",
  "https://semantic-ui.com/images/avatar/large/veronika.jpg",
];

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
