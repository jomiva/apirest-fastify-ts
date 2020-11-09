import { FastifyInstance } from 'fastify';

module.exports = async function (fastify: FastifyInstance) {
  fastify.register(require('./user'), { prefix: '/user' });
  fastify.register(require('./esp'), { prefix: '/esp' });
};
