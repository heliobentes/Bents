-- MySQL dump 10.13  Distrib 5.7.20, for Linux (x86_64)
--
-- Host: localhost    Database: reaws
-- ------------------------------------------------------
-- Server version	5.7.20-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ActionsLog`
--

DROP TABLE IF EXISTS `ActionsLog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ActionsLog` (
  `idSystemLog` int(11) NOT NULL AUTO_INCREMENT,
  `User_idUser` int(11) NOT NULL,
  `action` varchar(200) DEFAULT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idSystemLog`),
  KEY `fk_ActionsLog_User1_idx` (`User_idUser`),
  CONSTRAINT `fk_ActionsLog_User1` FOREIGN KEY (`User_idUser`) REFERENCES `User` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ActionsLog`
--

LOCK TABLES `ActionsLog` WRITE;
/*!40000 ALTER TABLE `ActionsLog` DISABLE KEYS */;
/*!40000 ALTER TABLE `ActionsLog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Address`
--

DROP TABLE IF EXISTS `Address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Address` (
  `idAddress` int(11) NOT NULL AUTO_INCREMENT,
  `line1` varchar(300) DEFAULT NULL,
  `line2` varchar(300) DEFAULT NULL,
  `idCity` int(11) NOT NULL,
  `unitNumber` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idAddress`),
  KEY `fk_Address_City1_idx` (`idCity`),
  CONSTRAINT `fk_Address_City1` FOREIGN KEY (`idCity`) REFERENCES `City` (`idCity`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Address`
--

LOCK TABLES `Address` WRITE;
/*!40000 ALTER TABLE `Address` DISABLE KEYS */;
/*!40000 ALTER TABLE `Address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Appointment`
--

DROP TABLE IF EXISTS `Appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Appointment` (
  `idAppointment` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `description` longtext,
  `dateBegin` datetime DEFAULT NULL,
  `idUser` int(11) NOT NULL,
  `idAddress` int(11) NOT NULL,
  `dateEnd` datetime DEFAULT NULL,
  `reminder30m` tinyint(4) DEFAULT NULL,
  `reminder1h` tinyint(4) DEFAULT NULL,
  `reminder2h` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`idAppointment`),
  KEY `fk_Appointment_User1_idx` (`idUser`),
  KEY `fk_Appointment_Address1_idx` (`idAddress`),
  CONSTRAINT `fk_Appointment_Address1` FOREIGN KEY (`idAddress`) REFERENCES `Address` (`idAddress`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Appointment_User1` FOREIGN KEY (`idUser`) REFERENCES `User` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Appointment`
--

LOCK TABLES `Appointment` WRITE;
/*!40000 ALTER TABLE `Appointment` DISABLE KEYS */;
/*!40000 ALTER TABLE `Appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `City`
--

DROP TABLE IF EXISTS `City`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `City` (
  `idCity` int(11) NOT NULL AUTO_INCREMENT,
  `idProvince` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idCity`),
  KEY `fk_City_Province1_idx` (`idProvince`),
  CONSTRAINT `fk_City_Province1` FOREIGN KEY (`idProvince`) REFERENCES `Province` (`idProvince`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `City`
--

LOCK TABLES `City` WRITE;
/*!40000 ALTER TABLE `City` DISABLE KEYS */;
/*!40000 ALTER TABLE `City` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Country`
--

DROP TABLE IF EXISTS `Country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Country` (
  `idCountry` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(120) DEFAULT NULL,
  `code` varchar(3) DEFAULT NULL,
  `phoneCode` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCountry`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Country`
--

LOCK TABLES `Country` WRITE;
/*!40000 ALTER TABLE `Country` DISABLE KEYS */;
/*!40000 ALTER TABLE `Country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Customer`
--

DROP TABLE IF EXISTS `Customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Customer` (
  `idCustomer` int(11) NOT NULL AUTO_INCREMENT,
  `idRealEstate` int(11) NOT NULL,
  `idAddress` int(11) NOT NULL,
  `firstName` varchar(120) DEFAULT NULL,
  `lastname` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `feeling` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCustomer`),
  KEY `fk_Customer_RealEstate1_idx` (`idRealEstate`),
  KEY `fk_Customer_Address1_idx` (`idAddress`),
  CONSTRAINT `fk_Customer_Address1` FOREIGN KEY (`idAddress`) REFERENCES `Address` (`idAddress`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Customer`
--

LOCK TABLES `Customer` WRITE;
/*!40000 ALTER TABLE `Customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `Customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Dealing`
--

DROP TABLE IF EXISTS `Dealing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Dealing` (
  `idDealing` int(11) NOT NULL AUTO_INCREMENT,
  `idCustomer` int(11) NOT NULL,
  `idProperty` int(11) NOT NULL,
  `idRealEstate` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idDealing`),
  KEY `fk_Dealing_Customer1_idx` (`idCustomer`),
  KEY `fk_Dealing_Property1_idx` (`idProperty`),
  KEY `fk_Dealing_RealEstate1_idx` (`idRealEstate`),
  CONSTRAINT `fk_Dealing_Customer1` FOREIGN KEY (`idCustomer`) REFERENCES `Customer` (`idCustomer`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Dealing_Property1` FOREIGN KEY (`idProperty`) REFERENCES `Property` (`idProperty`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Dealing`
--

LOCK TABLES `Dealing` WRITE;
/*!40000 ALTER TABLE `Dealing` DISABLE KEYS */;
/*!40000 ALTER TABLE `Dealing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DealingStep`
--

DROP TABLE IF EXISTS `DealingStep`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DealingStep` (
  `idDealingStep` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `idDealing` int(11) NOT NULL,
  `idStep` int(11) NOT NULL,
  PRIMARY KEY (`idDealingStep`),
  KEY `fk_DealingStep_Dealing1_idx` (`idDealing`),
  KEY `fk_DealingStep_Step1_idx` (`idStep`),
  CONSTRAINT `fk_DealingStep_Dealing1` FOREIGN KEY (`idDealing`) REFERENCES `Dealing` (`idDealing`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_DealingStep_Step1` FOREIGN KEY (`idStep`) REFERENCES `Step` (`idStep`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DealingStep`
--

LOCK TABLES `DealingStep` WRITE;
/*!40000 ALTER TABLE `DealingStep` DISABLE KEYS */;
/*!40000 ALTER TABLE `DealingStep` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Footer`
--

DROP TABLE IF EXISTS `Footer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Footer` (
  `idFooter` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idFooter`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Footer`
--

LOCK TABLES `Footer` WRITE;
/*!40000 ALTER TABLE `Footer` DISABLE KEYS */;
/*!40000 ALTER TABLE `Footer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Header`
--

DROP TABLE IF EXISTS `Header`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Header` (
  `idHeader` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idHeader`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Header`
--

LOCK TABLES `Header` WRITE;
/*!40000 ALTER TABLE `Header` DISABLE KEYS */;
/*!40000 ALTER TABLE `Header` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Images`
--

DROP TABLE IF EXISTS `Images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Images` (
  `idImages` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(500) DEFAULT NULL,
  `isPrincipal` tinyint(4) DEFAULT NULL,
  `label` varchar(200) DEFAULT NULL,
  `idProperty` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idImages`),
  KEY `fk_Images_Property1_idx` (`idProperty`),
  CONSTRAINT `fk_Images_Property1` FOREIGN KEY (`idProperty`) REFERENCES `Property` (`idProperty`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Images`
--

LOCK TABLES `Images` WRITE;
/*!40000 ALTER TABLE `Images` DISABLE KEYS */;
/*!40000 ALTER TABLE `Images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Laundry`
--

DROP TABLE IF EXISTS `Laundry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Laundry` (
  `idLaundry` int(11) NOT NULL AUTO_INCREMENT,
  `laundryType` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`idLaundry`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Laundry`
--

LOCK TABLES `Laundry` WRITE;
/*!40000 ALTER TABLE `Laundry` DISABLE KEYS */;
/*!40000 ALTER TABLE `Laundry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Lead`
--

DROP TABLE IF EXISTS `Lead`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Lead` (
  `idLead` int(11) NOT NULL AUTO_INCREMENT,
  `idCustomer` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `customerName` varchar(200) DEFAULT NULL,
  `customerEmail` varchar(200) DEFAULT NULL,
  `message` longtext,
  `idRealEstate` int(11) NOT NULL,
  PRIMARY KEY (`idLead`),
  KEY `fk_Lead_Customer1_idx` (`idCustomer`),
  KEY `fk_Lead_RealEstate1_idx` (`idRealEstate`),
  CONSTRAINT `fk_Lead_Customer1` FOREIGN KEY (`idCustomer`) REFERENCES `Customer` (`idCustomer`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Lead`
--

LOCK TABLES `Lead` WRITE;
/*!40000 ALTER TABLE `Lead` DISABLE KEYS */;
/*!40000 ALTER TABLE `Lead` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Parking`
--

DROP TABLE IF EXISTS `Parking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Parking` (
  `idParking` int(11) NOT NULL AUTO_INCREMENT,
  `parkingType` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`idParking`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Parking`
--

LOCK TABLES `Parking` WRITE;
/*!40000 ALTER TABLE `Parking` DISABLE KEYS */;
/*!40000 ALTER TABLE `Parking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Permission`
--

DROP TABLE IF EXISTS `Permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Permission` (
  `idPermission` int(11) NOT NULL AUTO_INCREMENT,
  `controller` varchar(45) DEFAULT NULL,
  `action` varchar(45) DEFAULT NULL,
  `idUser` int(11) NOT NULL,
  PRIMARY KEY (`idPermission`),
  KEY `fk_Permission_User1_idx` (`idUser`),
  CONSTRAINT `fk_Permission_User1` FOREIGN KEY (`idUser`) REFERENCES `User` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Permission`
--

LOCK TABLES `Permission` WRITE;
/*!40000 ALTER TABLE `Permission` DISABLE KEYS */;
/*!40000 ALTER TABLE `Permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Profile`
--

DROP TABLE IF EXISTS `Profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Profile` (
  `idProfile` int(11) NOT NULL AUTO_INCREMENT,
  `picture` varchar(300) DEFAULT NULL,
  `aboutMe` text,
  `phoneNumber` varchar(45) DEFAULT NULL,
  `idUser` int(11) NOT NULL,
  PRIMARY KEY (`idProfile`),
  KEY `fk_Profile_User1_idx` (`idUser`),
  CONSTRAINT `fk_Profile_User1` FOREIGN KEY (`idUser`) REFERENCES `User` (`idUser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Profile`
--

LOCK TABLES `Profile` WRITE;
/*!40000 ALTER TABLE `Profile` DISABLE KEYS */;
/*!40000 ALTER TABLE `Profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Property`
--

DROP TABLE IF EXISTS `Property`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Property` (
  `idProperty` int(11) NOT NULL AUTO_INCREMENT,
  `idRealEstate` int(11) NOT NULL,
  `idAddress` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `idProfile` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `bedrooms` int(11) DEFAULT NULL,
  `bathrooms` int(11) DEFAULT NULL,
  `area` decimal(10,2) DEFAULT NULL,
  `furnished` tinyint(4) DEFAULT NULL,
  `idAvailability` int(11) NOT NULL,
  `petFriendly` tinyint(4) DEFAULT NULL,
  `idType` int(11) NOT NULL,
  `idParking` int(11) NOT NULL,
  `idLaundry` int(11) NOT NULL,
  `mlsNumber` varchar(45) DEFAULT NULL,
  `isSmoking` tinyint(4) DEFAULT NULL,
  `availability` datetime DEFAULT NULL,
  `fireplace` tinyint(4) DEFAULT NULL,
  `pool` tinyint(4) DEFAULT NULL,
  `garage` tinyint(4) DEFAULT NULL,
  `waterfront` tinyint(4) DEFAULT NULL,
  `luxury` tinyint(4) DEFAULT NULL,
  `openHouse` tinyint(4) DEFAULT NULL,
  `negotiation` int(11) DEFAULT NULL,
  PRIMARY KEY (`idProperty`),
  KEY `fk_Property_RealEstate_idx` (`idRealEstate`),
  KEY `fk_Property_Address1_idx` (`idAddress`),
  KEY `fk_Property_Profile1_idx` (`idProfile`),
  KEY `fk_Property_Type1_idx` (`idType`),
  KEY `fk_Property_Parking1_idx` (`idParking`),
  KEY `fk_Property_Laundry1_idx` (`idLaundry`),
  CONSTRAINT `fk_Property_Address1` FOREIGN KEY (`idAddress`) REFERENCES `Address` (`idAddress`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Property_Laundry1` FOREIGN KEY (`idLaundry`) REFERENCES `Laundry` (`idLaundry`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Property_Parking1` FOREIGN KEY (`idParking`) REFERENCES `Parking` (`idParking`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Property_Type1` FOREIGN KEY (`idType`) REFERENCES `Type` (`idType`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Property`
--

LOCK TABLES `Property` WRITE;
/*!40000 ALTER TABLE `Property` DISABLE KEYS */;
/*!40000 ALTER TABLE `Property` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PropertyScore`
--

DROP TABLE IF EXISTS `PropertyScore`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PropertyScore` (
  `idPropertyScore` int(11) NOT NULL AUTO_INCREMENT,
  `idProperty` int(11) NOT NULL,
  `idScore` int(11) NOT NULL,
  `score` int(11) DEFAULT '0',
  PRIMARY KEY (`idPropertyScore`),
  KEY `fk_Property_has_Score_Score1_idx` (`idScore`),
  KEY `fk_Property_has_Score_Property1_idx` (`idProperty`),
  CONSTRAINT `fk_Property_has_Score_Property1` FOREIGN KEY (`idProperty`) REFERENCES `Property` (`idProperty`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Property_has_Score_Score1` FOREIGN KEY (`idScore`) REFERENCES `Score` (`idScore`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PropertyScore`
--

LOCK TABLES `PropertyScore` WRITE;
/*!40000 ALTER TABLE `PropertyScore` DISABLE KEYS */;
/*!40000 ALTER TABLE `PropertyScore` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Province`
--

DROP TABLE IF EXISTS `Province`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Province` (
  `idProvince` int(11) NOT NULL AUTO_INCREMENT,
  `idCountry` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `code` varchar(3) DEFAULT NULL,
  PRIMARY KEY (`idProvince`),
  KEY `fk_Province_Country1_idx` (`idCountry`),
  CONSTRAINT `fk_Province_Country1` FOREIGN KEY (`idCountry`) REFERENCES `Country` (`idCountry`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Province`
--

LOCK TABLES `Province` WRITE;
/*!40000 ALTER TABLE `Province` DISABLE KEYS */;
/*!40000 ALTER TABLE `Province` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RealEstate`
--

DROP TABLE IF EXISTS `RealEstate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `RealEstate` (
  `idRealEstate` int(11) NOT NULL AUTO_INCREMENT,
  `idAddress` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAtl` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `phone` varchar(45) DEFAULT NULL,
  `mobilePhone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idRealEstate`),
  KEY `fk_RealEstate_Address1_idx` (`idAddress`),
  CONSTRAINT `fk_RealEstate_Address1` FOREIGN KEY (`idAddress`) REFERENCES `Address` (`idAddress`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RealEstate`
--

LOCK TABLES `RealEstate` WRITE;
/*!40000 ALTER TABLE `RealEstate` DISABLE KEYS */;
/*!40000 ALTER TABLE `RealEstate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Role`
--

DROP TABLE IF EXISTS `Role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Role` (
  `idRole` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(20) NOT NULL,
  PRIMARY KEY (`idRole`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Role`
--

LOCK TABLES `Role` WRITE;
/*!40000 ALTER TABLE `Role` DISABLE KEYS */;
/*!40000 ALTER TABLE `Role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Score`
--

DROP TABLE IF EXISTS `Score`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Score` (
  `idScore` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idScore`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Score`
--

LOCK TABLES `Score` WRITE;
/*!40000 ALTER TABLE `Score` DISABLE KEYS */;
/*!40000 ALTER TABLE `Score` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SearchBox`
--

DROP TABLE IF EXISTS `SearchBox`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SearchBox` (
  `idSearchBox` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idSearchBox`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SearchBox`
--

LOCK TABLES `SearchBox` WRITE;
/*!40000 ALTER TABLE `SearchBox` DISABLE KEYS */;
/*!40000 ALTER TABLE `SearchBox` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Step`
--

DROP TABLE IF EXISTS `Step`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Step` (
  `idStep` int(11) NOT NULL AUTO_INCREMENT,
  `step` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idStep`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Step`
--

LOCK TABLES `Step` WRITE;
/*!40000 ALTER TABLE `Step` DISABLE KEYS */;
/*!40000 ALTER TABLE `Step` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Type`
--

DROP TABLE IF EXISTS `Type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Type` (
  `idType` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(80) DEFAULT NULL,
  `language` varchar(5) DEFAULT 'en-US',
  PRIMARY KEY (`idType`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Type`
--

LOCK TABLES `Type` WRITE;
/*!40000 ALTER TABLE `Type` DISABLE KEYS */;
INSERT INTO `Type` VALUES (1,'House','en-US'),(2,'Apartment','en-US'),(3,'Condo','en-US'),(4,'Townhouse','en-US'),(5,'Duplex','en-US'),(6,'Basement','en-US'),(7,'Other','en-US'),(8,'Triplex','en-US'),(9,'Farm','en-US'),(10,'Land','en-US'),(11,'Casa','pt-BR'),(12,'Apartamento','pt-BR'),(13,'Cobertura','pt-BR'),(14,'Loja','pt-BR'),(15,'Sala','pt-BR'),(16,'Fazenda','pt-BR');
/*!40000 ALTER TABLE `Type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UnitDetails`
--

DROP TABLE IF EXISTS `UnitDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UnitDetails` (
  `idUnitDetails` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idUnitDetails`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UnitDetails`
--

LOCK TABLES `UnitDetails` WRITE;
/*!40000 ALTER TABLE `UnitDetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `UnitDetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(50) NOT NULL,
  `pwHash` varchar(40) CHARACTER SET latin1 NOT NULL,
  `pwSalt` varchar(20) CHARACTER SET latin1 NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `idRole` int(11) DEFAULT NULL,
  `idRealEstate` int(11) NOT NULL,
  PRIMARY KEY (`idUser`),
  KEY `fk_User_Role1_idx` (`idRole`),
  KEY `fk_User_RealEstate1_idx` (`idRealEstate`),
  CONSTRAINT `fk_User_RealEstate1` FOREIGN KEY (`idRealEstate`) REFERENCES `RealEstate` (`idRealEstate`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_Role1` FOREIGN KEY (`idRole`) REFERENCES `Role` (`idRole`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Website`
--

DROP TABLE IF EXISTS `Website`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Website` (
  `idWebsite` int(11) NOT NULL AUTO_INCREMENT,
  `idRealEstate` int(11) NOT NULL,
  `url` varchar(300) DEFAULT NULL,
  `subdomain` varchar(300) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `logo` varchar(300) DEFAULT NULL,
  `color1` varchar(8) DEFAULT NULL,
  `color2` varchar(8) DEFAULT NULL,
  `idHeader` int(11) NOT NULL,
  `idFooter` int(11) NOT NULL,
  `idSearchBox` int(11) NOT NULL,
  `idUnitDetails` int(11) NOT NULL,
  PRIMARY KEY (`idWebsite`),
  KEY `fk_Website_RealEstate1_idx` (`idRealEstate`),
  KEY `fk_Website_Header1_idx` (`idHeader`),
  KEY `fk_Website_Footer1_idx` (`idFooter`),
  KEY `fk_Website_SearchBox1_idx` (`idSearchBox`),
  KEY `fk_Website_UnitDetails1_idx` (`idUnitDetails`),
  CONSTRAINT `fk_Website_Footer1` FOREIGN KEY (`idFooter`) REFERENCES `Footer` (`idFooter`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Website_Header1` FOREIGN KEY (`idHeader`) REFERENCES `Header` (`idHeader`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Website_SearchBox1` FOREIGN KEY (`idSearchBox`) REFERENCES `SearchBox` (`idSearchBox`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Website_UnitDetails1` FOREIGN KEY (`idUnitDetails`) REFERENCES `UnitDetails` (`idUnitDetails`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Website`
--

LOCK TABLES `Website` WRITE;
/*!40000 ALTER TABLE `Website` DISABLE KEYS */;
/*!40000 ALTER TABLE `Website` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-01-07 20:26:07
