import pkg from './package.json' assert { type: 'json' }
import db from './models/acro-graph.json' assert { type: 'json' }
import { fastify } from './server.js'

// Declare a route
fastify.get('/api/version', async (request, reply) => {
  return pkg.version
})

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ host: '0.0.0.0', port: 3000 })
    // Server is now listening on ${address}
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
