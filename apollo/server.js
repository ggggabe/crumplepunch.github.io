import dotenv from 'dotenv'

import Debug from 'debug'
import apollo from 'apollo-server'
import gql from 'graphql-tag'
import fs from 'fs'
dotenv.config()

const debug = Debug('gm:apollo-server')
const typeDefs = gql`${fs.readFileSync(fs.realpathSync('.').concat('/schema.gql'), 'utf8')}`

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => {
      debug("I've been hit!")
      return 'world'
    }
  }
}

debug({ resolvers })

export default function init() {
  const { ApolloServer } = apollo
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
    debug(`🚀 Server ready at ${url}`)
  })
}

init()
