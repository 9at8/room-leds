import {gql} from 'apollo-server-express'
import * as Rent from './Rent'

const PropertyCard = gql`
  """
  A Property Card in the Monopoly Deal game.
  """
  type PropertyCard implements Node {
    """
    Unique ID of the card.
    """
    id: ID!

    """
    Name of the property card.
    """
    name: String!

    """
    Monetary value of the card in Millions.
    """
    monetaryValue: Int!

    """
    Colors of the property card.
    """
    colors: [String!]!

    """
    Rent costs for all colors of the property card.
    """
    rents: [Rent!]!
  }
`

export const typeDefs = [...Rent.typeDefs, PropertyCard]
export const resolvers = Rent.resolvers
