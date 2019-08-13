-- CREATE TABLE IF NOT EXISTS tableItems(
--     id INTEGER PRIMARY KEY AUTOINCREMENT, 
--     unTextoCorto TEXT,
--     unTextoLargo TEXT,
--     unNumeroEntero INTEGER,
--     unNumeroReal REAL,
--     unaFecha TEXT,
--     unBooleano INTEGER,
--     unaImagen TEXT); 
-- INSERT INTO tableItems
--     (unTextoCorto, unTextoLargo, unNumeroEntero, unNumeroReal, unaFecha, unBooleano, unaImagen) VALUES 
--     ('Uno', 'El primer valor', 1111, 111.11, '2001-01-01 01:01:01', 1, 'uno.png');
-- INSERT INTO tableItems
--     (unTextoCorto, unTextoLargo, unNumeroEntero, unNumeroReal, unaFecha, unBooleano, unaImagen) VALUES 
--     ('Dos', 'El segundo valor', 2222, 222.22, '2002-02-02 02:02:02', 0, 'dos.png');
-- INSERT INTO tableItems
--     (unTextoCorto, unTextoLargo, unNumeroEntero, unNumeroReal, unaFecha, unBooleano, unaImagen) VALUES 
--     ('Tres', 'El tercer valor', 3333, 333.33, '2003-03-03 03:03:03', 1, 'tres.png');


-- CREATE TABLE IF NOT EXISTS plantas(
--     id INTEGER PRIMARY KEY AUTOINCREMENT, 
--     id_qrcode TEXT,
--     familia TEXT,
--     nome_cientifico TEXT,
--     nome_popular,
--     grupo TEXT,
--     origem TEXT,
--     centro_origem TEXT,
--     ocorrencia TEXT,
--     bioma TEXT,
--     floracao TEXT,
--     frutificacao TEXT,
--     sexo TEXT,
--     sindrome_polinizacao TEXT,
--     tipo_fruto TEXT,
--     sindrome_dispersao TEXT,
--     tipo_folha TEXT,
--     filotaxia TEXT,
--     descricao TEXT);

-- INSERT INTO plantas
--     (id_qrcode, familia, nome_cientifico, nome_popular, grupo, origem, centro_origem, ocorrencia, bioma, floracao, frutificacao, sexo, sindrome_polinizacao, tipo_fruto, sindrome_dispersao, tipo_folha, filotaxia, descricao  ) VALUES 
--     ('teste', 'ACERACEAE', 'Acer palmatum Thunb.', 'Bordo-Japonês', 'Secundária', 'Exótica', 'Japão, Coréia do Sul e China', 'Não possui informações', 'Floresta Temperada', 'Abril', 'Abril-Junho','Polígamo-monóica', 'Entomofilia','Sâmara', 'Anemocoria', 'Folha Simples', 'Oposta', 'DESCRIÇÃO');
-- INSERT INTO plantas
--     (id_qrcode, familia, nome_cientifico, nome_popular, grupo, origem, centro_origem, ocorrencia, bioma, floracao, frutificacao, sexo, sindrome_polinizacao, tipo_fruto, sindrome_dispersao, tipo_folha, filotaxia, descricao  ) VALUES 
--     ('BordoJapones', 'ACERACEAE', 'Acer palmatum Thunb.', 'Bordo-Japonês', 'Secundária', 'Exótica', 'Japão, Coréia do Sul e China', 'Não possui informações', 'Floresta Temperada', 'Abril', 'Abril-Junho','Polígamo-monóica', 'Entomofilia','Sâmara', 'Anemocoria', 'Folha Simples', 'Oposta', 'DESCRIÇÃO');

-- INSERT INTO plantas
--     (id_qrcode, familia, nome_cientifico, nome_popular, grupo, origem, centro_origem, ocorrencia, bioma, floracao, frutificacao, sexo, sindrome_polinizacao, tipo_fruto, sindrome_dispersao, tipo_folha, filotaxia, descricao  ) VALUES 
--     ('Mand', 'ACERACEAE', 'Acer palmatum Thunb.', 'Bordo-Japonês', 'Secundária', 'Exótica', 'Japão, Coréia do Sul e China', 'Não possui informações', 'Floresta Temperada', 'Abril', 'Abril-Junho','Polígamo-monóica', 'Entomofilia','Sâmara', 'Anemocoria', 'Folha Simples', 'Oposta', 'DESCRIÇÃO');



CREATE TABLE IF NOT EXISTS plantas(
    -- id INTEGER PRIMARY KEY AUTOINCREMENT, 
    qrcode TEXT,
    familia TEXT);

INSERT INTO plantas (qrcode, familia) 
    VALUES ('Manduirana', 'Familia1');

INSERT INTO plantas (qrcode, familia) 
    VALUES ('teste', 'Familia2');

INSERT INTO plantas (qrcode, familia) 
    VALUES ('teste22', 'Familia3');

INSERT INTO plantas (qrcode, familia) 
    VALUES ('teste32', 'Familia4');

-- INSERT INTO plantas
--     (qrcode, familia) VALUES 
--     ('teste2', 'Familia2');