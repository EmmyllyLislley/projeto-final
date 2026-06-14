CREATE DATABASE IF NOT EXISTS catalogo;
USE catalogo;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS diretores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100)
);


CREATE TABLE IF NOT EXISTS titulos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    data_lancamento DATE,
    classificacao_indicativa VARCHAR(10),
    id_diretor INT,

    FOREIGN KEY (id_diretor) REFERENCES diretores(id)
);


CREATE TABLE IF NOT EXISTS filmes (
    id INT PRIMARY KEY,
    duracao INT NOT NULL,

    FOREIGN KEY (id) REFERENCES titulos(id)
);


CREATE TABLE IF NOT EXISTS series (
    id INT PRIMARY KEY,
    temporadas INT,
    total_episodios INT,

    FOREIGN KEY (id) REFERENCES titulos(id)
);


CREATE TABLE IF NOT EXISTS generos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);


CREATE TABLE IF NOT EXISTS titulo_genero (
    id_titulo INT,
    id_genero INT,

    PRIMARY KEY(id_titulo, id_genero),

    FOREIGN KEY(id_titulo) REFERENCES titulos(id),
    FOREIGN KEY(id_genero) REFERENCES generos(id)
);


CREATE TABLE IF NOT EXISTS atores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE,
    nacionalidade VARCHAR(100)
);


CREATE TABLE IF NOT EXISTS titulo_ator (
    id_titulo INT,
    id_ator INT,

    PRIMARY KEY(id_titulo, id_ator),

    FOREIGN KEY(id_titulo) REFERENCES titulos(id),
    FOREIGN KEY(id_ator) REFERENCES atores(id)
);


CREATE TABLE IF NOT EXISTS avaliacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nota DECIMAL(2,1),
    critica TEXT,
    id_usuario INT,
    id_titulo INT,

    FOREIGN KEY(id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY(id_titulo) REFERENCES titulos(id)
);


CREATE TABLE IF NOT EXISTS listas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    id_usuario INT,

    FOREIGN KEY(id_usuario) REFERENCES usuarios(id)
);


CREATE TABLE IF NOT EXISTS lista_titulo (
    id_lista INT,
    id_titulo INT,

    PRIMARY KEY(id_lista, id_titulo),

    FOREIGN KEY(id_lista) REFERENCES listas(id),
    FOREIGN KEY(id_titulo) REFERENCES titulos(id)
);