-- 1.

SELECT nombre, apellido, fecha_nacimiento, categoria FROM jugadores;

-- 2.

SELECT nombre, latitud, longitud FROM ciudades;

-- 3.

SELECT ca.nombre, ca.direccion, c.nombre FROM campos AS ca
JOIN ciudades AS c ON c.id = fk_ciudad;

-- 4.

SELECT c.nombre FROM ciudades AS c
JOIN campos AS ca ON ca.fk_ciudad = c.id
JOIN hoyos AS h ON h.fk_campo = ca.id
JOIN tarjetas_torneo AS t ON t.fk_numero_hoyo = h.numero AND t.fk_campo = h.fk_campo
JOIN torneos AS ts ON ts.id = t.fk_torneo
WHERE ts.nombre = 'Masters de Paris'
GROUP BY c.nombre;

-- 5.

SELECT j.nombre, j.apellido, t.numero_golpes FROM tarjetas_torneo AS t
JOIN jugadores AS j ON t.fk_jugador = j.id
WHERE t.fk_numero_hoyo = 1 AND t.fk_campo = 1;

-- 6.

SELECT j.nombre, j.apellido, t.fk_numero_hoyo, t.numero_golpes FROM tarjetas_torneo AS t
JOIN jugadores AS j ON t.fk_jugador = j.id
WHERE t.fk_torneo = 1
ORDER BY t.fk_numero_hoyo;

-- 7.

SELECT j.nombre, j.apellido, ts.nombre, c.nombre FROM jugadores AS j
JOIN tarjetas_torneo AS t ON t.fk_jugador = J.id
JOIN torneos AS ts ON t.fk_torneo = ts.id
JOIN ciudades AS c ON c.id = j.fk_ciudad_origen
GROUP BY j.nombre, j.apellido, ts.nombre, c.nombre;

-- 8.

SELECT p.nombre, COUNT(*) FROM paises AS p
JOIN ciudades AS c ON c.fk_pais = p.id
JOIN campos AS ca ON ca.fk_ciudad = c.id
GROUP BY p.nombre
ORDER BY count DESC;
