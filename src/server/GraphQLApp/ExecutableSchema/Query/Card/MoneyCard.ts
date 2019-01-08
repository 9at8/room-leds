import {gql} from 'apollo-server-express'

const MoneyCard = gql`
  """
  A Property Card in the Monopoly Deal game.
  """
  type MoneyCard implements Node {
    """
    Unique ID of the card.
    """
    id: ID!

    """
    Monetary value of the card in Millions.
    """
    monetaryValue: Int!
  }
`

export const typeDefs = [MoneyCard]
export const resolvers = {}
