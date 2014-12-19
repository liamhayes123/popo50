var Path = require('path');
var Hapi = require('hapi');

var server = new Hapi.Server();

server.views({
    engines: {
       html: require('swig')
    },
    path: Path.join(__dirname, 'views')
});

server.connection({ port: (process.env.PORT || 3000) });

server.route([{
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.view('index');
    }
  },
  {
    method: 'GET',
    path: '/crime',
    handler: function(request, reply) {
      reply.text('soon');
    }
  },
  {
    method: 'GET',
    path: '/map',
    handler: function(request, reply) {
	reply.view('map');
    }
  }
]);

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
