module.exports = function(app, databaseService) {

    app.get('/users', (req, res) => {
        databaseService.getUsers()
            .then(users => res.json(users))
            .catch(e => res.status(500).send(e));
    });

    app.post('/users', (req, res) => {
        const newUser = req.body; //constante crear nuevo usuario
        console.log(newUser) //devuelve status
        databaseService
        .crearUsuario(
            newUser.nip,
            newUser.contrasena)
            .then(() => {
                res.json({message: "created!"});
            }).catch(e => {
                res.status(500).send(e);
            });
    });
};