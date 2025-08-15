-- CONSULTA #1: Reservas del restaurante 1 para el 14-03-2024
SELECT 
    re.id AS reserva_id,
    c.nombre AS cliente_nombre,
    c.telefono AS cliente_telefono,
    c.email AS cliente_email,
    m.nombre AS mesa_nombre,
    m.max_comensales,
    re.fecha_reserva,
    re.comensales
FROM 
    reserva re
JOIN 
    cliente c ON re.cliente_id = c.id
JOIN 
    mesa m ON re.mesa_id = m.id
JOIN 
    restaurante res ON m.restaurante_id = res.id
WHERE 
    res.id = 1
    AND DATE(re.fecha_reserva) = '2024-03-14';

-- CONSULTA #2: Restaurantes favoritos abiertos del cliente 1
SELECT 
    r.nombre AS restaurante_nombre,
    r.direccion,
    r.telefono
FROM 
    favorito f
JOIN 
    restaurante r ON f.restaurante_id = r.id
WHERE 
    f.cliente_id = 1
    AND r.is_open = 1;

-- CONSULTA #3: Modificar fecha de reserva con id 10
UPDATE reserva
SET fecha_reserva = '2025-04-13 18:00:00'
WHERE id = 10;

-- CONSULTA #4: Eliminar restaurantes favoritos no abiertos del cliente 1
DELETE f FROM favorito f
JOIN restaurante r ON f.restaurante_id = r.id
WHERE 
    f.cliente_id = 1
    AND r.is_open = 0;

-- CONSULTA #5: Restaurantes con más de 3 reservas de 4+ comensales para 01-04-2024
SELECT 
    res.nombre AS restaurante_nombre,
    COUNT(re.id) AS total_reservas
FROM 
    reserva re
JOIN 
    mesa m ON re.mesa_id = m.id
JOIN 
    restaurante res ON m.restaurante_id = res.id
WHERE 
    DATE(re.fecha_reserva) = '2024-04-01'
    AND re.comensales >= 4
GROUP BY 
    res.id, res.nombre
HAVING 
    COUNT(re.id) > 3;

-- CONSULTA #6: Aforo máximo del restaurante 5
SELECT 
    SUM(max_comensales) AS aforo_maximo
FROM 
    mesa
WHERE 
    restaurante_id = 5;

-- CONSULTA #7: Mesas disponibles para 2 comensales en restaurante 5 para 31-12-2024 19:00
SELECT 
    m.id,
    m.nombre,
    m.max_comensales
FROM 
    mesa m
WHERE 
    m.restaurante_id = 5
    AND m.max_comensales >= 2
    AND m.id NOT IN (
        SELECT mesa_id 
        FROM reserva 
        WHERE fecha_reserva = '2024-12-31 19:00:00'
    );

-- CONSULTA #8: Cliente con más reservas en restaurante 1 durante 2024
SELECT 
    c.nombre AS cliente_nombre,
    COUNT(re.id) AS total_reservas
FROM 
    reserva re
JOIN 
    cliente c ON re.cliente_id = c.id
JOIN 
    mesa m ON re.mesa_id = m.id
WHERE 
    m.restaurante_id = 1
    AND re.fecha_reserva BETWEEN '2024-01-01' AND '2024-12-31'
GROUP BY 
    c.id, c.nombre
ORDER BY 
    total_reservas DESC
LIMIT 1;