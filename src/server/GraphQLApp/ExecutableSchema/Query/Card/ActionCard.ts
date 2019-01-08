import {gql} from 'apollo-server-express'
import * as Rent from './Rent'

const ActionCard = gql`
  """
  An Action Card in the Monopoly Deal game
  """
  type ActionCard implements Node {
    """
    Unique ID of the card.
    """
    id: ID!

    """
    Title of the card.
    """
    title: String!

    """
    Description of the card.
    """
    description: String!

    """
    Monetary value of the card in Millions.
    """
    monetaryValue: Int!

    """
    Rental properties of the action card.
    """
    rent: ActionCardRent
  }
`

const ActionCardRent = gql`
  """
  Rental properties of an action card.
  """
  type ActionCardRent {
    """
    Rent price multiplier.
    """
    multiplier: Int!

    """
    Number of players that pay rent.
    """
    numberOfPlayers: Int!

    """
    Property colors that can be charged rent on.
    """
    rentColors: [Rent!]!
  }
`

export const typeDefs = [...Rent.typeDefs, ActionCard, ActionCardRent]
export const resolvers = Rent.resolvers
