-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Wrz 13, 2024 at 10:03 AM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dashboard`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `announcements`
--

CREATE TABLE `announcements` (
  `id` int(11) NOT NULL,
  `data` varchar(255) NOT NULL,
  `text` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `announcements`
--

INSERT INTO `announcements` (`id`, `data`, `text`, `createdAt`, `updatedAt`) VALUES
(2, '21.30.2024         sdasdasdasds', 'sdsdsdasdasd asd asd asd asdasdas dasd asds', '2024-09-08 16:14:07', '2024-09-12 22:09:25'),
(3, '21.30.2024', 'zebranie xdd daskljdaskd sadnaskjld', '2024-09-12 22:04:17', '2024-09-12 22:04:17');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `classrooms`
--

CREATE TABLE `classrooms` (
  `id` int(11) NOT NULL,
  `html` text NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classrooms`
--

INSERT INTO `classrooms` (`id`, `html`, `createdAt`, `updatedAt`, `title`) VALUES
(3, '<table border=\"1\" cellspacing=\"0\" cellpadding=\"4\" class=\"tabela\">\n<tbody><tr>\n<th>Nr</th>\n<th>Godz</th>\n<th>Poniedziałek</th>\n<th>Wtorek</th>\n<th>Środa</th>\n<th>Czwartek</th>\n<th>Piątek</th>\n</tr>\n<tr>\n<td class=\"nr\">1</td>\n<td class=\"g\"> 8:00- 8:45</td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\"><span class=\"p\">j.polski</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n5.html\" class=\"n\">EB</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s11.html\" class=\"s\">28</a></td>\n<td class=\"l\"><span class=\"p\">NTI</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n30.html\" class=\"n\">SZ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s6.html\" class=\"s\">17</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">OiZPS-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n11.html\" class=\"n\">GA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">18</a></span><br><span style=\"font-size:85%\"><span class=\"p\">2Zp pr ap in-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n14.html\" class=\"n\">TG</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s3.html\" class=\"s\">21</a></span></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">jęz.ang.zaw-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n20.html\" class=\"n\">PA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s16.html\" class=\"s\">16</a></span><br><span style=\"font-size:85%\"><span class=\"p\">j.angielski-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n9.html\" class=\"n\">JF</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s15.html\" class=\"s\">20</a></span></td>\n</tr>\n<tr>\n<td class=\"nr\">2</td>\n<td class=\"g\"> 8:50- 9:35</td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">jęz.ang.zaw-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n20.html\" class=\"n\">PA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s15.html\" class=\"s\">20</a></span><br><span style=\"font-size:85%\"><span class=\"p\">jęz.ang.zaw-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n31.html\" class=\"n\">SS</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s9.html\" class=\"s\">26</a></span></td>\n<td class=\"l\"><span class=\"p\">zaj. wych.</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n25.html\" class=\"n\">PP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s11.html\" class=\"s\">28</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">OiZPS-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n11.html\" class=\"n\">GA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">18</a></span><br><span style=\"font-size:85%\"><span class=\"p\">2Zp pr ap in-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n14.html\" class=\"n\">TG</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s3.html\" class=\"s\">21</a></span></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">j.angielski-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n20.html\" class=\"n\">PA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s16.html\" class=\"s\">16</a></span><br><span style=\"font-size:85%\"><span class=\"p\">j.angielski-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n9.html\" class=\"n\">JF</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s10.html\" class=\"s\">27</a></span></td>\n</tr>\n<tr>\n<td class=\"nr\">3</td>\n<td class=\"g\"> 9:40-10:25</td>\n<td class=\"l\"><span class=\"p\">r_matematyka</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n24.html\" class=\"n\">RP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s7.html\" class=\"s\">24</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">j.angielski-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n20.html\" class=\"n\">PA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s15.html\" class=\"s\">20</a></span><br><span style=\"font-size:85%\"><span class=\"p\">j.niemiecki-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n23.html\" class=\"n\">KP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s16.html\" class=\"s\">16</a></span></td>\n<td class=\"l\"><span class=\"p\">matematyka</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n24.html\" class=\"n\">RP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s7.html\" class=\"s\">24</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">2Zp POiNOPS-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n11.html\" class=\"n\">GA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">18</a></span><br><span style=\"font-size:85%\"><span class=\"p\">2Zp pr ap in-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n14.html\" class=\"n\">TG</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s3.html\" class=\"s\">21</a></span></td>\n<td class=\"l\"><span class=\"p\">religia</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n21.html\" class=\"n\">PŁ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s15.html\" class=\"s\">20</a></td>\n</tr>\n<tr>\n<td class=\"nr\">4</td>\n<td class=\"g\">10:40-11:25</td>\n<td class=\"l\"><span class=\"p\">r_matematyka</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n24.html\" class=\"n\">RP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s7.html\" class=\"s\">24</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">OiZPS-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n11.html\" class=\"n\">GA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">18</a></span><br><span style=\"font-size:85%\"><span class=\"p\">wf-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n28.html\" class=\"n\">JŚ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s8.html\" class=\"s\">25</a></span></td>\n<td class=\"l\"><span class=\"p\">matematyka</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n24.html\" class=\"n\">RP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s7.html\" class=\"s\">24</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">2Zp POiNOPS-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n11.html\" class=\"n\">GA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">18</a></span><br><span style=\"font-size:85%\"><span class=\"p\">2Zp pr ap in-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n14.html\" class=\"n\">TG</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s3.html\" class=\"s\">21</a></span></td>\n<td class=\"l\"><span class=\"p\">matematyka</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n24.html\" class=\"n\">RP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s7.html\" class=\"s\">24</a></td>\n</tr>\n<tr>\n<td class=\"nr\">5</td>\n<td class=\"g\">11:30-12:15</td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">wf-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n13.html\" class=\"n\">MG</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s13.html\" class=\"s\">gim1</a></span><br><span style=\"font-size:85%\"><span class=\"p\">2Zp ad baz d-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n16.html\" class=\"n\">KJ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s1.html\" class=\"s\">9</a></span></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">OiZPS-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n11.html\" class=\"n\">GA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">18</a></span><br><span style=\"font-size:85%\"><span class=\"p\">wf-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n28.html\" class=\"n\">JŚ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s8.html\" class=\"s\">25</a></span></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">j.niemiecki-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n23.html\" class=\"n\">KP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s16.html\" class=\"s\">16</a></span><br><span style=\"font-size:85%\"><span class=\"p\">2Zp ad baz d-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n16.html\" class=\"n\">KJ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s5.html\" class=\"s\">19</a></span></td>\n<td class=\"l\"><span class=\"p\">matematyka</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n24.html\" class=\"n\">RP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s7.html\" class=\"s\">24</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">2Zp POiNOPS-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n11.html\" class=\"n\">GA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">18</a></span><br><span style=\"font-size:85%\"><span class=\"p\">2Zp pr ap in-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n14.html\" class=\"n\">TG</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s3.html\" class=\"s\">21</a></span></td>\n</tr>\n<tr>\n<td class=\"nr\">6</td>\n<td class=\"g\">12:20-13:05</td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">2Zp ad baz d-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n16.html\" class=\"n\">KJ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s1.html\" class=\"s\">9</a></span></td>\n<td class=\"l\"><span class=\"p\">historia</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n8.html\" class=\"n\">KF</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s10.html\" class=\"s\">27</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">wf-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n13.html\" class=\"n\">MG</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s14.html\" class=\"s\">gim2</a></span><br><span style=\"font-size:85%\"><span class=\"p\">2Zp ad baz d-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n16.html\" class=\"n\">KJ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s5.html\" class=\"s\">19</a></span></td>\n<td class=\"l\"><span class=\"p\">NTI</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n30.html\" class=\"n\">SZ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s5.html\" class=\"s\">19</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">2Zp POiNOPS-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n11.html\" class=\"n\">GA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">18</a></span><br><span style=\"font-size:85%\"><span class=\"p\">2Zp pr ap in-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n14.html\" class=\"n\">TG</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s3.html\" class=\"s\">21</a></span></td>\n</tr>\n<tr>\n<td class=\"nr\">7</td>\n<td class=\"g\">13:10-13:55</td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">OiZPS-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n11.html\" class=\"n\">GA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">18</a></span><br><span style=\"font-size:85%\"><span class=\"p\">2Zp pr ap in-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n14.html\" class=\"n\">TG</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s3.html\" class=\"s\">21</a></span></td>\n<td class=\"l\"><span class=\"p\">j.polski</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n5.html\" class=\"n\">EB</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s11.html\" class=\"s\">28</a></td>\n<td class=\"l\"><span class=\"p\">NTI</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n30.html\" class=\"n\">SZ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s5.html\" class=\"s\">19</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">OiZPS-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n11.html\" class=\"n\">GA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">18</a></span></td>\n</tr>\n<tr>\n<td class=\"nr\">8</td>\n<td class=\"g\">14:00-14:45</td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">2Zp pr ap in-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n14.html\" class=\"n\">TG</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s3.html\" class=\"s\">21</a></span></td>\n<td class=\"l\"><span class=\"p\">j.polski</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n5.html\" class=\"n\">EB</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s11.html\" class=\"s\">28</a></td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\">&nbsp;</td>\n</tr>\n<tr>\n<td class=\"nr\">9</td>\n<td class=\"g\">14:50-15:35</td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\"><span class=\"p\">WOS</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n15.html\" class=\"n\">JI</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s12.html\" class=\"s\">29</a></td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\">&nbsp;</td>\n</tr>\n</tbody></table>', '2024-09-13 07:57:30', '2024-09-13 08:03:12', '4Bt'),
(4, '<table border=\"1\" cellspacing=\"0\" cellpadding=\"4\" class=\"tabela\">\n<tbody><tr>\n<th>Nr</th>\n<th>Godz</th>\n<th>Poniedziałek</th>\n<th>Wtorek</th>\n<th>Środa</th>\n<th>Czwartek</th>\n<th>Piątek</th>\n</tr>\n<tr>\n<td class=\"nr\">1</td>\n<td class=\"g\"> 8:00- 8:45</td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\"><span class=\"p\">j.polski</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n5.html\" class=\"n\">EB</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s11.html\" class=\"s\">28</a></td>\n<td class=\"l\"><span class=\"p\">NTI</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n30.html\" class=\"n\">SZ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s6.html\" class=\"s\">17</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">OiZPS-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n11.html\" class=\"n\">GA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">18</a></span><br><span style=\"font-size:85%\"><span class=\"p\">2Zp pr ap in-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n14.html\" class=\"n\">TG</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s3.html\" class=\"s\">21</a></span></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">jęz.ang.zaw-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n20.html\" class=\"n\">PA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s16.html\" class=\"s\">16</a></span><br><span style=\"font-size:85%\"><span class=\"p\">j.angielski-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n9.html\" class=\"n\">JF</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s15.html\" class=\"s\">20</a></span></td>\n</tr>\n<tr>\n<td class=\"nr\">2</td>\n<td class=\"g\"> 8:50- 9:35</td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">jęz.ang.zaw-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n20.html\" class=\"n\">PA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s15.html\" class=\"s\">20</a></span><br><span style=\"font-size:85%\"><span class=\"p\">jęz.ang.zaw-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n31.html\" class=\"n\">SS</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s9.html\" class=\"s\">26</a></span></td>\n<td class=\"l\"><span class=\"p\">zaj. wych.</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n25.html\" class=\"n\">PP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s11.html\" class=\"s\">28</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">OiZPS-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n11.html\" class=\"n\">GA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">18</a></span><br><span style=\"font-size:85%\"><span class=\"p\">2Zp pr ap in-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n14.html\" class=\"n\">TG</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s3.html\" class=\"s\">21</a></span></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">j.angielski-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n20.html\" class=\"n\">PA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s16.html\" class=\"s\">16</a></span><br><span style=\"font-size:85%\"><span class=\"p\">j.angielski-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n9.html\" class=\"n\">JF</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s10.html\" class=\"s\">27</a></span></td>\n</tr>\n<tr>\n<td class=\"nr\">3</td>\n<td class=\"g\"> 9:40-10:25</td>\n<td class=\"l\"><span class=\"p\">r_matematyka</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n24.html\" class=\"n\">RP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s7.html\" class=\"s\">24</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">j.angielski-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n20.html\" class=\"n\">PA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s15.html\" class=\"s\">20</a></span><br><span style=\"font-size:85%\"><span class=\"p\">j.niemiecki-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n23.html\" class=\"n\">KP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s16.html\" class=\"s\">16</a></span></td>\n<td class=\"l\"><span class=\"p\">matematyka</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n24.html\" class=\"n\">RP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s7.html\" class=\"s\">24</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">2Zp POiNOPS-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n11.html\" class=\"n\">GA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">18</a></span><br><span style=\"font-size:85%\"><span class=\"p\">2Zp pr ap in-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n14.html\" class=\"n\">TG</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s3.html\" class=\"s\">21</a></span></td>\n<td class=\"l\"><span class=\"p\">religia</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n21.html\" class=\"n\">PŁ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s15.html\" class=\"s\">20</a></td>\n</tr>\n<tr>\n<td class=\"nr\">4</td>\n<td class=\"g\">10:40-11:25</td>\n<td class=\"l\"><span class=\"p\">r_matematyka</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n24.html\" class=\"n\">RP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s7.html\" class=\"s\">24</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">OiZPS-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n11.html\" class=\"n\">GA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">18</a></span><br><span style=\"font-size:85%\"><span class=\"p\">wf-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n28.html\" class=\"n\">JŚ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s8.html\" class=\"s\">25</a></span></td>\n<td class=\"l\"><span class=\"p\">matematyka</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n24.html\" class=\"n\">RP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s7.html\" class=\"s\">24</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">2Zp POiNOPS-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n11.html\" class=\"n\">GA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">18</a></span><br><span style=\"font-size:85%\"><span class=\"p\">2Zp pr ap in-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n14.html\" class=\"n\">TG</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s3.html\" class=\"s\">21</a></span></td>\n<td class=\"l\"><span class=\"p\">matematyka</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n24.html\" class=\"n\">RP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s7.html\" class=\"s\">24</a></td>\n</tr>\n<tr>\n<td class=\"nr\">5</td>\n<td class=\"g\">11:30-12:15</td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">wf-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n13.html\" class=\"n\">MG</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s13.html\" class=\"s\">gim1</a></span><br><span style=\"font-size:85%\"><span class=\"p\">2Zp ad baz d-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n16.html\" class=\"n\">KJ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s1.html\" class=\"s\">9</a></span></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">OiZPS-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n11.html\" class=\"n\">GA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">18</a></span><br><span style=\"font-size:85%\"><span class=\"p\">wf-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n28.html\" class=\"n\">JŚ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s8.html\" class=\"s\">25</a></span></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">j.niemiecki-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n23.html\" class=\"n\">KP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s16.html\" class=\"s\">16</a></span><br><span style=\"font-size:85%\"><span class=\"p\">2Zp ad baz d-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n16.html\" class=\"n\">KJ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s5.html\" class=\"s\">19</a></span></td>\n<td class=\"l\"><span class=\"p\">matematyka</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n24.html\" class=\"n\">RP</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s7.html\" class=\"s\">24</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">2Zp POiNOPS-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n11.html\" class=\"n\">GA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">18</a></span><br><span style=\"font-size:85%\"><span class=\"p\">2Zp pr ap in-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n14.html\" class=\"n\">TG</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s3.html\" class=\"s\">21</a></span></td>\n</tr>\n<tr>\n<td class=\"nr\">6</td>\n<td class=\"g\">12:20-13:05</td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">2Zp ad baz d-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n16.html\" class=\"n\">KJ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s1.html\" class=\"s\">9</a></span></td>\n<td class=\"l\"><span class=\"p\">historia</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n8.html\" class=\"n\">KF</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s10.html\" class=\"s\">27</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">wf-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n13.html\" class=\"n\">MG</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s14.html\" class=\"s\">gim2</a></span><br><span style=\"font-size:85%\"><span class=\"p\">2Zp ad baz d-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n16.html\" class=\"n\">KJ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s5.html\" class=\"s\">19</a></span></td>\n<td class=\"l\"><span class=\"p\">NTI</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n30.html\" class=\"n\">SZ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s5.html\" class=\"s\">19</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">2Zp POiNOPS-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n11.html\" class=\"n\">GA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">18</a></span><br><span style=\"font-size:85%\"><span class=\"p\">2Zp pr ap in-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n14.html\" class=\"n\">TG</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s3.html\" class=\"s\">21</a></span></td>\n</tr>\n<tr>\n<td class=\"nr\">7</td>\n<td class=\"g\">13:10-13:55</td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">OiZPS-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n11.html\" class=\"n\">GA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">18</a></span><br><span style=\"font-size:85%\"><span class=\"p\">2Zp pr ap in-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n14.html\" class=\"n\">TG</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s3.html\" class=\"s\">21</a></span></td>\n<td class=\"l\"><span class=\"p\">j.polski</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n5.html\" class=\"n\">EB</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s11.html\" class=\"s\">28</a></td>\n<td class=\"l\"><span class=\"p\">NTI</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n30.html\" class=\"n\">SZ</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s5.html\" class=\"s\">19</a></td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">OiZPS-1/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n11.html\" class=\"n\">GA</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s4.html\" class=\"s\">18</a></span></td>\n</tr>\n<tr>\n<td class=\"nr\">8</td>\n<td class=\"g\">14:00-14:45</td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\"><span style=\"font-size:85%\"><span class=\"p\">2Zp pr ap in-2/2</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n14.html\" class=\"n\">TG</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s3.html\" class=\"s\">21</a></span></td>\n<td class=\"l\"><span class=\"p\">j.polski</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n5.html\" class=\"n\">EB</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s11.html\" class=\"s\">28</a></td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\">&nbsp;</td>\n</tr>\n<tr>\n<td class=\"nr\">9</td>\n<td class=\"g\">14:50-15:35</td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\"><span class=\"p\">WOS</span> <a href=\"https://plan.zsz.bobowa.pl/plany/n15.html\" class=\"n\">JI</a> <a href=\"https://plan.zsz.bobowa.pl/plany/s12.html\" class=\"s\">29</a></td>\n<td class=\"l\">&nbsp;</td>\n<td class=\"l\">&nbsp;</td>\n</tr>\n</tbody></table>', '2024-09-13 07:59:21', '2024-09-13 07:59:21', '5bt');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `replacements`
--

