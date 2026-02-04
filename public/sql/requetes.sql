-- Créer une table

CREATE TABLE equipe(
id INT PRIMARY KEY NOT NULL  AUTO_INCREMENT,
nom VARCHAR(155)NOT NULL,
prenom VARCHAR(155) NOT NULL ,
email VARCHAR(100),
telephone VARCHAR(100) NOT NULL,
poste VARCHAR(80) NOT NULL,
adress_postale VARCHAR(250) NOT NULL ,--VARCHAR (c'est un string).
presentation VARCHAR(355)NOT NULL ,
date_recrutement DATE 

);

-- Ajouter la table

INSERT INTO equipe (nom , prenom , email , telephone , poste ,adress_postale  , presentation ,date_recrutement) VALUES ('said','Fatima','shijzzc@gmail.com','026955847' ,'Gérant', '4 Rue de la Mosquée 97600 Mamoudzou', 'Passionée de cuisine traditionnelle','2015-02-01'),
('combo', 'ali','ssheieuc@gmail.com','0269778454', 'cuisinier','4 Rue de la Mosquée 97600 Mamoudzou', 'passionée pour le métier de cuisine','2020-01-02');







-- J'ai créer la table plat

/*CREATE TABLE plat2(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom VARCHAR(122)NOT NULL,
    prix DECIMAL (7)NOT NULL,
    quantite INT NOT NULL,
    ingrediente TEXT NOT NULL,
    faitmaison BOOLEAN NOT NULL   
    
);

INSERT INTO plat2 (nom,prix,quantite,ingrediente,faitmaison) VALUES ('pilao','10','1','riz,oignon,tomate',TRUE);*/


CREATE TABLE plat(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom VARCHAR(122)NOT NULL,
    prix DECIMAL (7.1)NOT NULL,
    quantite INT(100)NOT NULL,
    ingrediente TEXT(130)NOT NULL,
    faitmaison BOOLEAN NOT NULL   
    
);

INSERT INTO plat2 (nom,prix,quantite,ingrediente,faitmaison) VALUES ('pilao','10','1','riz,oignon,tomate',TRUE);







-- J'ai créer la table fournisseur

CREATE TABLE fournisseur(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom VARCHAR(130)NOT NULL,
    produit VARCHAR(130)NOT NULL,
    prix DECIMAL(4.1)NOT NULL,
    quantite INT(200)NOT NULL, 
    origine VARCHAR(300)NOT NULL,
    typee TEXT(200)NOT NULL
);


INSERT INTO fournisseur (nom, produit, prix, quantite, origine, typee)
VALUES
('douka b', 'oignon', '100', '50', 'madagascar', 'bio'),
('said', 'poulet', '200', '100', 'mayotte', 'halal'),
('patrique', 'tomate', '70', '80', 'italie', 'bio'),
('yotan', 'poisson', '100', '80', 'chine', 'bio'),
('kevin', 'carotte', '50', '30', 'france', 'bio');

