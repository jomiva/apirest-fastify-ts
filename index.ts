import fastify from 'fastify';

const server = fastify();

server.register(require('./routes/index'));

server.listen(8080, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Servidor listo escuchando en:', address);
});
