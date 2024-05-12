drop database if exists pokehub;

CREATE DATABASE pokehub;

DROP TABLE IF EXISTS pokehub.user_info;

CREATE TABLE pokehub.user_info (
  `id` int NOT NULL AUTO_INCREMENT,
  `nickname` varchar(20) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `user_password` char(60) NOT NULL,
  `description` varchar(250) NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO pokehub.user_info VALUES (1,'Jjrajjr','jjrajjr@gmail.com','contrasenaSegura0','Jugador competitivo bla bla bla...',1),(2,'Albertito','albertito@gmail.com','contrasenasegura1','aksjdbsadonafsjn',1),(3,'Reax','reax@gmail.com','contrasenasegura2','dohsfnskhfdns',1),(4,'pablo','pablo@gmail.com','asd','',1),(5,'Juan','juan@gmail.com','juan','',1),(6,'Pablo','prm@gmail.com','contrasena','',1),(7,'pablo2','pablo2@gmail.com','asd','',1),(8,'miguel','miguel@gmail.com','asd','',1);

DROP TABLE IF EXISTS pokehub.team;

CREATE TABLE pokehub.team (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `team_name` varchar(20) NOT NULL,
  `description` varchar(250) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `team_ibfk_7` FOREIGN KEY (`id_user`) REFERENCES `user_info` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO pokehub.team VALUES (1,1,'Equipo de Prueba','ESTO ES UNA PRUEBA'),(2,4,'M_Swampert Rain Team','Todo equipo que abuse del clima contará con un pokémon cuya habilidad sea poner ese clima en el campo al salir a combatir.'),(3,2,'Utretch Winnig Team','I dont really understand how or why, but somehow I managed to go 8-1 (16-3 in individual games) in D1 and ultimately finish in top 32 in EUIC last weekend with this abomination of a team. A little background story provided in the replies :D'),(4,3,'Sevilla Winner Team','Lol vaya mierda de equipo Jaime podrias habertelo currado un poco más pedazo de paquete'),(5,5,'Prueba2','Todo equipo que abuse del clima contará con un pokémon cuya habilidad sea poner ese clima en el campo al salir a combatir.');


DROP TABLE IF EXISTS pokehub.post;

CREATE TABLE pokehub.post (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_team` int NOT NULL,
  `upload_date` datetime NOT NULL,
  `likes` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_team` (`id_team`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`id_team`) REFERENCES `team` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO pokehub.post VALUES (1,1,'2024-04-05 00:01:00',25),(2,2,'2024-04-22 10:34:53',86),(3,3,'2024-01-12 12:17:26',12),(4,4,'2024-01-05 12:17:26',20),(5,5,'2024-01-02 12:17:26',23);

DROP TABLE IF EXISTS pokehub.comment;

CREATE TABLE pokehub.comment (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_post` int NOT NULL,
  `id_user` int NOT NULL,
  `commment` varchar(250) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_post` (`id_post`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `post` (`id`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user_info` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO pokehub.comment VALUES (4,1,1,'equipo chulo'),(5,1,1,'equipo muy chulo'),(6,1,1,'equipo muy chulo 3'),(7,2,3,'Vaya equipo pocho'),(8,3,3,'Me gusta este equipo'),(9,3,1,'Mola el tercer Pokemon'),(10,3,2,'Pero tio');

DROP TABLE IF EXISTS pokehub.pokemon_build;

CREATE TABLE pokehub.pokemon_build (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_pokemon` int NOT NULL,
  `gender` varchar(10) NOT NULL,
  `id_ability` int NOT NULL,
  `id_item` int NOT NULL,
  `id_nature` int NOT NULL,
  `id_move_1` int NOT NULL,
  `id_move_2` int NOT NULL,
  `id_move_3` int NOT NULL,
  `id_move_4` int NOT NULL,
  `hp_ivs` int NOT NULL,
  `atk_ivs` int NOT NULL,
  `def_ivs` int NOT NULL,
  `spa_ivs` int NOT NULL,
  `spd_ivs` int NOT NULL,
  `spe_ivs` int NOT NULL,
  `hp_evs` int NOT NULL,
  `atk_evs` int NOT NULL,
  `def_evs` int NOT NULL,
  `spa_evs` int NOT NULL,
  `spd_evs` int NOT NULL,
  `spe_evs` int NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `pokemon_build_chk_1` CHECK ((`gender` in (_utf8mb4'Female',_utf8mb4'Male',_utf8mb4'Unknown'))),
  CONSTRAINT `pokemon_build_chk_10` CHECK (((`def_evs` >= 0) and (`def_evs` <= 252))),
  CONSTRAINT `pokemon_build_chk_11` CHECK (((`spa_evs` >= 0) and (`spa_evs` <= 252))),
  CONSTRAINT `pokemon_build_chk_12` CHECK (((`spd_evs` >= 0) and (`spd_evs` <= 252))),
  CONSTRAINT `pokemon_build_chk_13` CHECK (((`spe_evs` >= 0) and (`spe_evs` <= 252))),
  CONSTRAINT `pokemon_build_chk_2` CHECK (((`hp_ivs` >= 0) and (`hp_ivs` <= 31))),
  CONSTRAINT `pokemon_build_chk_3` CHECK (((`atk_ivs` >= 0) and (`atk_ivs` <= 31))),
  CONSTRAINT `pokemon_build_chk_4` CHECK (((`def_ivs` >= 0) and (`def_ivs` <= 31))),
  CONSTRAINT `pokemon_build_chk_5` CHECK (((`spa_ivs` >= 0) and (`spa_ivs` <= 31))),
  CONSTRAINT `pokemon_build_chk_6` CHECK (((`spd_ivs` >= 0) and (`spd_ivs` <= 31))),
  CONSTRAINT `pokemon_build_chk_7` CHECK (((`spe_ivs` >= 0) and (`spe_ivs` <= 31))),
  CONSTRAINT `pokemon_build_chk_8` CHECK (((`hp_evs` >= 0) and (`hp_evs` <= 252))),
  CONSTRAINT `pokemon_build_chk_9` CHECK (((`atk_evs` >= 0) and (`atk_evs` <= 252)))
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO pokehub.pokemon_build VALUES (1,10064,'male',33,793,16,127,89,8,182,31,31,31,31,31,31,4,252,0,0,0,252),(2,279,'female',2,262,5,503,542,366,182,31,31,31,31,31,31,252,0,4,0,0,252),(3,598,'male',160,583,12,73,334,442,182,31,31,31,31,31,0,0,4,252,0,252,0),(4,796,'unknown',224,274,5,87,521,412,605,31,0,31,31,31,31,4,0,0,252,0,252),(5,10021,'unknown',22,247,9,89,157,12,182,31,31,31,31,31,31,4,252,0,0,0,252),(6,237,'female',22,252,7,252,370,270,197,31,31,31,31,31,31,4,252,0,0,0,252),(7,144,'unknown',3,274,3,59,58,573,329,31,0,31,31,31,31,252,0,44,196,4,12),(8,10104,'female',3,246,5,59,585,694,270,31,1,31,31,31,31,84,0,132,84,4,204),(9,10230,'male',1,197,11,394,157,457,245,31,31,31,31,31,31,52,212,4,0,4,236),(10,10273,'female',1,2106,16,904,532,266,596,31,31,31,20,31,31,236,12,52,0,4,204),(11,645,'male',3,247,5,414,188,164,182,31,0,31,31,31,31,84,0,52,124,4,252),(12,1021,'male',1,683,3,527,434,909,555,31,20,31,31,31,31,244,0,60,100,20,84);

DROP TABLE IF EXISTS pokehub.team_ids;

CREATE TABLE pokehub.team_ids (
  `team_id` int NOT NULL,
  `pokemon_build_id_1` int NOT NULL,
  `pokemon_build_id_2` int NOT NULL,
  `pokemon_build_id_3` int NOT NULL,
  `pokemon_build_id_4` int NOT NULL,
  `pokemon_build_id_5` int NOT NULL,
  `pokemon_build_id_6` int NOT NULL,
  KEY `team_id` (`team_id`),
  KEY `pokemon_build_id_1` (`pokemon_build_id_1`),
  KEY `pokemon_build_id_2` (`pokemon_build_id_2`),
  KEY `pokemon_build_id_3` (`pokemon_build_id_3`),
  KEY `pokemon_build_id_4` (`pokemon_build_id_4`),
  KEY `pokemon_build_id_5` (`pokemon_build_id_5`),
  KEY `pokemon_build_id_6` (`pokemon_build_id_6`),
  CONSTRAINT `team_ids_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`),
  CONSTRAINT `team_ids_ibfk_2` FOREIGN KEY (`pokemon_build_id_1`) REFERENCES `pokemon_build` (`id`),
  CONSTRAINT `team_ids_ibfk_3` FOREIGN KEY (`pokemon_build_id_2`) REFERENCES `pokemon_build` (`id`),
  CONSTRAINT `team_ids_ibfk_4` FOREIGN KEY (`pokemon_build_id_3`) REFERENCES `pokemon_build` (`id`),
  CONSTRAINT `team_ids_ibfk_5` FOREIGN KEY (`pokemon_build_id_4`) REFERENCES `pokemon_build` (`id`),
  CONSTRAINT `team_ids_ibfk_6` FOREIGN KEY (`pokemon_build_id_5`) REFERENCES `pokemon_build` (`id`),
  CONSTRAINT `team_ids_ibfk_7` FOREIGN KEY (`pokemon_build_id_6`) REFERENCES `pokemon_build` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO pokehub.team_ids VALUES (1,5,7,2,3,9,1),(2,1,2,3,4,5,6),(3,7,8,9,10,11,12),(4,12,3,7,2,10,5),(5,6,8,4,1,9,3);