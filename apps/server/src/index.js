import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
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
