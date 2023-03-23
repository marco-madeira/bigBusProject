-- Apaga a tabela Login caso exista
DROP TABLE IF EXISTS Login CASCADE;

-- Cria a tabela Login
CREATE TABLE Login
(
    email            VARCHAR(80)	NOT NULL,
    senha          VARCHAR(30) NOT NULL,
    flag           INT NOT NULL,
    PRIMARY KEY(email)
);

-- Insere tuplas em Login
INSERT INTO Login
VALUES
('haaland@gmail.com', '123456', 0),
('daniel@gmail.com', '123456', 1),
('bigbus@gmail.com', '123456', 0),
('bruno@gmail.com', '123456', 1),
('marco@gmail.com', '123456', 1),
('tatiane@gmail.com', '123456', 1),
('tainara@gmail.com', '123456', 1),
('edson@gmail.com', '123456', 1),
('arthur@gmail.com', '123456', 1),
('emerson@gmail.com', '123456', 1),
('ismael@gmail.com', '123456', 1),
('daniels@gmail.com', '123456', 0),
('porronto@gmail.com', '123456', 0),
('bossao@gmail.com', '123456', 0);

-- Apaga a tabela Cliente caso existE

DROP TABLE IF EXISTS Cliente CASCADE;

-- Cria a tabela Cliente
Create Table Cliente
(
    cpf             CHAR(11) 	NOT NULL,
    datanasc       INT,
    nome           VARCHAR(80) NOT NULL,
    endereco       VARCHAR(80),
    cliente_email          VARCHAR(80) CONSTRAINT cliente_email UNIQUE,
    senha          VARCHAR(20),

    PRIMARY KEY(cpf),
        FOREIGN KEY (cliente_email) REFERENCES Login(email)
        ON UPDATE CASCADE
);

-- Insere tuplas em Cliente
INSERT INTO Cliente
VALUES 
(55555555555, 05011990, 'Daniel', 'Rua 5', 'daniel@gmail.com', '123456'),
(66666666666, 06011990, 'Marco', 'Rua 6', 'marco@gmail.com', '123456'),
(77777777777, 07011990, 'Tatiane', 'Rua 7', 'tatiane@gmail.com', '123456'),
(88888888888, 08011990, 'Tainara', 'Rua 8', 'tainara@gmail.com', '123456'),
(99999999999, 09011990, 'Arthur', 'Rua 9', 'arthur@gmail.com', '123456'),
(12345678901, 10011990, 'Bruno', 'Rua 10', 'bruno@gmail.com', '123456'),
(12345678902, 10011990, 'Emerson', 'Rua 11', 'emerson@gmail.com', '123456'),
(12345678903, 10011990, 'Edson', 'Rua 12', 'edson@gmail.com', '123456'),
(12345678904, 10011990, 'Ismael', 'Rua 12', 'ismael@gmail.com', '123456');

-- Apaga a tabela Motorista caso exista
DROP TABLE IF EXISTS Motorista CASCADE;

-- Cria a tabela Motorista
Create Table Motorista
(
    cnh            CHAR(11) 	NOT NULL,
    nome_motorista VARCHAR(50),

    primary key(cnh)
);

-- Insere tuplas em Motorista
INSERT INTO Motorista
VALUES
('21111111111', 'João'),
('31111111111', 'Maria'),
('41111111111', 'Jose'),
('51111111111','Pedro'),
('61111111111', 'Alexandre'),
('71111111111', 'Rafael'),
('81111111111',  'Michele'),
('91111111111','Beatriz');
    
-- Apaga a tabela Empresa caso exista
DROP TABLE IF EXISTS Empresa CASCADE;

-- Cria a tabela Empresa
CREATE TABLE Empresa
(
    cnpj            CHAR(15) 	NOT NULL,
    nome_empresa           VARCHAR(30) NOT NULL,
    endereco       VARCHAR(50),
    telefone      VARCHAR(15), 
	empresa_email 		  VARCHAR(80)  CONSTRAINT empresa_email UNIQUE,
	senha		  VARCHAR(80),
    primary key (cnpj), 
    FOREIGN KEY (empresa_email) REFERENCES Login(email)
        ON UPDATE CASCADE
);

-- insere tuplas em Empresa
INSERT INTO Empresa
VALUES
('51475746000193', 'Viação Haaland', 'Rua Ciborg', '(31)3831-3000', 'haaland@gmail.com', '123456'),
('54235746000194', 'BigBus', 'Rua Das Abelhas', '(31)3831-2000', 'bigbus@gmail.com', '123456'),
('13475746000195', 'Bossão', 'Rua Senhor dos Onibus', '(31)3831-3000', 'bossao@gmail.com', '123456'),
('75475746000196', 'Daniels enterprise', 'Rua Itambé', '(31)3831-4000', 'daniels@gmail.com', '123456'),
('31475746000197', 'Viação Porronto', 'Rua Londrina', '(31)3831-5000', 'porronto@gmail.com', '123456');

