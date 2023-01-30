-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 30, 2023 at 04:12 PM
-- Server version: 8.0.32-0ubuntu0.20.04.2
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Loan`
--

-- --------------------------------------------------------

--
-- Table structure for table `loanapplication`
--

CREATE TABLE `loanapplication` (
  `id` int NOT NULL,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `aadhar` bigint NOT NULL,
  `pan` varchar(20) NOT NULL,
  `profession` varchar(20) NOT NULL,
  `income` bigint NOT NULL,
  `loanAmt` bigint NOT NULL,
  `duration` int NOT NULL,
  `address1` varchar(100) NOT NULL,
  `address2` varchar(100) NOT NULL,
  `pincode` int NOT NULL,
  `place` varchar(30) NOT NULL,
  `country` varchar(30) NOT NULL,
  `mobile` varchar(13) NOT NULL,
  `status` enum('pending','approved','declined') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'pending',
  `remark` varchar(100) NOT NULL,
  `userid` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `loanapplication`
--

INSERT INTO `loanapplication` (`id`, `fname`, `lname`, `email`, `gender`, `aadhar`, `pan`, `profession`, `income`, `loanAmt`, `duration`, `address1`, `address2`, `pincode`, `place`, `country`, `mobile`, `status`, `remark`, `userid`) VALUES
(7, 'Snigdh', 'Gupta', 'sg@gmail.com', 'male', 789745877878, 'HJFB78HJD', 'Salaried', 100000, 10000, 50, 'D2-608 balaji', 'Vijaynagar', 452010, 'Indore', 'India', '9879879879', 'pending', '', '45');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `loanapplication`
--
ALTER TABLE `loanapplication`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `loanapplication`
--
ALTER TABLE `loanapplication`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
