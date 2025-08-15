# Práctica 7 - Consultas SQL y Restauración de Bases de Datos

## Descripción
Este proyecto contiene dos apartados principales relacionados con el manejo de bases de datos MySQL:

- **Apartado 1:** Incluye archivos para la restauración y consulta de una base de datos de música en streaming.
- **Apartado 2:** Incluye archivos para la restauración y consulta de una base de datos de restaurantes, junto con imágenes de resultados de consultas.

## Estructura del proyecto
```
Apartado1/
  sql_consultas.sql
  streaming_musica_backup.sql
  streaming_musica.mwb
  streaming_musica.png
Apartado2/
  bbdd_restaurantes.sql
  consulta1.png
  consulta2.png
  consulta3.png
  consulta4.png
  consulta5.png
  consulta6.png
  consulta7.png
  consulta8.png
  consultas_apartado2.sql
```

## Requisitos
- **MySQL Workbench** instalado en tu equipo.
- Acceso a un servidor MySQL local o remoto.

## Instrucciones de uso

### 1. Restaurar una base de datos
1. Abre **MySQL Workbench**.
2. Conéctate a tu servidor MySQL.
3. Selecciona la opción para ejecutar un script SQL.
4. Carga el archivo de respaldo correspondiente:
   - Para el apartado 1: `streaming_musica_backup.sql`
   - Para el apartado 2: `bbdd_restaurantes.sql`
5. Ejecuta el script para restaurar la base de datos.

### 2. Ejecutar consultas
1. Abre el archivo de consultas:
   - Apartado 1: `sql_consultas.sql`
   - Apartado 2: `consultas_apartado2.sql`
2. Copia y pega las consultas en el editor de MySQL Workbench.
3. Ejecuta cada consulta para ver los resultados.
4. Puedes comparar los resultados con las imágenes incluidas (`consulta1.png`, etc.) para verificar la correcta ejecución.

## Notas
- El archivo `.mwb` es el modelo visual de la base de datos y puede abrirse con MySQL Workbench para revisar la estructura.
- Las imágenes muestran ejemplos de resultados esperados para cada consulta.

## Autor
- Proyecto realizado para el Máster, Práctica 7.
