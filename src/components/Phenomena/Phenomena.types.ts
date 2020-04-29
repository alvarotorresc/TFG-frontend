import { gql } from "@apollo/client";
import researcher from '../../models/researcher';

export const PHENOMENA_QUERY = gql`
query getPhenomena {
    getPhenomena {
    id
    description
    type
    title
    researcher {
      id
      firstName
      lastName
      image
    }   
    }
}
`

export const TYPES_QUERY = gql`
query getPhenomenaTypes {
    getPhenomena {
    type
}
}
`

export const PHENOMENON_QUERY = gql`
  query getPhenomenon($idR: Int!) {
    getPhenomenon(id: $idR) {
      id
      title
      description
      type
      researcher {
        id
        firstName
        lastName
      }
      ocurrences {
        id
        date
        ubication
        description
        witness
        resolved
      }
    }
  }
`;

enum Types {
  APPARITION = "APPARITION",
  PSYCHOPHONY = "PSYCHOPHONY",
  HAUNTED_HOUSE = "HAUNTED_HOUSE",
  REINCARNATION = "REINCARNATION",
  TELEPATHY = "TELEPATHY",
  TELEKINESIS = "TELEKINESIS",
  UFOLOGY = "UFOLOGY",
}

export const CREATE_PHENOMENON = gql`
  mutation createPhenomenon(
    $researcherId: Int!
    $title: String!
    $description: String!
    $type: Types!
  ) {
    createPhenomenon(
      data: {
        researcherId: $researcherId
        title: $title
        type: $type
        description: $description
      }
    ) {
      id
    }
  }
`;

export const CREATE_OCURRENCE = gql`
  mutation createOcurrence(
    $phenomenaId: Int!
    $date: DateTime!
    $description: String!
    $ubication: JSON!
    $witness: Boolean!
    $resolved: Boolean!
  ) {
    createOcurrence(
      data: {
        phenomenaId: $phenomenaId
        date: $date
        ubication: $ubication
        description: $description
        witness: $witness
        resolved: $resolved
      }
    ) {
      id
    }
  }
`;

export type PhenomenaProps = {
  id: string
  title: string
  description: string
  type: string
  researcher: researcher
}

export type OcurrencesProps = {
  id: string,
  date: Date,
  ubication: JSON,
  description: string,
  witness: boolean,
  resolved: boolean
}
