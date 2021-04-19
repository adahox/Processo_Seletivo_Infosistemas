import app from "./app";
import http from 'http';

const server = http.createServer(app);
const port = process.env.port || 3000;
server.listen(port);
server.on('error', () => {
    console.log(server);
});

server.on("listening", () => {
    console.log(`Server running on port: ${port}`)
});


module.exports = server;