const express = require('express');
const session = require('express-session');
const path = require('path');
const mysql = require('mysql');
const async = require('async');
const Swal = require('sweetalert2');




const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
}))

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

const connection = require('./db');

// Firsr routes
app.get('/', (req, res) => {
    if (req.session.loggedin) {
        res.redirect('/home')
    }
    else {
        res.render('index');
    }
});

app.get('/login', (req, res) => {
    if (req.session.loggedin) {
        res.redirect('/home')
    }
    else {
        res.render('login');
    }
});

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
                req.session.loggedin = true;
                req.session.user =  user;
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
        res.render('login', {
            alert: true,
            alertTitle: "Advertencia",
            alertMessage:"¡Por favor ingrese un usuario y/o!",
            alertIcon:'success',
            showConfirmButton: false,
            timer:3500,
            ruta: 'login'
        });
    }
});
// Register
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

// Logout
app.get('/logout',  (req, res) => {
    req.session.destroy(()=> {
        res.redirect('/login')
    })
})

// Auth pages
app.get('/home', (req, res) => {
    const user = req.session.user;
    const sqlQuery = `SELECT t.*, 
                        pb1.id AS Pokemon1_id, pb1.id_pokemon AS Pokemon1_id_pokemon, pb1.gender AS Pokemon1_gender, 
                        pb1.id_ability AS Pokemon1_id_ability, pb1.id_item AS Pokemon1_id_item, pb1.id_nature AS Pokemon1_id_nature, 
                        pb1.id_move_1 AS Pokemon1_id_move_1, pb1.id_move_2 AS Pokemon1_id_move_2, pb1.id_move_3 AS Pokemon1_id_move_3, 
                        pb1.id_move_4 AS Pokemon1_id_move_4, pb1.hp_ivs AS Pokemon1_hp_ivs, pb1.atk_ivs AS Pokemon1_atk_ivs, 
                        pb1.def_ivs AS Pokemon1_def_ivs, pb1.spa_ivs AS Pokemon1_spa_ivs, pb1.spd_ivs AS Pokemon1_spd_ivs, 
                        pb1.spe_ivs AS Pokemon1_spe_ivs, 
                        pb2.id AS Pokemon2_id, pb2.id_pokemon AS Pokemon2_id_pokemon, pb2.gender AS Pokemon2_gender, 
                        pb2.id_ability AS Pokemon2_id_ability, pb2.id_item AS Pokemon2_id_item, pb2.id_nature AS Pokemon2_id_nature, 
                        pb2.id_move_1 AS Pokemon2_id_move_1, pb2.id_move_2 AS Pokemon2_id_move_2, pb2.id_move_3 AS Pokemon2_id_move_3, 
                        pb2.id_move_4 AS Pokemon2_id_move_4, pb2.hp_ivs AS Pokemon2_hp_ivs, pb2.atk_ivs AS Pokemon2_atk_ivs, 
                        pb2.def_ivs AS Pokemon2_def_ivs, pb2.spa_ivs AS Pokemon2_spa_ivs, pb2.spd_ivs AS Pokemon2_spd_ivs, 
                        pb2.spe_ivs AS Pokemon2_spe_ivs, 
                        pb3.id AS Pokemon3_id, pb3.id_pokemon AS Pokemon3_id_pokemon, pb3.gender AS Pokemon3_gender, 
                        pb3.id_ability AS Pokemon3_id_ability, pb3.id_item AS Pokemon3_id_item, pb3.id_nature AS Pokemon3_id_nature, 
                        pb3.id_move_1 AS Pokemon3_id_move_1, pb3.id_move_2 AS Pokemon3_id_move_2, pb3.id_move_3 AS Pokemon3_id_move_3, 
                        pb3.id_move_4 AS Pokemon3_id_move_4, pb3.hp_ivs AS Pokemon3_hp_ivs, pb3.atk_ivs AS Pokemon3_atk_ivs, 
                        pb3.def_ivs AS Pokemon3_def_ivs, pb3.spa_ivs AS Pokemon3_spa_ivs, pb3.spd_ivs AS Pokemon3_spd_ivs, 
                        pb3.spe_ivs AS Pokemon3_spe_ivs, 
                        pb4.id AS Pokemon4_id, pb4.id_pokemon AS Pokemon4_id_pokemon, pb4.gender AS Pokemon4_gender, 
                        pb4.id_ability AS Pokemon4_id_ability, pb4.id_item AS Pokemon4_id_item, pb4.id_nature AS Pokemon4_id_nature, 
                        pb4.id_move_1 AS Pokemon4_id_move_1, pb4.id_move_2 AS Pokemon4_id_move_2, pb4.id_move_3 AS Pokemon4_id_move_3, 
                        pb4.id_move_4 AS Pokemon4_id_move_4, pb4.hp_ivs AS Pokemon4_hp_ivs, pb4.atk_ivs AS Pokemon4_atk_ivs, 
                        pb4.def_ivs AS Pokemon4_def_ivs, pb4.spa_ivs AS Pokemon4_spa_ivs, pb4.spd_ivs AS Pokemon4_spd_ivs, 
                        pb4.spe_ivs AS Pokemon4_spe_ivs, 
                        pb5.id AS Pokemon5_id, pb5.id_pokemon AS Pokemon5_id_pokemon, pb5.gender AS Pokemon5_gender, 
                        pb5.id_ability AS Pokemon5_id_ability, pb5.id_item AS Pokemon5_id_item, pb5.id_nature AS Pokemon5_id_nature, 
                        pb5.id_move_1 AS Pokemon5_id_move_1, pb5.id_move_2 AS Pokemon5_id_move_2, pb5.id_move_3 AS Pokemon5_id_move_3, 
                        pb5.id_move_4 AS Pokemon5_id_move_4, pb5.hp_ivs AS Pokemon5_hp_ivs, pb5.atk_ivs AS Pokemon5_atk_ivs, 
                        pb5.def_ivs AS Pokemon5_def_ivs, pb5.spa_ivs AS Pokemon5_spa_ivs, pb5.spd_ivs AS Pokemon5_spd_ivs, 
                        pb5.spe_ivs AS Pokemon5_spe_ivs, 
                        pb6.id AS Pokemon6_id, pb6.id_pokemon AS Pokemon6_id_pokemon, pb6.gender AS Pokemon6_gender, 
                        pb6.id_ability AS Pokemon6_id_ability, pb6.id_item AS Pokemon6_id_item, pb6.id_nature AS Pokemon6_id_nature, 
                        pb6.id_move_1 AS Pokemon6_id_move_1, pb6.id_move_2 AS Pokemon6_id_move_2, pb6.id_move_3 AS Pokemon6_id_move_3, 
                        pb6.id_move_4 AS Pokemon6_id_move_4, pb6.hp_ivs AS Pokemon6_hp_ivs, pb6.atk_ivs AS Pokemon6_atk_ivs, 
                        pb6.def_ivs AS Pokemon6_def_ivs, pb6.spa_ivs AS Pokemon6_spa_ivs, pb6.spd_ivs AS Pokemon6_spd_ivs, 
                        pb6.spe_ivs AS Pokemon6_spe_ivs, 
                        p.likes,
                        ui.nickname AS nickname
                        
                    FROM team t 
                    INNER JOIN pokemon_build pb1 ON t.id_Pokemon1_build = pb1.id 
                    INNER JOIN pokemon_build pb2 ON t.id_Pokemon2_build = pb2.id 
                    INNER JOIN pokemon_build pb3 ON t.id_Pokemon3_build = pb3.id 
                    INNER JOIN pokemon_build pb4 ON t.id_Pokemon4_build = pb4.id 
                    INNER JOIN pokemon_build pb5 ON t.id_Pokemon5_build = pb5.id 
                    INNER JOIN pokemon_build pb6 ON t.id_Pokemon6_build = pb6.id 
                    INNER JOIN post p ON t.id = p.id_team
                    INNER JOIN user_info ui ON t.id_user = ui.id`;
                    

                    connection.query(sqlQuery, (err, results) => {
                        if (err) {
                            console.error('Error executing query:', err);
                            res.status(500).send('Internal Server Error');
                        }
                
                        if (req.session.loggedin) {
                            res.render('home', { datos: results, user: user});
                        } else {
                            res.render('login', {
                                alert: true,
                                alertTitle: "Error",
                                alertMessage:"Tienes que iniciar sesión para poder acceder",
                                alertIcon:'error',
                                showConfirmButton: false,
                                timer:3500,
                                ruta: 'login'
                            });
                        }
                    });
                });


