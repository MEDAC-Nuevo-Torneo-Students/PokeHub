-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: pokehub
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (4,1,1,'equipo chulo'),(5,1,1,'equipo muy chulo'),(6,1,1,'equipo muy chulo 3'),(7,2,3,'Vaya equipo pocho'),(8,3,3,'Me gusta este equipo'),(9,3,1,'Mola el tercer Pokemon'),(10,3,2,'Pero tio');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pokemon_build`
--

DROP TABLE IF EXISTS `pokemon_build`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pokemon_build` (
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pokemon_build`
--

LOCK TABLES `pokemon_build` WRITE;
/*!40000 ALTER TABLE `pokemon_build` DISABLE KEYS */;
INSERT INTO `pokemon_build` VALUES (1,260,'male',3,793,16,127,89,8,182,31,31,31,31,31,31,4,252,0,0,0,252),(2,279,'female',2,262,5,503,89,366,182,31,31,31,31,31,31,252,0,4,0,0,252),(3,598,'male',1,583,12,73,334,442,182,31,31,31,31,31,0,0,4,252,0,252,0),(4,796,'unknown',1,274,5,87,521,412,605,31,0,31,31,31,31,4,0,0,252,0,252),(5,10021,'unknown',1,247,9,89,157,12,182,31,31,31,31,31,31,4,252,0,0,0,252),(6,237,'female',1,252,7,252,370,270,197,31,31,31,31,31,31,4,252,0,0,0,252),(7,144,'unknown',3,274,3,59,58,573,329,31,0,31,31,31,31,252,0,44,196,4,12),(8,10104,'female',3,246,5,59,585,694,270,31,1,31,31,31,31,84,0,132,84,4,204),(9,10230,'male',1,197,11,394,157,457,245,31,31,31,31,31,31,52,212,4,0,4,236),(10,10273,'female',1,2106,16,904,532,266,596,31,31,31,20,31,31,236,12,52,0,4,204),(11,645,'male',3,247,5,414,188,164,182,31,0,31,31,31,31,84,0,52,124,4,252),(12,1021,'male',1,683,3,527,434,909,555,31,20,31,31,31,31,244,0,60,100,20,84);
/*!40000 ALTER TABLE `pokemon_build` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_team` int NOT NULL,
  `upload_date` datetime NOT NULL,
  `likes` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_team` (`id_team`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`id_team`) REFERENCES `team` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,2,'2024-04-05 00:00:00',25),(2,3,'2024-04-22 10:34:53',86),(3,4,'2024-01-12 12:17:26',12);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `team_name` varchar(20) NOT NULL,
  `id_Pokemon1_build` int NOT NULL,
  `id_Pokemon2_build` int NOT NULL,
  `id_Pokemon3_build` int NOT NULL,
  `id_Pokemon4_build` int NOT NULL,
  `id_Pokemon5_build` int NOT NULL,
  `id_Pokemon6_build` int NOT NULL,
  `description` varchar(250) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_Pokemon1_build` (`id_Pokemon1_build`),
  KEY `id_Pokemon2_build` (`id_Pokemon2_build`),
  KEY `id_Pokemon3_build` (`id_Pokemon3_build`),
  KEY `id_Pokemon4_build` (`id_Pokemon4_build`),
  KEY `id_Pokemon5_build` (`id_Pokemon5_build`),
  KEY `id_Pokemon6_build` (`id_Pokemon6_build`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `team_ibfk_1` FOREIGN KEY (`id_Pokemon1_build`) REFERENCES `pokemon_build` (`id`),
  CONSTRAINT `team_ibfk_2` FOREIGN KEY (`id_Pokemon2_build`) REFERENCES `pokemon_build` (`id`),
  CONSTRAINT `team_ibfk_3` FOREIGN KEY (`id_Pokemon3_build`) REFERENCES `pokemon_build` (`id`),
  CONSTRAINT `team_ibfk_4` FOREIGN KEY (`id_Pokemon4_build`) REFERENCES `pokemon_build` (`id`),
  CONSTRAINT `team_ibfk_5` FOREIGN KEY (`id_Pokemon5_build`) REFERENCES `pokemon_build` (`id`),
  CONSTRAINT `team_ibfk_6` FOREIGN KEY (`id_Pokemon6_build`) REFERENCES `pokemon_build` (`id`),
  CONSTRAINT `team_ibfk_7` FOREIGN KEY (`id_user`) REFERENCES `user_info` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team`
--

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;
INSERT INTO `team` VALUES (2,1,'M-Swampert Rain Team',1,2,3,4,5,6,'Todo equipo que abuse del clima contará con un pokémon cuya habilidad sea poner ese clima en el campo al salir a combatir.'),(3,2,'Utretch Winnig Team',7,8,9,10,11,12,'I don\'t really understand how or why, but somehow I managed to go 8-1 (16-3 in individual games) in D1 and ultimately finish in top 32 in EUIC last weekend with this abomination of a team. A little background story provided in the replies :D'),(4,3,'Sevilla Looser Team',4,3,7,2,10,12,'Lol vaya mierda de equipo Jaime podrias habertelo currado un poco más pedazo de paquete');
/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_info` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nickname` varchar(20) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `user_password` char(60) NOT NULL,
  `description` varchar(250) NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
INSERT INTO `user_info` VALUES (1,'Jjrajjr','jjrajjr@gmail.com','contrasenaSegura0','Jugador competitivo bla bla bla...',1),(2,'Albertito','albertito@gmail.com','contrasenasegura1','aksjdbsadonafsjn',1),(3,'Reax','reax@gmail.com','contrasenasegura2','dohsfnskhfdns',1);
/*!40000 ALTER TABLE `user_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'pokehub'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-27 19:08:18
