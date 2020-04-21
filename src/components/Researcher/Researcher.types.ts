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
      nationality
      image
    }
  }
`;