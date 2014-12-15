var Path = require('path');
var Hapi = require('hapi');

var server = new Hapi.Server();

server.views({
    engines: {
       html: require('swig')
    },
    path: Path.join(__dirname, 'views')
});

server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.view('index');
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