CREATE TABLE `replacements` (
  `id` int(11) NOT NULL,
  `lesson` varchar(255) NOT NULL,
  `teacher` varchar(255) NOT NULL,
  `branch` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `room` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `deputy` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `replacements`
--

INSERT INTO `replacements` (`id`, `lesson`, `teacher`, `branch`, `subject`, `room`, `date`, `deputy`, `createdAt`, `updatedAt`) VALUES
(4, '3', 'Piotr Nowak', 'Fizyka', 'Mechanika', '102', '2024-03-10', ' ', '2024-09-12 21:12:06', '2024-09-12 21:43:30'),
(5, '2', 'Dawid Krawczyk', 'Angielski', 'Algebra', '10', '2024-02-10', 'Anna Nowak', '2024-09-12 21:40:15', '2024-09-12 21:40:15');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `slider`
--

CREATE TABLE `slider` (
  `id` int(11) NOT NULL,
  `file` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `slider`
--

INSERT INTO `slider` (`id`, `file`, `createdAt`, `updatedAt`) VALUES
(5, '/uploads/slider_5_1726172435475.webp', '2024-09-12 19:00:50', '2024-09-12 20:20:35'),
(6, '/uploads/slider_6_1726172527286.webp', '2024-09-12 20:21:50', '2024-09-12 20:22:07');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isVerified` tinyint(1) DEFAULT 0,
  `lastLogin` datetime DEFAULT current_timestamp(),
  `resetPasswordToken` varchar(255) DEFAULT NULL,
  `resetPasswordExpireAt` datetime DEFAULT NULL,
  `verificationToken` varchar(255) DEFAULT NULL,
  `verificationTokenExpireAt` datetime DEFAULT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `avatar`, `email`, `login`, `password`, `isVerified`, `lastLogin`, `resetPasswordToken`, `resetPasswordExpireAt`, `verificationToken`, `verificationTokenExpireAt`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
(52, 'adminadmin', 'asdmin', NULL, 'karol.lichon@zsz.bosbowa.pl', 'admins', '$2a$10$PPelVDfvKkDyyFTC7rS9qu7Oq3Y7jpmSHmn2hmj9JEwwii/LCQPyO', 0, '2024-09-11 16:58:40', NULL, NULL, '965917', '2024-09-11 17:58:40', 0, '2024-09-11 16:58:40', '2024-09-11 16:58:40'),
(53, 'adminadmin', 'asdmin', NULL, 'karol.lichon@zsz.bosabowa.pl', 'adminsa', '$2a$10$1f7CKUG608ThikZcanwJ3eCuO7hbvtFRVfkZEHGyMYTfa034K.ZPi', 0, '2024-09-11 16:59:26', NULL, NULL, '153653', '2024-09-11 17:59:26', 0, '2024-09-11 16:59:26', '2024-09-11 16:59:26'),
(55, 'adminadmin', 'asdmin', NULL, 'karol.lichon@zsz.bobowa.pl', 'adminsghhzd', '$2a$10$oT.58BD9HQQlYg/ToC9UteD20WmgvYiwcWE.6e8.PIe8dygTEcpMm', 0, '2024-09-12 14:51:35', NULL, NULL, '426623', '2024-09-12 15:51:11', 0, '2024-09-12 14:51:11', '2024-09-12 14:51:35');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `views`
--

CREATE TABLE `views` (
  `id` int(11) NOT NULL,
  `schoolLogo` varchar(255) NOT NULL,
  `viewMode` enum('school','event','slider','alarm','assembly') NOT NULL DEFAULT 'school',
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `views`
--

INSERT INTO `views` (`id`, `schoolLogo`, `viewMode`, `createdAt`, `updatedAt`) VALUES
(1, '/uploads/school_logo_1_1726170365565.webp', 'school', '2024-09-08 15:31:13', '2024-09-12 19:46:05');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `announcements`
--
ALTER TABLE `announcements`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `classrooms`
--
ALTER TABLE `classrooms`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `replacements`
--
ALTER TABLE `replacements`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `login` (`login`);

--
-- Indeksy dla tabeli `views`
--
ALTER TABLE `views`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `announcements`
--
ALTER TABLE `announcements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `classrooms`
--
ALTER TABLE `classrooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `replacements`
--
ALTER TABLE `replacements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `slider`
--
ALTER TABLE `slider`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `views`
--
ALTER TABLE `views`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
