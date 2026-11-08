-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 08, 2019 at 09:43 AM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ams`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `job_id` int(11) NOT NULL,
  `cust_id` int(11) NOT NULL,
  `cust_name` varchar(25) NOT NULL,
  `job_desc` varchar(100) NOT NULL,
  `job_total` varchar(25) NOT NULL,
  `job_status` varchar(25) NOT NULL,
  `job_reg_time` varchar(30) NOT NULL,
  `user_id` int(11) NOT NULL,
  `serv_advisor_note` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `cust_id` int(11) NOT NULL,
  `cust_name` varchar(25) NOT NULL,
  `cust_mobile` varchar(25) NOT NULL,
  `cust_email` varchar(25) NOT NULL,
  `cust_address` varchar(50) NOT NULL,
  `cust_lga` varchar(20) NOT NULL,
  `cust_company` varchar(30) NOT NULL,
  `cust_mode` varchar(25) NOT NULL,
  `cust_reg_time` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `inspections`
--

CREATE TABLE `inspections` (
  `insp_id` int(11) NOT NULL,
  `cust_id` int(11) NOT NULL,
  `vec_id` int(11) NOT NULL,
  `tech_id` int(11) NOT NULL,
  `insp_lights` varchar(25) NOT NULL,
  `insp_glass` varchar(25) NOT NULL,
  `insp_wipers` varchar(25) NOT NULL,
  `insp_horn` varchar(25) NOT NULL,
  `insp_battery` varchar(25) NOT NULL,
  `insp_oil` varchar(25) NOT NULL,
  `insp_trans_fluid` varchar(25) NOT NULL,
  `insp_power_steering` varchar(25) NOT NULL,
  `insp_coolant` varchar(25) NOT NULL,
  `insp_air_filter` varchar(25) NOT NULL,
  `insp_cabin_filter` varchar(25) NOT NULL,
  `insp_belts` varchar(25) NOT NULL,
  `insp_brake_lines` varchar(25) NOT NULL,
  `insp_suspension` varchar(25) NOT NULL,
  `insp_driveline` varchar(25) NOT NULL,
  `insp_rear_fluid` varchar(25) NOT NULL,
  `insp_exhaust` varchar(25) NOT NULL,
  `insp_spare_tyre` varchar(25) NOT NULL,
  `insp_fire` varchar(25) NOT NULL,
  `insp_caution` varchar(25) NOT NULL,
  `insp_ac` varchar(25) NOT NULL,
  `insp_stereo` varchar(25) NOT NULL,
  `insp_chk_engine` varchar(25) NOT NULL,
  `insp_airbag` varchar(25) NOT NULL,
  `insp_abs` varchar(25) NOT NULL,
  `insp_vsc` varchar(25) NOT NULL,
  `insp_comments` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `inv_id` int(11) NOT NULL,
  `cust_id` int(11) NOT NULL,
  `vec_id` int(11) NOT NULL,
  `job_id` int(11) NOT NULL,
  `job_total` int(20) NOT NULL,
  `pay_id` int(11) NOT NULL,
  `pay_status` varchar(25) NOT NULL,
  `pay_time` varchar(30) NOT NULL,
  `user_id` int(11) NOT NULL,
  `inv_ref_code` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `job_id` int(11) NOT NULL,
  `cust_id` int(11) NOT NULL,
  `vec_id` int(11) NOT NULL,
  `inv_id` int(11) NOT NULL,
  `serv_id` int(11) NOT NULL,
  `serv_advisor_note` varchar(100) NOT NULL,
  `tech_id` int(11) NOT NULL,
  `job_status` varchar(25) NOT NULL,
  `job_reg_time` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `pay_id` int(11) NOT NULL,
  `cust_id` int(11) NOT NULL,
  `vec_id` int(11) NOT NULL,
  `job_total` int(25) NOT NULL,
  `pay_status` varchar(25) NOT NULL,
  `pay_time` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `serv_id` int(11) NOT NULL,
  `serv_name` varchar(25) NOT NULL,
  `serv_desc` varchar(30) NOT NULL,
  `serv_amount` int(20) NOT NULL,
  `serv_reg_time` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `technicians`
--

CREATE TABLE `technicians` (
  `tech_id` int(11) NOT NULL,
  `tech_name` varchar(25) NOT NULL,
  `tech_area` varchar(30) NOT NULL,
  `tech_start_time` int(11) NOT NULL,
  `tech_stop_time` int(11) NOT NULL,
  `tech_points` int(11) NOT NULL,
  `tech_reg_time` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(25) NOT NULL,
  `user_nick` varchar(25) NOT NULL,
  `user_password` varchar(25) NOT NULL,
  `user_level` varchar(25) NOT NULL,
  `user_role` varchar(25) NOT NULL,
  `user_reg_time` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `vehicles`
--

CREATE TABLE `vehicles` (
  `vec_id` int(11) NOT NULL,
  `cust_id` int(11) NOT NULL,
  `cust_name` varchar(25) NOT NULL,
  `vec_body` varchar(25) NOT NULL,
  `vec_year` int(10) NOT NULL,
  `vec_make` varchar(25) NOT NULL,
  `vec_model` varchar(25) NOT NULL,
  `vec_vin` varchar(17) NOT NULL,
  `vec_plate` varchar(10) NOT NULL,
  `vec_reg_time` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`job_id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`cust_id`);

--
-- Indexes for table `inspections`
--
ALTER TABLE `inspections`
  ADD PRIMARY KEY (`insp_id`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`inv_id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`pay_id`);

--
-- Indexes for table `technicians`
--
ALTER TABLE `technicians`
  ADD PRIMARY KEY (`tech_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`vec_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `cust_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inspections`
--
ALTER TABLE `inspections`
  MODIFY `insp_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `inv_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `pay_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `technicians`
--
ALTER TABLE `technicians`
  MODIFY `tech_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `vec_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
