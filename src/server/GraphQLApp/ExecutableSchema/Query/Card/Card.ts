import {gql} from 'apollo-server-express'

import * as ActionCard from './ActionCard'
import * as MoneyCard from './MoneyCard'
import * as PropertyCard from './PropertyCard'

const Card = gql`
  """
  An ActionCard, a MoneyCard, or a PropertyCard.
  """
  union Card = ActionCard | MoneyCard | PropertyCard
`

export const typeDefs = [
  ...ActionCard.typeDefs,
  ...MoneyCard.typeDefs,
  ...PropertyCard.typeDefs,
  Card,
]
export const resolvers = {
  ...ActionCard.resolvers,
  ...MoneyCard.resolvers,
  ...PropertyCard.resolvers,
}
