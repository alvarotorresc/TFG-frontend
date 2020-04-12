import { gql } from "@apollo/client";
import researcher from '../../models/researcher';

export const PHENOMENA_QUERY = gql`
query getPhenomena {
    getPhenomena {
    id
    description
    type
    researcher {
      id
      firstName
      lastName
      image
    }   
    }
}
`

export type PhenomenaProps = {
  id: string
  description: string
  type: string
  researcher: researcher
}