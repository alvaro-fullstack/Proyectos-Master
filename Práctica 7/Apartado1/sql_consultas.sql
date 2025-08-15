USE streaming_musica;
-- 1. Insertar un usuario
INSERT INTO usuarios (nombre, email, contrasena) 
VALUES ('Juan Pérez', 'juan.perez@example.com', 'password123');

-- 2. Insertar un artista
INSERT INTO artistas (nombre, foto) 
VALUES ('Coldplay', 'https://example.com/fotos/coldplay.jpg');

-- 3. Insertar un álbum (asociado al artista anterior)
INSERT INTO albumes (titulo, discografica, anio, id_artista)
VALUES ('A Head Full of Dreams', 'Parlophone', 2015, LAST_INSERT_ID());

-- 4. Insertar tres canciones (asociadas al álbum anterior)
INSERT INTO canciones (titulo, genero, duracion, anio, id_album) 
VALUES 
('A Head Full of Dreams', 'Pop Rock', 223, 2015, LAST_INSERT_ID()),
('Hymn for the Weekend', 'Pop Rock', 258, 2015, LAST_INSERT_ID()),
('Adventure of a Lifetime', 'Pop Rock', 263, 2015, LAST_INSERT_ID());

-- 5. Crear una lista con las tres canciones
-- Primero obtenemos el ID del usuario creado
SET @id_usuario = (SELECT id_usuario FROM usuarios WHERE email = 'juan.perez@example.com');

-- Creamos la lista de reproducción
INSERT INTO listas_reproduccion (nombre, id_usuario)
VALUES ('Mis favoritas de Coldplay', @id_usuario);

-- Obtenemos el ID de la lista recién creada
SET @id_lista = LAST_INSERT_ID();

-- Obtenemos los IDs de las canciones insertadas
SET @id_cancion1 = (SELECT id_cancion FROM canciones WHERE titulo = 'A Head Full of Dreams');
SET @id_cancion2 = (SELECT id_cancion FROM canciones WHERE titulo = 'Hymn for the Weekend');
SET @id_cancion3 = (SELECT id_cancion FROM canciones WHERE titulo = 'Adventure of a Lifetime');

-- Asociamos las canciones a la lista
INSERT INTO listas_canciones (id_lista, id_cancion)
VALUES 
(@id_lista, @id_cancion1),
(@id_lista, @id_cancion2),
(@id_lista, @id_cancion3);

-- 6. Registrar que el usuario ha escuchado una canción
INSERT INTO historial_escuchas (id_usuario, id_cancion)
VALUES (@id_usuario, @id_cancion2);