-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 13, 2023 at 07:14 PM
-- Server version: 8.0.31-0ubuntu0.20.04.2
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
-- Table structure for table `registeruser`
--

CREATE TABLE `registeruser` (
  `id` int NOT NULL,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `mobile` varchar(13) NOT NULL,
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `role` enum('user','admin') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `registeruser`
--

INSERT INTO `registeruser` (`id`, `fname`, `lname`, `email`, `mobile`, `password`, `role`) VALUES
(1, 'Snigdh', 'Gupta', 'snigdhguptacs19@acropolis.in', '9713552898', 'Snigdh@123', 'admin'),
(10, 'sachin', 'asdfgh', 'asdfg@asdf.com', '4678321678', 'c44a471bd78cc6c2fea3', 'user'),
(11, 'qwe', 'wqe', 'qwer@qwer.com', '0987654321', 'qwerqwer', 'user'),
(13, 'gupta', 'gupta', 'gupta@gmail.com', '0988900980', '0f38cc12c77c9f1e95ecca326031d6e4', 'user'),
(14, 'gunjan', 'qwer', 'gunjan@gmail.com', '7984653210', 'd8aed486c3533d257b1ee93c9907c43f', 'user'),
(15, 'bhupe', 'qwe', 'bhupe@gmail.com', '4659781345', '821113e5ddcd946ddad6d5aae449bb98', 'user'),
(16, 'prajwal', 'qwe', 'prajwal@gmail.com', '7925398988', '967454173c7637d071a8bd30224407e3', 'user'),
(17, 'mustafa', 'qwe', 'mustabha@gmail.com', '6782678567', 'e5de81655caaea1616f2d5afe6cb3d23', 'user'),
(18, 'iopio', 'iopiop', 'oiipoiop@opip.com', '9805942989', '02e8ab18b79d66271fc19f4ebc6e5ca2', 'user'),
(20, 'rqweuy', 'ruiyuiwter', 'qrwey@uwyriu.com', '2578378587', 'b427ebd39c845eb5417b7f7aaf1f9724', 'user'),
(21, 'mustfa', 'qwer', 'mustafa@live.com', '7824356278', 'poiuypoiuy', 'admin'),
(22, 'Snigdh', 'Gupta', 'guptasnigdh0009@gmail.com', '8092358569', '1234567890', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `registeruser`
--
ALTER TABLE `registeruser`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mobile` (`mobile`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `registeruser`
--
ALTER TABLE `registeruser`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
