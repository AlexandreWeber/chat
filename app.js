let app = require('./config/server.js');

let server  = app.listen(80, () => {
    console.log("Servidor no ar");
});

let io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', ((socket) => {
    console.log('conectado');

    socket.on('msgParaServidor', function (data) {
        socket.emit('msgParaCliente', {
            apelido: data.apelido, 
            mensagem: data.mensagem
        });
        socket.broadcast.emit('msgParaCliente', {
            apelido: data.apelido, 
            mensagem: data.mensagem
        });

        //
        socket.emit('participantesCliente', {
            apelido: data.apelido
        });
        socket.broadcast.emit('participantesCliente', {
            apelido: data.apelido
        });

    });
}));
