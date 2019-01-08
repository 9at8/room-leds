import {gql} from 'apollo-server-express'

const Player = gql`
  type Player {
    playerName: String
  }
`

export default [Player]
