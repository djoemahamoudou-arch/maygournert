const express = require('express');
const app = express();  






//J'importe le pilote Mysql2 utilisé intorroger la bdd Mysql 
const mysql2 = require("mysql2");

// J'importe le piloteur express-myconnection
const myConnection = require('express-myconnection');




// Je configure les éléments attendus pour me connecter à Mysql

const optionConnectionBaseDeDonnees = {
    host:"localhost",
    user:"root",
    password:"Rachid@0607",
    database:"maygourmet",
    port:3306
};

// On va utiliser Middleware pour ce connecter sur la BDD_MSQL
//"pool" est la strategie de connection à la BDD Mysql
app.use(myConnection(mysql2,optionConnectionBaseDeDonnees, "pool"));












// Je précise que les vues sont dans le dossier views
app.set('views','./views');


app.set('view engine', 'ejs')




// j'ai dit appJS pour qu'il va sur le dossier public.

app.use(express.static('public'));










/*app.use((req, res, next) =>{
    console.log("je suis un middleware dans le serveur ! rachid");
    next();
    

});*/

/*app.get('/api/rachid',(req,res,)=>{
    const rachid2=[
        {
            nom:"manga",
            prenom :"orange"
        }
    ];
    res.status(200).json(rachid2);
});*/






app.get('/api/accueil', (req, res) => {
    console.log("Je passe dans /api/accueil");
    res.render('accueil');
});














app.get('/api/equipe', (req, res) => {
    console.log("Je passe dans /api/equipe");
    res.render('equipe');
});















app.get('/api/plat', (req, res) => {
    console.log("Je passe dans /api/plat");
    res.send("<p>Je passe dans api/plat</p>");
});










module.exports = app;