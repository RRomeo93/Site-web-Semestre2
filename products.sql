-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : dim. 19 mai 2024 à 17:51
-- Version du serveur : 8.3.0
-- Version de PHP : 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `database_projet`
--

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `category_id` int DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `description` text,
  `seats` int DEFAULT NULL,
  `transmission` varchar(50) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `stock` int DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_category` (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `name`, `category_id`, `image`, `description`, `seats`, `transmission`, `price`, `created_at`, `stock`) VALUES
(4, 'Porsche 719 Cayman S', 1, 'path/to/image1.jpg', 'Coupe', 4, 'Manuelle', 400.00, '2024-05-14 22:10:11', 999),
(5, 'Porsche 718 Cayman S', 2, 'path/to/image2.jpg', 'Coupe', 4, 'Manuelle', 350.00, '2024-05-14 22:10:11', 999),
(6, 'Porsche 718 Cayman S', 1, 'path/to/image3.jpg', 'Coupe', 4, 'Manuelle', 450.00, '2024-05-14 22:10:11', 999),
(7, 'Porsche 718 Cayman S', 2, 'path/to/image1.jpg', 'Coupe', 4, 'Manuelle', 400.00, '2024-05-15 17:48:29', 999),
(8, 'Porsche 718 Cayman S', 2, 'path/to/image4.jpg', 'Berline', 5, 'Automatique', 350.00, '2024-05-15 17:48:29', 999),
(10, 'Mercedes C Class', 2, 'path/to/image6.jpg', 'Berline', 5, 'Manuelle', 500.00, '2024-05-15 17:48:29', 999),
(11, 'Tesla Model S', 2, 'path/to/image7.jpg', 'Berline', 5, 'Automatique', 600.00, '2024-05-15 17:48:29', 999),
(12, 'Ford Mustang', 2, 'path/to/image8.jpg', 'Coupe', 4, 'Manuelle', 550.00, '2024-05-15 17:48:29', 999),
(13, 'Porsche 718 Cayman S', 2, 'path/to/image2.jpg', 'Coupe', 4, 'Manuelle', 350.00, '2024-05-15 17:48:41', 999),
(14, 'Audi A4', 2, 'path/to/image9.jpg', 'Berline', 5, 'Automatique', 300.00, '2024-05-15 17:48:41', 999),
(15, 'BMW X5', 2, 'path/to/image10.jpg', 'SUV', 7, 'Automatique', 400.00, '2024-05-15 17:48:41', 999),
(16, 'Mercedes C Class', 2, 'path/to/image11.jpg', 'Berline', 5, 'Manuelle', 450.00, '2024-05-15 17:48:41', 999),
(17, 'Tesla Model S', 2, 'path/to/image12.jpg', 'Berline', 5, 'Automatique', 500.00, '2024-05-15 17:48:41', 999),
(18, 'Ford Mustang', 2, 'path/to/image13.jpg', 'Coupe', 4, 'Manuelle', 480.00, '2024-05-15 17:48:41', 999),
(19, 'Porsche 718 Cayman S', 2, 'path/to/image3.jpg', 'Coupe', 4, 'Manuelle', 450.00, '2024-05-15 17:48:52', 999),
(20, 'Audi A4', 2, 'path/to/image14.jpg', 'Berline', 5, 'Automatique', 400.00, '2024-05-15 17:48:52', 999),
(21, 'BMW X5', 2, 'path/to/image15.jpg', 'SUV', 7, 'Automatique', 500.00, '2024-05-15 17:48:52', 999),
(22, 'Mercedes C Class', 2, 'path/to/image16.jpg', 'Berline', 5, 'Manuelle', 550.00, '2024-05-15 17:48:52', 999),
(23, 'Tesla Model S', 2, 'path/to/image17.jpg', 'Berline', 5, 'Automatique', 600.00, '2024-05-15 17:48:52', 999),
(24, 'Ford Mustang', 2, 'path/to/image18.jpg', 'Coupe', 4, 'Manuelle', 580.00, '2024-05-15 17:48:52', 999),
(25, '', 0, '', '', 0, '', 0.00, '2024-05-16 16:55:19', 0),
(26, 'test', 5, 'aea', 'aea', 5, 'esse', 13.00, '2024-05-16 16:55:19', 94),
(27, '', 0, '', '', 0, '', 0.00, '2024-05-17 09:38:55', 0),
(28, 'adem', 6, 'drtfgyuhjik', 'tfgyuhjik', 5, 'drftgyuhjik', 666.00, '2024-05-17 09:38:55', 999);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
