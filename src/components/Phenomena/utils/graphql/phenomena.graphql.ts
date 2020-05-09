import { gql } from "@apollo/client";

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
  query getPhenomenon($id: String!) {
    getPhenomenon(id: $id) {
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
        description
        witness
        resolved
      }
    }
  }
`;
export const OCURRENCE_QUERY = gql`
  query getOcurrence($idO: String!) {
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

export const CREATE_PHENOMENON = gql`
  mutation createPhenomenon(
    $researcherId: String!
    $title: String!
    $description: String!
    $type: Types!
  ) {
    createPhenomenon(
      dto: {
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
    $phenomenaId: String!
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
    $id: String!
    $title: String!
    $description: String!
    $type: Types!) {
      updatePhenomenon(
        dto: {
        phenomenonId: $id
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
    $id: String!
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
    $id: String!
  ){
    deletePhenomenon(
      dto: {
        phenomenonId: $id
      }
    )
  }
`

export const DELETE_OCURRENCE = gql`
  mutation deleteOcurrence(
    $id: String!
  ){
    deleteOcurrence(
      dto:{
        ocurrenceId: $id
      }
      
    )
  }
`