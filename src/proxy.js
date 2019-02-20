var url = require('url'),
    http = require('http'),
    proxy = require('proxy-middleware'),
    yargs = require('yargs'),
    connect = require('connect'),
    serveStatic = require('serve-static'),
    cors = require('cors');

var argv = yargs.argv;
var remoteHost = argv.remoteHost || 'http://hackathon.ralekhs.com';
var remotePort = argv.remotePort || 80;
var localProxyPort = argv.localProxyPort || 3000;
var app = connect();
app.use(cors());
// app.use('/api/log-analyzer', proxy(url.parse('http://localhost:' + remotePort + '/api/log-analyzer')));
app.use('/api', proxy(url.parse('http://localhost:' + remotePort)));
app.use(serveStatic('dist', { 'index': ['index.html'] }));
http.createServer(app).listen(localProxyPort);

console.log('proxyfying ', remoteHost + ':' + remotePort, 'via', 'http://localhost:' + localProxyPort);
