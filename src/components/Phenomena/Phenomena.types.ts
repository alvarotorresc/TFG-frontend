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