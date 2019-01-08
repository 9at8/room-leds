import {gql} from 'apollo-server-express'

import {typeDefs as nodeTypeDefs} from './Node'
import * as Query from './Query'

const Schema = gql`
  schema {
    query: Query
  }
`

export const typeDefs = [...nodeTypeDefs, ...Query.typeDefs, Schema]
export const resolvers = Query.resolvers
