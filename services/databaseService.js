
const databaseService = () => {
    const knex = require('knex')({
        client: 'mysql',
        connection: {
            host : process.env.DB_HOST,
            port : 3306,
            user : process.env.DB_USER,
            password : process.env.DB_PASS,
            database : process.env.DB,
        }
    });
    const table = 'usuarios';

    const getUsers = () => {
        return knex(table).select();
    };

    const crearUsuario = (nip,contrasena) => {
        return knex(table).insert({
            nip: nip,
            contrasena: contrasena
        });
    };

    return {crearUsuario, getUsers};
};

module.exports = {
    databaseService
};
