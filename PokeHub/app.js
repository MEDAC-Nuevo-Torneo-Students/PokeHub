const express = require('express');
const path = require('path');
const mysql = require('mysql');
const async = require('async');

const app = express();
const port = 3000;

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Importar la conexión a la base de datos
const connection = require('./db');

// Ruta para renderizar el archivo EJS con los datos de la base de datos
app.get('/home', (req, res) => {
    // Realizar consultas a la base de datos para cada Pokémon en el equipo
    const queries = [ 
        'SELECT * FROM pokehub.team JOIN pokehub.user_info ON pokehub.team.id_user = pokehub.user_info.id JOIN pokehub.pokemon_build ON pokehub.team.id_Pokemon1_build = pokehub.pokemon_build.id;',
        'SELECT * FROM pokehub.team JOIN pokehub.user_info ON pokehub.team.id_user = pokehub.user_info.id JOIN pokehub.pokemon_build ON pokehub.team.id_Pokemon2_build = pokehub.pokemon_build.id;',
        'SELECT * FROM pokehub.team JOIN pokehub.user_info ON pokehub.team.id_user = pokehub.user_info.id JOIN pokehub.pokemon_build ON pokehub.team.id_Pokemon3_build = pokehub.pokemon_build.id;',
        'SELECT * FROM pokehub.team JOIN pokehub.user_info ON pokehub.team.id_user = pokehub.user_info.id JOIN pokehub.pokemon_build ON pokehub.team.id_Pokemon4_build = pokehub.pokemon_build.id;',
        'SELECT * FROM pokehub.team JOIN pokehub.user_info ON pokehub.team.id_user = pokehub.user_info.id JOIN pokehub.pokemon_build ON pokehub.team.id_Pokemon5_build = pokehub.pokemon_build.id;',
        'SELECT * FROM pokehub.team JOIN pokehub.user_info ON pokehub.team.id_user = pokehub.user_info.id JOIN pokehub.pokemon_build ON pokehub.team.id_Pokemon6_build = pokehub.pokemon_build.id;',
        'SELECT * FROM pokehub.post JOIN pokehub.team where pokehub.post.id_team = pokehub.team.id' 
    ];

    // Realizar las consultas en serie
    async.parallel(queries.map(query => {
        return function(callback) {
            connection.query(query, (err, results) => {
                if (err) {
                    console.error('Error al realizar la consulta:', err);
                    callback(err);
                } else {
                    callback(null, results);
                }
            });
        };
    }), (err, results) => {
        if (err) {
            // Manejar errores
            res.status(500).send('Error interno del servidor');
        } else {
            // Renderizar el archivo EJS y pasar los resultados de las consultas como datos
            res.render('home', { 
                datos1: results[0], 
                datos2: results[1], 
                datos3: results[2], 
                datos4: results[3], 
                datos5: results[4], 
                datos6: results[5],
                posts: results[6]
            });
        }
    });
});

// Ruta para cargar index.ejs cuando se acceda a /home
app.get('/', (req, res) => {
    res.render('index');
});

// Servir archivos estáticos desde la carpeta raíz
app.use(express.static(__dirname));

// Iniciar el servidor
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
