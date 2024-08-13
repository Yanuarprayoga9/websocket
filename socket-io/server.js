import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on('connection', (socket) => {
    console.log('a user connected');
});

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

httpServer.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
