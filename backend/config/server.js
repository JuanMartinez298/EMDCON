const http = require('http');
const socket = require('../src/socket/socket');
const p = require('../utils/utils').port;

const server = function(app) {

    const servidor = http.Server(app);
    servidor.listen(p.port, p.hostname, () => {
        console.log(`El servidor se esta ejecutando en http://${p.hostname}:${p.port}/`)
    })
    socket(servidor)
};

module.exports = server;