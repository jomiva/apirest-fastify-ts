import { FastifyReply, FastifyRequest, RequestGenericInterface } from 'fastify';

type UserQuery = FastifyRequest<{
  Querystring: { username: string; password: string };
}>;

class UserController {
  static async getUser(req: UserQuery, reply: FastifyReply) {
    const { username, password } = req.query;
  }
}

export default UserController;