-- Apaga a tabela Onibus caso exista
DROP TABLE IF EXISTS Onibus CASCADE;

-- Cria a tabela Onibus
CREATE TABLE Onibus
(
    placa          VARCHAR(7) 	NOT NULL,
    num_assentos  INTEGER 	NOT NULL,
    disponivel   BOOLEAN,
    PRIMARY KEY(placa)
);

-- Insere tuplas em Onibus
INSERT INTO Onibus
VALUES
('ABC1234', 40, true),
('ABC1235', 38, true),
('ABC1236', 42, true),
('ABC1237', 40, true),
('ABC1238', 39, true),
('ABC1239', 37, true),
('ABC1240', 37, true),
('ABC1241', 37, true),
('ABC1242', 37, false);

-- Apaga a tabela Viagem caso exista
DROP TABLE IF EXISTS Viagem CASCADE;

-- Cria a tabela Viagem
CREATE TABLE Viagem
(
    cod_viagem     SERIAL,
    data_viagem    INT,
    hora_saida     INT,
    origem         VARCHAR(50),
    destino        VARCHAR(50),
    placa          VARCHAR(7) 	NOT NULL,
    cnh            CHAR(11) 	NOT NULL,
    preco          FLOAT(2),
    nome_empresa   VARCHAR(30) NOT NULL,
    PRIMARY KEY(cod_viagem),
    FOREIGN KEY(placa) REFERENCES Onibus(placa)
	    ON UPDATE CASCADE,
    FOREIGN KEY(cnh) REFERENCES Motorista(cnh)
        ON UPDATE CASCADE

);

-- Insere tuplas em Viagem
INSERT INTO Viagem( data_viagem, hora_saida, origem, destino, placa, cnh, preco, nome_empresa)
VALUES

( 04122023, 083000, 'Belo Horizonte', 'São Paulo', 'ABC1234', '21111111111', 190.00, 'Viação Haaland'),
( 04102023, 074000, 'Rio de Janeiro', 'São Paulo', 'ABC1235', '31111111111', 120.00, 'Bossão'),
( 19042023, 120000, 'Brasilia', 'Maceio', 'ABC1236', '41111111111', 400.00, 'Bossão'),
( 04092023, 220000, 'Londrina', 'La Paz', 'ABC1237', '51111111111', 600.00, 'Viação Haaland'),
( 05052023, 130000, 'Florianopolis', 'Vargem Nova', 'ABC1238', '61111111111', 50.00, 'BigBus'),
( 05032023, 060000, 'Rio Piracicaba', 'João Monlevade', 'ABC1239', '71111111111', 16.00, 'Viação Porronto'),
( 06082023, 235000, 'Vitoria', 'Salvador', 'ABC1240', '81111111111', 320.00, 'BigBus'),
( 22072023, 161500, 'Manaus', 'Rio Branco', 'ABC1241', '91111111111', 400.00, 'Viação Haaland'),
( 22072023, 193000, 'Manaus', 'Rio Branco', 'ABC1241', '91111111111', 350.00, 'Viação Porronto');

-- Apaga a tabela Passagem caso exista
DROP TABLE IF EXISTS Passagem CASCADE;

-- Cria a tabela Passagem

CREATE TABLE Passagem
(
    cod_passagem   SERIAL,
    data_passagem    INT,
    hora_passagem     INT,
    preco          FLOAT(2),
    cod_viagem     INT 	NOT NULL,
    cpf            char(11)	NOT NULL,
    PRIMARY KEY(cod_passagem),
    FOREIGN KEY(cod_viagem) REFERENCES Viagem(cod_viagem),
    FOREIGN KEY(cpf) REFERENCES Cliente(cpf)
        ON UPDATE CASCADE
);

-- Insere tuplas em Passagem
INSERT INTO Passagem(data_passagem, hora_passagem, preco, cod_viagem, cpf)
VALUES
(04122023, 083000, 190.00, 4, '55555555555'),
( 19042023, 120000, 400.00, 7, '77777777777'),
( 04092023, 220000, 600.00, 2, '88888888888'),
(05052023, 130000, 50.00, 6, '99999999999'),
( 05032023, 060000, 16.00, 5, '12345678901'),
(06082023, 235000, 320.00, 1, '12345678902'),
(22072023, 161500, 400.00, 3, '12345678903'),
(22072023, 193000, 350.00, 8, '12345678904');
