import {gql} from 'apollo-server-core'

const Rent = gql`
  """
  Rent costs for a color.
  """
  type Rent {
    """
    Property color that can be charged rent on.
    """
    color: String!

    """
    Rent costs for the color in increasing order of set size of property cards.
    """
    costs: [RentCost!]!
  }
`

const RentCost = gql`
  """
  Rent amount with the set size of a property card.
  """
  type RentCost {
    """
    Number of cards in a set of property cards.
    """
    setSize: Int!

    """
    Amount to be paid as rent.
    """
    amount: Int!
  }
`

export const typeDefs = [Rent, RentCost]
export const resolvers = {}
