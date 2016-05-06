-- phpMyAdmin SQL Dump
-- version 4.2.12deb2+deb8u1build0.15.04.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 01, 2016 at 12:02 PM
-- Server version: 10.0.20-MariaDB-0ubuntu0.15.04.1
-- PHP Version: 5.6.4-4ubuntu6.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `thesis_bartle`
--

-- --------------------------------------------------------

--
-- Table structure for table `Results`
--

CREATE TABLE IF NOT EXISTS `Results` (
`ID` int(11) NOT NULL,
  `bartle_type` varchar(255) DEFAULT NULL,
  `gamified` int(1) DEFAULT NULL,
  `interactions` varchar(255) DEFAULT NULL,
  `interactions_correct` varchar(255) DEFAULT NULL,
  `killer_quotient` varchar(255) DEFAULT NULL,
  `achiever_quotient` varchar(255) DEFAULT NULL,
  `explorer_quotient` varchar(255) DEFAULT NULL,
  `socializer_quotient` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=154 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Results`
--

INSERT INTO `Results` (`ID`, `bartle_type`, `gamified`, `interactions`, `interactions_correct`, `killer_quotient`, `achiever_quotient`, `explorer_quotient`, `socializer_quotient`, `age`, `gender`, `email`, `timestamp`) VALUES
(1, 'killer', 0, '20', '7', '35', '30', '15', '17', '18', 'male', 'mentor@palokaj.co', '2016-04-24 11:08:20'),
(2, 'explorer', 0, '158', '153', '28', '20', '28', '23', '18-25', 'female', 'roxanecaudron@gmail.com', '2016-04-24 11:19:57'),
(3, 'explorer', 1, '205', '201', '5', '33', '35', '25', '18-25', 'female', '', '2016-04-24 11:23:47'),
(4, 'socializer', 0, '159', '159', '10', '15', '35', '38', '25-35', 'male', 'jan.steinke@gmail.com', '2016-04-24 11:24:52'),
(5, 'explorer', 0, '389', '385', '23', '25', '30', '20', '25-35', 'male', '', '2016-04-24 11:27:16'),
(6, 'socializer', 1, '63', '62', '20', '7', '35', '35', '18-25', 'male', 'mnitschke93@gmail.com', '2016-04-24 11:28:56'),
(7, 'socializer', 0, '27', '27', '12', '28', '23', '35', '18-25', 'male', 'mail@daveystruijk.com', '2016-04-24 11:31:41'),
(8, 'explorer', 1, '66', '65', '15', '20', '41', '23', '18-25', 'female', '', '2016-04-24 11:33:44'),
(9, 'explorer', 0, '46', '46', '33', '15', '35', '15', '18-25', 'female', '', '2016-04-24 11:42:16'),
(10, 'explorer', 0, '112', '110', '28', '12', '46', '12', '18-25', 'female', '', '2016-04-24 11:44:36'),
(11, 'socializer', 1, '30', '30', '25', '25', '15', '33', '18-25', 'male', '', '2016-04-24 11:45:15'),
(12, 'explorer', 0, '49', '49', '30', '15', '33', '20', '18-25', 'female', 'ceciliacorsini94@gmail.com', '2016-04-24 11:45:16'),
(13, 'achiever', 0, '48', '46', '15', '38', '30', '15', '25-35', 'female', 'berries.blast@yahoo.com', '2016-04-24 11:47:16'),
(14, 'explorer', 0, '46', '45', '12', '25', '35', '25', '18-25', 'male', '', '2016-04-24 11:49:08'),
(15, 'socializer', 0, '337', '336', '7', '25', '33', '33', '25-35', 'male', 'jonathan_tichon@yahoo.com', '2016-04-24 11:49:15'),
(16, 'socializer', 1, '115', '60', '17', '25', '28', '28', '18', 'male', '', '2016-04-24 11:50:09'),
(17, 'socializer', 1, '66', '64', '15', '7', '33', '43', '18-25', 'female', 'verenasilcher@web.de', '2016-04-24 11:51:32'),
(18, 'explorer', 0, '39', '38', '23', '20', '35', '20', '18-25', 'male', 'sami.shivan@yahoo.com', '2016-04-24 11:52:39'),
(19, 'explorer', 1, '38', '37', '10', '28', '35', '25', '18', 'male', 'busydoge@gmail.com', '2016-04-24 11:53:04'),
(20, 'achiever', NULL, NULL, NULL, '23', '28', '23', '25', '18-25', 'male', 'superblybonkers@gmail.com', '2016-04-24 11:55:42'),
(21, 'socializer', 1, '95', '90', '15', '17', '28', '38', '18-25', 'male', 'casaroglu@gmail.com', '2016-04-24 11:56:43'),
(22, 'explorer', 1, '49', '47', '25', '30', '33', '10', '25-35', 'male', '', '2016-04-24 11:57:24'),
(23, 'socializer', 0, '29', '29', '15', '15', '30', '38', '18-25', 'male', 'ae.tencate@gmail.com', '2016-04-24 11:58:18'),
(24, 'explorer', 0, '99', '99', '25', '10', '33', '30', '18', 'male', '', '2016-04-24 12:00:10'),
(25, 'explorer', 1, '41', '39', '25', '20', '35', '17', '18', 'female', 'qwertzasdfgh1@outlook.de', '2016-04-24 12:00:24'),
(26, 'killer', 1, '77', '77', '38', '20', '23', '17', '18', 'male', '', '2016-04-24 12:06:40'),
(27, 'explorer', 1, '82', '80', '28', '12', '30', '28', '18-25', 'male', 'chuckmerry87@gmail.com', '2016-04-24 12:06:40'),
(28, 'explorer', 0, '31', '31', '7', '25', '46', '20', '18-25', 'male', 'sabarchmage@gmail.com', '2016-04-24 12:08:23'),
(29, 'explorer', 1, '28', '27', '20', '20', '30', '28', '18', 'male', '', '2016-04-24 12:12:31'),
(30, 'socializer', 1, '103', '101', '15', '20', '23', '41', '18-25', 'female', 'cla.condello@gmail.com', '2016-04-24 12:16:33'),
(31, 'explorer', 0, '78', '72', '15', '25', '30', '28', '18-25', 'female', 'liligm10@hotmail.com', '2016-04-24 12:19:30'),
(32, 'achiever', NULL, NULL, NULL, '25', '33', '30', '10', '18-25', 'male', 'agkangas@vmps.org', '2016-04-24 12:20:23'),
(33, 'achiever', 0, '61', '60', '28', '33', '28', '10', '18-25', 'male', '', '2016-04-24 12:22:40'),
(34, 'explorer', 0, '83', '83', '10', '15', '41', '33', '18-25', 'female', '', '2016-04-24 12:30:11'),
(35, 'explorer', 0, '48', '47', '12', '17', '35', '33', '18-25', 'male', 'henryskewes@googlemail.com', '2016-04-24 12:31:40'),
(36, 'socializer', 0, '67', '66', '15', '17', '33', '33', '18-25', 'female', 'emiliefrijns@hotmail.com', '2016-04-24 12:35:34'),
(37, 'explorer', 1, '54', '53', '23', '17', '33', '25', '18-25', 'female', 'anniekroodink@gmail.com', '2016-04-24 12:35:50'),
(38, 'socializer', 1, '56', '55', '10', '12', '35', '41', '18-25', 'female', 'olivialamers@t-online.de', '2016-04-24 12:36:21'),
(39, 'explorer', 1, '16', '16', '23', '25', '35', '15', '18', 'male', '', '2016-04-24 12:36:29'),
(40, 'killer', 1, '40', '39', '41', '28', '10', '20', '18', 'male', 'nxt.joker@yahoo.com', '2016-04-24 12:36:43'),
(41, 'explorer', 0, '7', '7', '20', '20', '30', '28', '18', 'male', 'lwolivan@gmail.com', '2016-04-24 12:37:59'),
(42, 'socializer', 1, '105', '104', '28', '23', '20', '28', '18-25', 'male', '', '2016-04-24 12:42:15'),
(43, 'killer', 1, '68', '63', '35', '25', '20', '17', '18', 'male', '', '2016-04-24 12:42:41'),
(44, 'killer', 0, '39', '38', '33', '12', '23', '30', '18-25', 'male', 'bjornvanbeek@gmail.com', '2016-04-24 12:48:02'),
(45, 'socializer', 1, '107', '106', '20', '10', '33', '35', '18-25', 'female', 'ophelie.hue@maastrichtuniversity.nl', '2016-04-24 12:48:54'),
(46, 'killer', 1, '47', '47', '41', '38', '15', '5', '25-35', 'male', 'jgramse@gmail.com', '2016-04-24 12:53:08'),
(47, 'explorer', 0, '56', '54', '20', '12', '46', '20', '25-35', 'male', 'jonathan.nicholas83@gmail.com', '2016-04-24 12:55:08'),
(48, 'killer', 1, '69', '68', '30', '20', '20', '28', '18-25', 'male', 'e.schafer@student.maastrichtuniversity.nl', '2016-04-24 12:56:20'),
(49, 'explorer', 0, '50', '49', '12', '20', '38', '28', '18-25', 'female', '', '2016-04-24 12:58:29'),
(50, 'achiever', 1, '186', '181', '20', '33', '28', '17', '18-25', 'male', '', '2016-04-24 13:01:02'),
(51, 'explorer', 1, '43', '41', '20', '20', '35', '23', '18-25', 'male', '', '2016-04-24 13:05:42'),
(52, 'explorer', 0, '63', '63', '5', '25', '41', '28', '25-35', 'female', '', '2016-04-24 13:08:08'),
(53, 'socializer', 0, '93', '92', '17', '25', '28', '28', '18-25', 'male', '', '2016-04-24 13:09:16'),
(54, 'explorer', 1, '26', '26', '23', '28', '33', '15', '18', 'male', 'arno.baes100@gmail.com', '2016-04-24 13:10:42'),
(55, 'socializer', 0, '24', '23', '20', '12', '30', '35', '18-25', 'female', '', '2016-04-24 13:25:26'),
(56, 'explorer', 1, '103', '101', '5', '17', '41', '35', '25-35', 'other', 'grmirth@gmail.com', '2016-04-24 13:41:06'),
(57, 'explorer', 0, '56', '55', '10', '23', '35', '30', '18-25', 'male', 'igorbrunelimoreira@gmail.com', '2016-04-24 13:45:51'),
(58, 'explorer', 1, '98', '95', '23', '25', '33', '17', '25-35', 'male', 'bramgrolleman@gmail.con', '2016-04-24 13:47:27'),
(59, 'explorer', 0, '104', '95', '23', '20', '33', '23', '18-25', 'female', '', '2016-04-24 13:56:37'),
(60, 'explorer', 0, '84', '83', '28', '20', '28', '23', '18', 'female', 'elly.nazarov@gmail.com', '2016-04-24 14:04:24'),
(61, 'killer', 0, '59', '59', '35', '10', '28', '25', '18-25', 'male', 'deboer.rorik@gmail.com', '2016-04-24 14:24:31'),
(62, 'explorer', 0, '52', '51', '5', '15', '43', '35', '18-25', 'male', 'wer8023@yahoo.de', '2016-04-24 14:28:12'),
(63, 'explorer', 1, '68', '68', '17', '25', '35', '20', '18-25', 'female', '', '2016-04-24 14:31:53'),
(64, 'achiever', 1, '33', '32', '28', '33', '10', '28', '18-25', 'male', '', '2016-04-24 14:32:03'),
(65, 'socializer', 1, '114', '107', '17', '12', '30', '38', '18-25', 'female', '', '2016-04-24 14:41:27'),
(66, 'explorer', 1, '286', '283', '10', '23', '43', '23', '18-25', 'female', 'emsandorf@gmail.com', '2016-04-24 14:55:43'),
(67, 'killer', NULL, NULL, NULL, '38', '23', '28', '10', '18-25', 'male', 'josh824@vt.edu', '2016-04-24 14:58:21'),
(68, 'killer', 0, '78', '76', '41', '20', '20', '17', '25-35', 'male', 'timo.landman@gmail.com', '2016-04-24 14:59:48'),
(69, 'explorer', 0, '20', '20', '17', '15', '43', '23', '25-35', 'female', 'pmhovers@gmail.com', '2016-04-24 15:10:48'),
(70, 'socializer', 1, '188', '186', '15', '25', '28', '30', '18-25', 'female', 'mma.dehaan@gmail.com', '2016-04-24 15:27:48'),
(71, 'explorer', 1, '105', '101', '20', '20', '30', '28', '25-35', 'male', 'Ramiro.oosting@gmail.com', '2016-04-24 15:30:01'),
(72, 'explorer', 0, '1', '1', '20', '17', '35', '25', '18-25', 'male', 'pacemlee@gmail.com', '2016-04-24 15:38:34'),
(73, 'killer', 0, '67', '66', '33', '23', '20', '23', '18-25', 'male', 'isa.mendez93@gmail.com', '2016-04-24 15:44:23'),
(74, 'socializer', 0, '47', '47', '12', '20', '28', '38', '25-35', 'male', 'nualmasi@mail.com', '2016-04-24 16:07:33'),
(75, 'socializer', 0, '47', '46', '15', '15', '30', '38', '18-25', 'female', '', '2016-04-24 16:21:23'),
(76, 'socializer', 1, '168', '156', '23', '17', '25', '33', '18', 'female', '', '2016-04-24 16:26:41'),
(77, 'explorer', 1, '45', '42', '17', '23', '38', '20', '18-25', 'female', '', '2016-04-24 16:51:01'),
(78, 'killer', 1, '1352', '1228', '38', '25', '15', '20', '18-25', 'female', 'nise55555@hotmail.com', '2016-04-24 17:16:10'),
(79, 'achiever', 1, '63', '62', '17', '33', '28', '20', '25-35', 'female', 'artnerd365@gmail.com', '2016-04-24 17:41:01'),
(80, 'explorer', 1, '74', '71', '12', '33', '41', '12', '18-25', 'female', 'hello.nelle@hotmail.com', '2016-04-24 18:00:53'),
(81, 'explorer', 1, '86', '83', '20', '28', '30', '20', '25-35', 'male', 'vondrook4@gmail.com', '2016-04-24 18:13:22'),
(82, 'socializer', 1, '44', '43', '10', '30', '25', '33', '18', 'male', '', '2016-04-24 18:47:12'),
(83, 'killer', 1, '51', '50', '28', '25', '23', '23', '18-25', 'female', '', '2016-04-24 18:49:55'),
(84, 'explorer', 1, '5', '5', '20', '17', '33', '28', '18-25', 'female', '', '2016-04-24 18:51:52'),
(85, 'explorer', 0, '9', '9', '25', '10', '33', '30', '18-25', 'female', 'van.vic.tom@gmail.com', '2016-04-24 18:53:06'),
(86, 'explorer', 0, '50', '48', '28', '25', '30', '15', '18-25', 'female', '', '2016-04-24 19:04:11'),
(87, 'explorer', 1, '52', '52', '15', '25', '38', '20', '18-25', 'female', 'linn@von-engelbrechten.de', '2016-04-24 19:12:05'),
(88, 'explorer', 0, '19', '18', '30', '10', '35', '23', '18-25', 'male', '', '2016-04-24 19:18:21'),
(89, 'explorer', 0, '39', '39', '23', '20', '38', '17', '25-35', 'female', '', '2016-04-24 20:16:47'),
(90, 'achiever', 1, '39', '37', '20', '30', '23', '25', '18-25', 'male', '', '2016-04-24 22:34:25'),
(91, 'explorer', 1, '59', '57', '7', '17', '43', '30', '18-25', 'female', '', '2016-04-25 01:48:56'),
(92, 'explorer', 0, '40', '40', '20', '30', '33', '15', '18-25', 'male', '', '2016-04-25 04:41:55'),
(93, 'explorer', 0, '79', '79', '20', '28', '33', '17', '18-25', 'male', '', '2016-04-25 07:59:51'),
(94, 'achiever', 0, '33', '33', '17', '38', '28', '15', '18-25', 'male', '', '2016-04-25 08:16:33'),
(95, 'killer', 1, '43', '37', '30', '20', '25', '23', '18-25', 'male', 'tim.v.dijke@hotmail.com', '2016-04-25 08:22:43'),
(96, 'killer', 0, '141', '141', '38', '17', '7', '35', '18-25', 'male', 'thijsdeblaere@hotmail.com', '2016-04-25 08:38:53'),
(97, 'socializer', 1, '93', '92', '10', '28', '30', '30', '18-25', 'female', '', '2016-04-25 08:44:15'),
(98, 'killer', 1, '93', '89', '35', '30', '17', '15', '18-25', 'male', 'daniel.oderkerk@hotmail.com', '2016-04-25 09:16:20'),
(99, 'explorer', 1, '82', '82', '20', '17', '35', '25', '25-35', 'male', '', '2016-04-25 09:31:48'),
(100, 'killer', 1, '74', '62', '35', '17', '20', '25', '18-25', 'male', 'simplygero@gmail.com', '2016-04-25 09:45:11'),
(101, 'explorer', 0, '95', '93', '10', '28', '38', '23', '18-25', 'female', '', '2016-04-25 10:47:14'),
(102, 'socializer', 1, '76', '73', '17', '23', '28', '30', '25-35', 'male', 'frankvdwaals@yahoo.com', '2016-04-25 11:12:23'),
(103, 'socializer', 0, '99', '99', '15', '23', '30', '30', '18-25', 'female', 'mylene.zambon@gmail.com', '2016-04-25 12:31:05'),
(104, 'explorer', 0, '60', '30', '25', '25', '28', '20', '18-25', 'male', '', '2016-04-25 15:46:44'),
(105, 'explorer', 1, '35', '30', '25', '25', '28', '20', '18-25', 'male', 'aventadornikolay@gmail.com', '2016-04-25 16:23:04'),
(106, 'killer', 1, '211', '201', '33', '15', '20', '30', '', '', '', '2016-04-25 19:04:18'),
(107, 'socializer', 1, '260', '251', '28', '25', '12', '33', '25-35', 'male', 'elwin.stevelink@gmail.com', '2016-04-25 19:23:28'),
(108, 'explorer', 1, '86', '61', '30', '23', '30', '15', '18-25', 'male', 'roaraam@gmail.com', '2016-04-25 21:14:50'),
(109, 'killer', 1, '73', '72', '48', '23', '28', '0', '18', 'female', 'nithanielkumar@gmail.com', '2016-04-25 23:31:10'),
(110, 'explorer', 0, '57', '57', '10', '25', '33', '30', '18-25', 'female', 'janneke.leeuwerik@gmail.com', '2016-04-26 11:51:49'),
(111, 'achiever', 1, '54', '54', '28', '30', '25', '15', '18-25', 'male', 'tombannink@gmail.com', '2016-04-26 12:12:44'),
(112, 'socializer', 1, '56', '56', '20', '20', '20', '38', '18-25', 'male', '', '2016-04-26 12:35:16'),
(113, 'explorer', 1, '3', '2', '25', '15', '35', '23', '18', 'male', '', '2016-04-26 13:10:32'),
(114, 'explorer', 1, '19', '19', '23', '15', '35', '25', '18', 'male', 'arturosalinas.90@gmail.com', '2016-04-26 13:14:14'),
(115, 'socializer', 1, '128', '123', '15', '28', '28', '28', '35-50', 'male', '', '2016-04-26 13:44:43'),
(116, 'explorer', 1, '27', '27', '12', '25', '38', '23', '25-35', 'male', '', '2016-04-26 14:17:51'),
(117, 'explorer', 0, '31', '29', '17', '12', '41', '28', '18-25', 'female', 'anne.dirkson@hotmail.com', '2016-04-26 16:16:05'),
(118, 'achiever', 1, '213', '209', '23', '35', '28', '12', '25-35', 'male', 'verm.tim@gmail.com', '2016-04-26 17:12:45'),
(119, 'explorer', 0, '45', '45', '15', '17', '35', '30', '18-25', 'male', '', '2016-04-26 17:35:31'),
(120, 'socializer', 0, '169', '166', '12', '17', '33', '35', '18-25', 'female', 'celine.gobel@hec.edu', '2016-04-26 18:34:20'),
(121, 'achiever', 0, '39', '37', '25', '28', '25', '20', '18-25', 'male', 'Vigreuxbenjamin@yahoo.fr', '2016-04-26 19:58:52'),
(122, 'explorer', 1, '52', '52', '23', '28', '38', '10', '35-50', 'male', 'julianbergheim@gmail.com', '2016-04-26 20:05:34'),
(123, 'socializer', 0, '103', '102', '17', '20', '25', '35', '25-35', 'male', 'youri1986@msn.com', '2016-04-27 08:58:13'),
(124, 'explorer', 0, '149', '149', '15', '20', '35', '28', '18-25', 'female', '', '2016-04-27 12:02:25'),
(125, 'explorer', 1, '85', '58', '23', '10', '35', '30', '18-25', 'male', 'casparkaiser@gmail.com', '2016-04-27 21:12:31'),
(126, 'explorer', 1, '102', '101', '17', '17', '33', '30', '25-35', 'male', 'dieterjd.vanacker@gmail.com', '2016-04-27 23:26:56'),
(127, 'killer', 0, '82', '81', '30', '17', '25', '25', '25-35', 'male', '', '2016-04-28 07:43:57'),
(128, 'achiever', 1, '102', '96', '12', '33', '30', '23', '25-35', 'female', 'rinkernet@hotmail.com', '2016-04-28 08:33:13'),
(129, 'explorer', 0, '25', '24', '15', '20', '38', '25', '18-25', 'male', 'fontainescott92@gmail.com', '2016-04-28 08:45:34'),
(130, 'explorer', 0, '32', '32', '15', '28', '33', '23', '18-25', 'female', '', '2016-04-28 09:36:29'),
(131, 'achiever', 1, '48', '46', '30', '33', '15', '20', '18-25', 'female', 'madeline.vidak@gmail.com', '2016-04-28 10:07:41'),
(132, 'socializer', 0, '42', '37', '28', '20', '23', '28', '18-25', 'male', 'jaymoustachesingh@gmail.com', '2016-04-28 10:12:12'),
(133, 'explorer', 1, '149', '103', '17', '25', '35', '20', '18-25', 'female', 'gisele@philiole.fr', '2016-04-28 12:51:29'),
(134, 'explorer', 0, '74', '73', '15', '23', '33', '28', '18-25', 'female', 'anouk-17@live.nl', '2016-04-28 13:30:22'),
(135, 'explorer', 0, '84', '78', '7', '25', '38', '28', '18-25', 'male', '', '2016-04-29 06:40:18'),
(136, 'explorer', 1, '42', '42', '5', '33', '41', '20', '18-25', 'female', '', '2016-04-29 06:52:57'),
(137, 'killer', 0, '53', '51', '35', '25', '17', '20', '25-35', 'male', 'rick.barneveld@gmail.com', '2016-04-29 07:09:39'),
(138, 'socializer', 1, '6', '6', '12', '20', '33', '33', '18-25', 'female', 'eefvandongen@gmail.com', '2016-04-29 09:44:13'),
(139, 'explorer', 1, '179', '175', '17', '12', '43', '25', '25-35', 'male', '', '2016-04-29 19:17:32'),
(140, 'socializer', 1, '101', '101', '10', '20', '30', '38', '18-25', 'male', 'angerer.arno@gmail.com', '2016-05-01 07:48:11'),
(141, 'explorer', 1, '91', '89', '23', '20', '35', '20', '18-25', 'female', '', '2016-05-01 07:51:15'),
(142, 'achiever', 1, '100', '100', '10', '35', '25', '28', '18-25', 'male', 'Arnold.a.kiss@gmail.com', '2016-05-01 08:32:56'),
(143, 'killer', 0, '107', '105', '46', '25', '10', '17', '18-25', 'male', 'keithsen_chusny@hotmail.com', '2016-05-01 09:08:30'),
(144, 'achiever', 0, '37', '37', '15', '33', '28', '23', '18-25', 'female', 'melaniekoster@live.nl', '2016-05-01 09:15:23'),
(145, 'socializer', 0, '30', '30', '25', '23', '23', '28', '18-25', 'male', '', '2016-05-01 09:29:39'),
(146, 'explorer', 1, '73', '73', '15', '20', '38', '25', '35-50', 'female', '', '2016-05-01 10:32:33'),
(147, 'explorer', 1, '43', '43', '5', '25', '41', '28', '25-35', 'female', '', '2016-05-01 10:52:03'),
(148, 'achiever', 0, '111', '109', '15', '30', '28', '25', '18-25', 'female', '', '2016-05-01 11:08:43'),
(149, 'socializer', 1, '53', '50', '12', '23', '30', '33', '18-25', 'female', '', '2016-05-01 13:00:42'),
(150, 'explorer', 1, '55', '53', '10', '20', '46', '23', '18-25', 'female', '', '2016-05-01 13:04:00'),
(151, 'killer', 0, '73', '59', '28', '23', '25', '23', '18', 'male', '', '2016-05-01 13:28:48'),
(152, 'explorer', 1, '205', '203', '15', '15', '46', '23', '18', 'female', '', '2016-05-01 14:01:55'),
(153, 'killer', 1, '78', '76', '30', '20', '20', '28', '18-25', 'male', 'basbrinkhof93@gmail.com', '2016-05-01 14:15:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Results`
--
ALTER TABLE `Results`
 ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Results`
--
ALTER TABLE `Results`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=154;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;