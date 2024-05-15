# c18-backend

C18 Backend Repositorio

# Instrucciones:

## Para correr el proyecto ejecutar:

1) `npm install`
2) `npm run dev`

## Para levantar DB:
1) Agregar la conexion a tu base de datos en el archivo /src/config/config.json
2) Correr la migracion: `npm run migrate`

### Trabajar con la migracion:
- Para crear una nueva migracion y modificar la DB: 
    `npm run migration:create [Nombre]` (cambiar extencion de archivo creado a .cjs)
- Para deshacer los cambios de la ultima migracion: 
    `npm run migration:undo`

### Trabajar con seeders:
- Para crear una nueva seed: 
    `npm run seed:create [Nombre]` (cambiar extencion de archivo creado a .cjs)
- Para plantar las seeds ya creadas: 
    `npm run seed:all` 
- Para deshacer las seeds ya plantadas: 
    `npm run seed:undo`


### Docker (No necesario):
Una ves tenga docker instalado correr el siguiente comando:
`docker-compose up -d`
En caso de hacer cambios al proyecto correr el siguiente comando:
`docker-compose up --build -d`

## Miembros del Equipo BackEnd:

- Jonathan Riffo
- Giselle Cifuentes
- Marcos Barcia
- Bruno Henriquez
- Manuel Perez
