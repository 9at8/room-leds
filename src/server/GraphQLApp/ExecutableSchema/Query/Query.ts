import {gql} from 'apollo-server-express'
import * as Card from './Card'

const Query = gql`
  """
  A GraphQL schema for Monopoly Deal
  """
  type Query {
    """
    All the cards that exist in the game.
    """
    cards: [Card!]!
  }
`

export const typeDefs = [...Card.typeDefs, Query]
export const resolvers = {
  ...Card.resolvers,
  Query: {
    cards() {
      return ['Hello', 'World']
    },
  },
}
