import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import UserController from '../controllers/userController';

module.exports = async function (fastify: FastifyInstance) {
  fastify.get('/', UserController.getUser);

  //   fastify.post(
  //     '/',
  //     {
  //       preValidation: async (request, reply) => {
  //         console.log('Validar JWT');
  //         return reply.code(404).send({ error: true });
  //       },
  //     },
  //     async (request: FastifyRequest, reply: FastifyReply) => {
  //       console.log(request.body);
  //       return reply.send('esta es la ruta post');
  //     }
  //   );
};
