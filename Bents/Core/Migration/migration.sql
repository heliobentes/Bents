SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `bents`
--
CREATE DATABASE IF NOT EXISTS `bents`
  DEFAULT CHARACTER SET utf8
  COLLATE utf8_general_ci;
USE `bents`;

-- --------------------------------------------------------

--
-- Table structure for table `Permission`
--

DROP TABLE IF EXISTS `Permission`;
CREATE TABLE `Permission` (
  `idPermission` INT(11) NOT NULL,
  `idUser`       INT(11)     DEFAULT NULL,
  `controller`   VARCHAR(45) DEFAULT NULL,
  `action`       VARCHAR(45) DEFAULT NULL
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

--
-- RELATIONS FOR TABLE `Permission`:
--   `idUser`
--       `User` -> `idUser`
--

-- --------------------------------------------------------

--
-- Table structure for table `Role`
--

DROP TABLE IF EXISTS `Role`;
CREATE TABLE `Role` (
  `idRole` INT(11)     NOT NULL,
  `role`   VARCHAR(20) NOT NULL
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

--
-- RELATIONS FOR TABLE `Role`:
--

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `idUser`    INT(11)                   NOT NULL,
  `login`     VARCHAR(50)               NOT NULL,
  `pwHash`    VARCHAR(40)
              CHARACTER SET latin1
              COLLATE latin1_general_cs NOT NULL,
  `pwSalt`    VARCHAR(20)
              CHARACTER SET latin1
              COLLATE latin1_general_cs NOT NULL,
  `createdAt` TIMESTAMP                 NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `idRole`    INT(11)                            DEFAULT NULL
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

--
-- RELATIONS FOR TABLE `User`:
--   `idRole`
--       `Role` -> `idRole`
--

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Permission`
--
ALTER TABLE `Permission`
  ADD PRIMARY KEY (`idPermission`),
  ADD KEY `fk_Permission_User_idx` (`idUser`);

--
-- Indexes for table `Role`
--
ALTER TABLE `Role`
  ADD PRIMARY KEY (`idRole`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`idUser`),
  ADD KEY `fk_User_Role1_idx` (`idRole`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Permission`
--
ALTER TABLE `Permission`
  MODIFY `idPermission` INT(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 3;
--
-- AUTO_INCREMENT for table `Role`
--
ALTER TABLE `Role`
  MODIFY `idRole` INT(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 3;
--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `idUser` INT(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 2;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Permission`
--
ALTER TABLE `Permission`
  ADD CONSTRAINT `fk_Permission_User` FOREIGN KEY (`idUser`) REFERENCES `User` (`idUser`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

--
-- Constraints for table `User`
--
ALTER TABLE `User`
  ADD CONSTRAINT `fk_User_Role1` FOREIGN KEY (`idRole`) REFERENCES `Role` (`idRole`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
