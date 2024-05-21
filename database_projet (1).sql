-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 21 mai 2024 à 13:45
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
-- Structure de la table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE IF NOT EXISTS `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int DEFAULT '1',
  `added_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `cart`
--

INSERT INTO `cart` (`id`, `user_id`, `product_id`, `quantity`, `added_at`) VALUES
(1, 2, 4, 1, '2024-05-15 20:48:24'),
(2, 2, 4, 1, '2024-05-15 20:50:16'),
(3, 2, 4, 1, '2024-05-15 20:50:49'),
(4, 2, 7, 1, '2024-05-15 20:52:51'),
(23, 4, 20, 1, '2024-05-16 13:40:17'),
(6, 2, 7, 1, '2024-05-15 20:54:11'),
(24, 4, 24, 1, '2024-05-16 13:40:40'),
(8, 2, 4, 1, '2024-05-15 21:04:25'),
(22, 2, 4, 1, '2024-05-16 13:17:44'),
(21, 2, 4, 1, '2024-05-16 11:16:51'),
(11, 2, 10, 1, '2024-05-15 21:08:18'),
(12, 2, 10, 1, '2024-05-15 21:08:21'),
(13, 2, 7, 1, '2024-05-15 21:11:52'),
(14, 2, 7, 1, '2024-05-15 21:18:06'),
(15, 2, 4, 1, '2024-05-15 21:24:31'),
(16, 2, 7, 1, '2024-05-15 21:29:27'),
(17, 2, 7, 1, '2024-05-15 21:29:28'),
(18, 2, 7, 1, '2024-05-15 21:35:36'),
(25, 4, 21, 1, '2024-05-16 13:40:44'),
(26, 4, 19, 1, '2024-05-16 13:40:54'),
(27, 4, 20, 1, '2024-05-16 13:40:58'),
(29, 2, 11, 1, '2024-05-17 09:18:54'),
(30, 2, 4, 1, '2024-05-17 09:36:45'),
(31, 2, 11, 1, '2024-05-17 09:37:58'),
(32, 4, 28, 1, '2024-05-17 09:39:08');

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `type`) VALUES
(1, 'Neufs'),
(2, 'LOA'),
(3, 'LLD'),
(5, 'test'),
(6, 'adem');

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
) ENGINE=MyISAM AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `name`, `category_id`, `image`, `description`, `seats`, `transmission`, `price`, `created_at`, `stock`) VALUES
(4, 'Porsche 719 Cayman S', 1, 'path/to/image1.jpg', 'Coupe', 4, 'Manuelle', 90400.00, '2024-05-14 22:10:11', 999),
(5, 'Porsche 718 Cayman S', 2, 'path/to/image2.jpg', 'Coupe', 4, 'Manuelle', 350.00, '2024-05-14 22:10:11', 999),
(6, 'Porsche 718 Cayman S', 2, 'path/to/image3.jpg', 'Coupe', 4, 'Manuelle', 450.00, '2024-05-14 22:10:11', 999),
(7, 'Porsche 718 Cayman S', 2, 'path/to/image1.jpg', 'Coupe', 4, 'Manuelle', 400.00, '2024-05-15 17:48:29', 999),
(8, 'Porsche 718 Cayman S', 2, 'path/to/image4.jpg', 'Berline', 5, 'Automatique', 350.00, '2024-05-15 17:48:29', 999),
(9, 'BMW X5', 2, 'path/to/image5.jpg', 'SUV', 7, 'Automatique', 450.00, '2024-05-15 17:48:29', 999),
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
(28, 'adem', 6, 'drtfgyuhjik', 'tfgyuhjik', 5, 'drftgyuhjik', 666.00, '2024-05-17 09:38:55', 999),
(29, 'Porsche 718 Cayman S', 1, 'path/to/image2.jpg', 'Coupe', 4, 'Manuelle', 75000.00, '2024-05-14 22:10:11', 999),
(30, 'BMW X5', 1, 'path/to/image5.jpg', 'SUV', 7, 'Automatique', 65450.00, '2024-05-15 17:48:29', 999),
(31, 'Mercedes C Class', 1, 'path/to/image6.jpg', 'Berline', 5, 'Manuelle', 80500.00, '2024-05-15 17:48:29', 999),
(32, 'Tesla Model S', 1, 'path/to/image7.jpg', 'Berline', 5, 'Automatique', 65600.00, '2024-05-15 17:48:29', 999),
(33, 'Ford Mustang', 1, 'path/to/image8.jpg', 'Coupe', 4, 'Manuelle', 78550.00, '2024-05-15 17:48:29', 999),
(34, 'Porsche 718 Cayman S', 3, 'path/to/image2.jpg', 'Coupe', 4, 'Manuelle', 350.00, '2024-05-14 22:10:11', 999),
(35, 'Porsche 718 Cayman S', 3, 'path/to/image3.jpg', 'Coupe', 4, 'Manuelle', 450.00, '2024-05-14 22:10:11', 999),
(36, 'Porsche 718 Cayman S', 3, 'path/to/image1.jpg', 'Coupe', 4, 'Manuelle', 400.00, '2024-05-15 17:48:29', 999),
(37, 'Porsche 718 Cayman S', 3, 'path/to/image4.jpg', 'Berline', 5, 'Automatique', 350.00, '2024-05-15 17:48:29', 999),
(38, 'BMW X5', 3, 'path/to/image5.jpg', 'SUV', 7, 'Automatique', 450.00, '2024-05-15 17:48:29', 999),
(39, 'Mercedes C Class', 3, 'path/to/image6.jpg', 'Berline', 5, 'Manuelle', 500.00, '2024-05-15 17:48:29', 999),
(40, 'Tesla Model S', 3, 'path/to/image7.jpg', 'Berline', 5, 'Automatique', 600.00, '2024-05-15 17:48:29', 999),
(41, 'Ford Mustang', 3, 'path/to/image8.jpg', 'Coupe', 4, 'Manuelle', 550.00, '2024-05-15 17:48:29', 999),
(42, 'Porsche 718 Cayman S', 3, 'path/to/image2.jpg', 'Coupe', 4, 'Manuelle', 350.00, '2024-05-15 17:48:41', 999),
(43, 'Audi A4', 3, 'path/to/image9.jpg', 'Berline', 5, 'Automatique', 300.00, '2024-05-15 17:48:41', 999),
(44, 'BMW X5', 3, 'path/to/image10.jpg', 'SUV', 7, 'Automatique', 400.00, '2024-05-15 17:48:41', 999),
(45, 'Mercedes C Class', 3, 'path/to/image11.jpg', 'Berline', 5, 'Manuelle', 450.00, '2024-05-15 17:48:41', 999),
(46, 'Tesla Model S', 3, 'path/to/image12.jpg', 'Berline', 5, 'Automatique', 500.00, '2024-05-15 17:48:41', 999),
(47, 'Ford Mustang', 3, 'path/to/image13.jpg', 'Coupe', 4, 'Manuelle', 480.00, '2024-05-15 17:48:41', 999),
(48, 'Porsche 718 Cayman S', 3, 'path/to/image3.jpg', 'Coupe', 4, 'Manuelle', 450.00, '2024-05-15 17:48:52', 999),
(49, 'Porsche 718 Cayman S', 1, 'path/to/image2.jpg', 'Coupe', 4, 'Manuelle', 98350.00, '2024-05-15 17:48:41', 999),
(50, 'Audi A4', 1, 'path/to/image9.jpg', 'Berline', 5, 'Automatique', 45300.00, '2024-05-15 17:48:41', 999),
(51, 'BMW X5', 1, 'path/to/image10.jpg', 'SUV', 7, 'Automatique', 60400.00, '2024-05-15 17:48:41', 999),
(52, 'Mercedes C Class', 1, 'path/to/image11.jpg', 'Berline', 5, 'Manuelle', 56450.00, '2024-05-15 17:48:41', 999),
(53, 'Tesla Model S', 1, 'path/to/image12.jpg', 'Berline', 5, 'Automatique', 60500.00, '2024-05-15 17:48:41', 999),
(54, 'Ford Mustang', 1, 'path/to/image13.jpg', 'Coupe', 4, 'Manuelle', 79480.00, '2024-05-15 17:48:41', 999);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='table users';

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`) VALUES
(1, 'samuel', 'ssilvacontact@gmail.com', '$2y$10$XiDEzgmWVQ0Nk/qRjFdvneqUHBuRnVOD0JyhVNLVTaAFipBP5Ro92', '0000-00-00 00:00:00'),
(2, 'sar', 'test@test.com', '$2y$10$5zFt8Uh7FKmlcIy91aY93OYhXVYb0G.2.GfD/GzIvHNcBtbxrGN6i', '2024-05-15 17:40:27'),
(3, 'caca', 'caca@caca.com', '$2y$10$kkHpxxee5BG1PGvhGhlpEed0lsKSPso5JT/HZa7EW6OA3VCsGFubm', '0000-00-00 00:00:00'),
(4, 'admin', 'admin@admin.com', '$2y$10$Affm.OcrJEecYZhhfWlkaeWoOO3CQ5HVIgF7wsESV3pDDpG9Mno6C', '2024-05-14 23:13:44');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
