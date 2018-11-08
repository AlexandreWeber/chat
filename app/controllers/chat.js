module.exports.chat = ((app, req, res) => {
    let apelido = req.body.apelido;

    req.assert('apelido', 'Informe um apelido').notEmpty();
    req.assert('apelido', 'O apelido deve possuir no mínimo 3 e no máximo 15 caracteres').len(3, 15);

    if (req.validationErrors()) {
        res.render('index', { erros: req.validationErrors()});
        return;
    }

    res.render('chat');
});
