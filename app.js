let app = require('./config/server.js');

let server  = app.listen(80, () => {
    console.log("Servidor no ar");
});

let io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', ((socket) => {
    console.log('conectado');

    io.on('newUser', ((event) => {
        console.log(event)
    }));
}));
