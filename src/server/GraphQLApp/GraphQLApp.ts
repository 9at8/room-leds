import {ApolloServer, makeExecutableSchema} from 'apollo-server-express'
import express from 'express'
import {writeFile} from 'fs'
import {printSchema} from 'graphql'

import * as executableSchema from './ExecutableSchema'

const dev = process.env.NODE_ENV === 'development'

const schema = makeExecutableSchema(executableSchema)

writeFile(
  `${__dirname}/schema.graphql`,
  printSchema(schema),
  err =>
    // tslint:disable-next-line:no-console
    err && console.error(err),
)

const server = new ApolloServer({schema, tracing: dev})
const app = express()

server.applyMiddleware({app})

export default app
