import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

module.exports = async function (fastify: FastifyInstance) {
  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    return reply.send('Estoy en el esp');
  });
};
