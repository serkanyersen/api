var restify = require('restify');
var sass = require('node-sass');

var server = restify.createServer({
  name: 'sass-api',
  version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.jsonp());
server.use(restify.CORS());
server.use(restify.bodyParser());

server.post('/parse', function (req, res, next) {

    var result = sass.renderSync({
      data: req.params.code
    });

    res.send({
      result: result.css.toString()
    });

    return next();
});

server.listen(8081, function () {
    console.log('%s listening at %s', server.name, server.url);
});