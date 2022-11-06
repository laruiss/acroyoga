import { Sequelize } from 'sequelize'

import config from './config.js'
import { fastify } from './server'

const {
  dbUser,
  dbPass,
  dbHost,
  dbPort,
  dbName,
} = config

export const sequelize = new Sequelize(
  `postgres://${dbUser}:${dbPass}@${dbHost}:${dbPort || 5432}/${dbName}`,
  {
    logging: (...msgs) => fastify.log.info(...msgs),
  },
)

export const connect = async () => {
  await sequelize.authenticate()
}

export const disconnect = async () => {
  await sequelize.close()
}
