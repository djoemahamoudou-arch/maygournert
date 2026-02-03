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

INSERT INTO equipe (nom , prenom , email , telephone , poste ,adress_postale  , presentation ,date_recrutement)

VALUES ('said','Fatima','shijzzc@gmail.com','026955847' ,'Gérant', '4 Rue de la Mosquée 97600 Mamoudzou', 'Passionée de cuisine traditionnelle','2015-02-01'),
('combo', 'ali','ssheieuc@gmail.com','0269778454', 'cuisinier','4 Rue de la Mosquée 97600 Mamoudzou', 'passionée pour le métier de cuisine','2020-01-02');