app.get('/view', (req, res) => {
    // Obtener la ID de la URL
    const id = req.query.id;
    const user = req.session.user;

    let sqlQuery = `SELECT 
    t.id as team_id,
    u.nickname, 
    t.team_name,
    t.description,
    pb.*,
    CONCAT('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/', pb.id_pokemon, '.png') AS pokemon_photo
FROM 
    team t
    INNER JOIN pokemon_build pb ON 
    t.id_Pokemon1_build = pb.id OR 
    t.id_Pokemon2_build = pb.id OR 
    t.id_Pokemon3_build = pb.id OR 
    t.id_Pokemon4_build = pb.id OR 
    t.id_Pokemon5_build = pb.id OR 
    t.id_Pokemon6_build = pb.id
    inner join user_info u on
   	t.id_user = u.id;`;

    
    connection.query(sqlQuery, (err, results) => {
        let team_description;
        results.forEach(function(dato){
            if(dato.team_id == id) {
                team_description = dato.description;
            }});
        let team_name;
        results.forEach(function(dato){
            if(dato.team_id == id) {
                team_name = dato.team_name;
            }});
        let nickname;
        results.forEach(function(dato){
        if(dato.team_id == id) {
            nickname = dato.nickname;
        }});
        if (err) {
            console.error('Error al realizar la consulta:', err);
            res.status(500).send('Error interno del servidor');
        } 
        if (req.session.loggedin) {
            res.render('view-screen', { datos: results, id: id, nickname: nickname, team_name: team_name, team_description: team_description, user: user});
        } else {
            res.render('login', {
                alert: true,
                alertTitle: "Error",
                alertMessage:"Tienes que iniciar sesión para poder acceder",
                alertIcon:'error',
                showConfirmButton: false,
                timer:3500,
                ruta: 'login'
            })};
    });
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
