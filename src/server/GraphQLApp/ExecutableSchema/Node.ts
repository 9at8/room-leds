import {gql} from 'apollo-server-express'

const typeDef = gql`
  """
  The Node object
  """
  interface Node {
    id: ID!
  }
`

export const typeDefs = [typeDef]
