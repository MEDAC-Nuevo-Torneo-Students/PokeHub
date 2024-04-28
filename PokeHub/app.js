const express = require('express');
const path = require('path');
const mysql = require('mysql');
const async = require('async');
const Swal = require('sweetalert2');




const app = express();
const port = 3000;

//2 - steamos urlencoded para capturar los datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Importar la conexión a la base de datos
const connection = require('./db');

/*
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
});  */

// Ruta para cargar index.ejs cuando se acceda a /home
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/home', (req, res) => {
    res.render('home');
});





app.post('/register', async (req,res)=> {
    const user = req.body.user;
    const email = req.body.email;
    const pass = req.body.pass;
    const description = ""
    const active = "1"
    connection.query('INSERT INTO user_info SET ?', {nickname:user, email:email, user_password:pass, description:description, active:active }, async (error,results)=>{
        if(error) {
            res.render('register', {
                alert: true,
                alertTitle: "Error",
                alertMessage:"Ya existe un usuario con este username o email",
                alertIcon:'error',
                showConfirmButton: false,
                timer:3500,
                ruta: 'login'
            });
            console.log(error);
        }else{
            res.render('register', {
                alert: true,
                alertTitle: "Registration",
                alertMessage:"¡Successful Registration!",
                alertIcon:'success',
                showConfirmButton:false,
                timer:3500,
                ruta: 'login'
            });
        }
    })
})


//  Auth
app.post('/auth', async (req,res)=>{
    const user = req.body.user;
    const pass = req.body.pass;
    
    if(user && pass) {
        connection.query('SELECT * FROM user_info WHERE nickname = ?', [user], async (error, results)=>{
            if(error) {
                console.error(error);
                res.status(500).send('Error interno del servidor');
                return;
            }

            if(results.length === 0 || pass !== results[0].user_password){
                res.render('login', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage:"Usuario y/o password incorrectas",
                    alertIcon:'error',
                    showConfirmButton: false,
                    timer:1500,
                    ruta: 'login'
                });
            } else {
                res.render('login', {
                    alert: true,
                    alertTitle: "Connection",
                    alertMessage:"¡Successful Connection!",
                    alertIcon:'success',
                    showConfirmButton: false,
                    timer:3500,
                    ruta: 'home'
                });
            }
        });
    } else {
        res.status(400).send('Faltan credenciales de usuario o contraseña');
    }
});



// Servir archivos estáticos desde la carpeta raíz
app.use(express.static(__dirname));





// Var. de session
const session = require('express-session')
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
}))

// Iniciar el servidor
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
