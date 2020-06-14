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
        city
      }
    }
  }
`;
export const OCURRENCE_QUERY = gql`
  query getOcurrence($id: String!) {
    getOcurrence(id: $id) {
      id
      date
      description
      witness
      resolved
      city
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
    $date: Date!
    $description: String!
    $witness: Boolean!
    $city: String!
    $resolved: Boolean!
  ) {
    createOcurrence(
      dto: {
        phenomenaId: $phenomenaId
        date: $date
        description: $description
        witness: $witness
        resolved: $resolved
        city: $city
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
    $date: Date!
    $description: String!
    $witness: Boolean!
    $resolved: Boolean!
    $city: String!
  ) {
    updateOcurrence (
      dto: {
        ocurrenceId: $id
        date: $date
        description: $description
        witness: $witness
        resolved: $resolved
        city: $city
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