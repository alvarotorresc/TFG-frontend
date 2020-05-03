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
export const OCURRENCE_QUERY = gql`
  query getOcurrence($idO: Int!) {
    getOcurrence(id: $idO) {
      id
      date
      ubication
      description
      witness
      resolved
      phenomena {
        id
        title
      }
    }
  }

`

// eslint-disable-next-line
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

export const UPDATE_PHENOMENA = gql`
  mutation updatePhenomenon(
    $researcherId: Int!
    $id: Int!
    $title: String!
    $description: String!
    $type: Types!) {
      updatePhenomenon(
        id: $id,
      phenomenon: {
        researcherId: $researcherId
        title: $title
        type: $type
        description: $description
      }
    ) {
      id
    }
    }
`

export const UPDATE_OCURRENCE = gql`
  mutation updateOcurrence(
    $id: Int!
    $phenomenaId: Int!
    $date: DateTime!
    $description: String!
    $ubication: JSON!
    $witness: Boolean!
    $resolved: Boolean!
  ) {
    updateOcurrence (
      id: $id,
      ocurrence: {
        phenomenaId: $phenomenaId
        date: $date
        ubication: $ubication
        description: $description
        witness: $witness
        resolved: $resolved
      }
    ){
      id
    }
  }
`

export const DELETE_PHENOMENON = gql`
  mutation deletePhenomenon(
    $id: Int!
  ){
    deletePhenomenon(
      id: $id
    )
  }
`

export const DELETE_OCURRENCE = gql`
  mutation deleteOcurrence(
    $id: Int!
  ){
    deleteOcurrence(
      id: $id
    )
  }
`

export type PhenomenaProps = {
  id: string
  title: string
  description: string
  type: string
  researcher: researcher
  handleDelete: any
}

export type OcurrencesProps = {
  id: string,
  date: Date,
  ubication: JSON,
  description: string,
  witness: boolean,
  resolved: boolean
  handleDelete: any
}
