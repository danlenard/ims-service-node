-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ims_phone
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `subscribers`
--

DROP TABLE IF EXISTS `subscribers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscribers` (
  `phone_number` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `domain` varchar(255) NOT NULL,
  `status` enum('ACTIVE','INACTIVE','SUSPENDED','DELETED') NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`phone_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscribers`
--

LOCK TABLES `subscribers` WRITE;
/*!40000 ALTER TABLE `subscribers` DISABLE KEYS */;
INSERT INTO `subscribers` VALUES ('1249937297','Haskell_Hane-Waters','$2b$10$O9v0L3OaHsAo5.iRW8mMxOpcJk2TFgMSTqtUNA.T1if/eDxoQJH6a','ims.mnc724.mcc000.3gppnetwork.org','DELETED',NULL),('1332977876','Kody85','$2b$10$g5Lj2ytJ3qkf.oO9HV3j6uvzJpwmb7f0czPqIhHLcYWgFt032uiX2','ims.mnc061.mcc139.3gppnetwork.org','SUSPENDED',NULL),('1607648623','Sim_Predovic58','$2b$10$Y41JnALqII6CswTI61fE8.JMJDsDWID0eqvMIDngC.L7BeMHdszCG','ims.mnc289.mcc217.3gppnetwork.org','DELETED',NULL),('2094033623','Lorenzo_Boyle14','$2b$10$dwrC6f.9F1xWTavplHrd4ukHbC.xC7hrFq89OQmIO.Yndqb26lDhO','ims.mnc574.mcc333.3gppnetwork.org','DELETED',NULL),('5255968955','Elvis.Senger91','$2b$10$YKnTJ44nqIEGI8QBqutVqOv8PM2kqtki4Ab.U.OVcaYX4QJtoYISK','ims.mnc397.mcc323.3gppnetwork.org','DELETED',NULL),('5730953681','Magnus.Barton','$2b$10$rPPExHWVLHB1Xavw/i4Nq.MBCbbXwCxgspaiYsA4lm2kc6tGgbhDm','ims.mnc786.mcc411.3gppnetwork.org','INACTIVE',NULL),('5906438191','Trinity19','$2b$10$uOAzRSxAz73T3uRdLQI8nukOfb1Y2tyBhng5pfC6XRhEe.e9r9tWe','ims.mnc487.mcc079.3gppnetwork.org','SUSPENDED',NULL),('6717555683','Zakary95','$2b$10$eEQ7OkIkSxxsqrFcL4Vya.v88xRqNIXBUhQgTTi6vX6Nv5e7X/i9.','ims.mnc640.mcc013.3gppnetwork.org','ACTIVE',NULL),('9421740622','Helmer.Hettinger61','$2b$10$CRnG6DdFY3D78MHvgY4FvOS9GhS.R6fAIVIEcl92g5ZGlxp/Pe/H2','ims.mnc607.mcc257.3gppnetwork.org','ACTIVE',NULL),('9940784975','Marge80','$2b$10$tUp7oeRkFG0HJK2TR2zEpupSzxKR.Q0l82X8PvVU.qZZpxCBGAN1.','ims.mnc275.mcc394.3gppnetwork.org','INACTIVE',NULL);
/*!40000 ALTER TABLE `subscribers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-24 15:30:56
