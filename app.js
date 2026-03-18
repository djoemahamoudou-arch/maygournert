const express = require('express');
const app = express();  






//J'importe le pilote Mysql2 utilisé intorroger la bdd Mysql 
const mysql2 = require("mysql2");



// J'importe le piloteur express-myconnection
const myConnection = require('express-myconnection');
const connection = require('express-myconnection');



// Permet de récuperer les information saisie.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());





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







// Ici j'ai importer mon table equipe qui se trouve sur MSQL pour l'afficher sur gitbash






app.get('/api/equipe', (req, res) => {
    console.log("Je passe dans /api/equipe");
   req.getConnection((erreur,connection)=> {
    if(erreur) {
         console.log(erreur)
    } else{
        connection.query("SELECT * FROM equipe",[], (err,resultatEquipe) => {
          if(err){
            console.log("Erreur dans la requête SQL SELECT",err);
          } else{
            console.log("Mon equipe : ", resultatEquipe);
            res.render('equipe', { resultatEquipe });
          } 
        });
    }
   })
  

});

// C'est pour supprimer un api
app.delete('/api/equipe/:id', (req, res) => {
  const idMembreEquipe = req.params.id;
  const queryDelete = "DELETE FROM equipe WHERE id = ?";

  req.getConnection((erreur, connection) => {
    if (erreur) {
      console.log("Erreur suppression equipe :", erreur);
    } else {
      connection.query(queryDelete, [idMembreEquipe], (err, resultat) => {
        if (err) {
          console.log("erreur requete suppression : ", err);
        } else {
          console.log("Bravo! le membre est supprimé dans la tables equipe");

          res.status(200).json({ routeAccueil: '/api/accueil' });
        }
      });
    }
  });
});



// J'ajoute un fournisseur dans la table fournisseur .Pour cela, j'utilise la methode POST.
app.post('/api/fournisseur',(req,res)=>{
  console.log("corps de la requête: ",req.body);

  const nomfournisseur = req.body.firstname;
  const prenomFournisseur = req.body.lastname;
  const produitFournisseur= req.body.produit;
  const prixFournisseur = req.body.prix;
  const quantiteFournisseur= req.body.quantite;
  const origineFournisseur= req.body.origine;
  const typeFournisseur = req.body.typee;

  const requeteSql = "INSERT INTO fournisseur (nom, prenom,produit,prix,quantite,origine,typee) VALUES(?,?,?,?,?,?,?)";

  const ordreChamps = [ nomfournisseur,prenomFournisseur,produitFournisseur,prixFournisseur,quantiteFournisseur,origineFournisseur,typeFournisseur ];

  // Je me connecte a la base de donnees
  req.getConnection((erreur, connection) => {

    if(erreur) {
      console.log("Erreur de connexion à la BDD : ", erreur);
    }
    else {

      connection.query(requeteSql, ordreChamps, (err, nouveauFournisseur) => {

        if(err) {
          console.log("Erreur d'ajout fournisseur : ", err);
        }
        else {
          console.log("Bravo! Nouveau fournisseur ajouté.");
          res.redirect("/accueil");
        }

      });

    }

  });

});





app.get('/api/fournisseur', (req, res) => {
  console.log("Je passe dans /api/fournisseur",req.body);
  req.getConnection((erreur, connection) => {

    if (erreur) {
      console.log(erreur);

    } else {

      connection.query("SELECT * FROM fournisseur", [], (err, resultatFournisseur) => {

        if (err) {
          console.log("Erreur dans la requête SQL SELECT", err);

        } else {

          console.log("Mes fournisseurs :", resultatFournisseur);
          res.render('fournisseur', { resultatFournisseur });

        }

      });

    }

  });

});









app.get('/api/plat', (req, res) => {
    console.log("Je passe dans /api/plat");
   req.getConnection((erreur,connection)=> {
    if(erreur) {
         console.log(erreur)
    } else{
        connection.query("SELECT * FROM plat", (err,resultatPlat) => {
          if(err){
            console.log("Erreur dans la requête SQL SELECT",err);
          } else{
            console.log("Mon plat : ", resultatPlat);
            res.render('plat', { resultatPlat });
          } 
        });
    }
   })
});










module.exports = app;