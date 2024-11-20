-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 20/11/2024 às 14:27
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `orderlydb`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `admin`
--

CREATE TABLE `admin` (
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `admin`
--

INSERT INTO `admin` (`email`, `password`) VALUES
('admin@orderly.com', 'admin'),
('admin@orderly.com', 'admin');

-- --------------------------------------------------------

--
-- Estrutura para tabela `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `cep` varchar(8) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `login`
--

INSERT INTO `login` (`id`, `nome`, `email`, `password`, `cpf`, `cep`, `telefone`, `endereco`, `admin`) VALUES
(1, 'João Silva', 'joao.silva@email.com', 'senha123', '12345678901', '12345678', '11987654321', 'Rua A, 123, Centro', 1),
(2, 'Maria Oliveira', 'maria.oliveira@email.com', 'senha456', '98765432100', '87654321', '11965432100', 'Avenida B, 456, Bairro X', 0),
(3, 'Carlos Souza', 'carlos.souza@email.com', 'senha789', '45678912345', '23456789', '11932165487', 'Rua C, 789, Bairro Y', 0),
(8, 'adm', 'admin@ex.com.br', 'admin', '0', '0', '0', 'nenhum', 1),
(9, 'uriel', 'urielaraujo@gmai.com', '1234', '50932049', '14403446', '1698999456', 'Minha casa ', 0),
(10, 'Gabriel', 'gabrielmessias27@gmail.com', '123', '52026147823', '14402435', '16994282051', 'Benedito barbosa 1160', 0),
(11, 'teste', 'teste@teste.com', '123', '1111', '111', '11111', 'teste', 0),
(12, 'guilhermy', 'guilhemy1309@gmail.com', '123', '52739866', '103245', '1699499492', 'Sao paulo', 0);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cpf` (`cpf`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
