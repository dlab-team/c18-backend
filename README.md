# c18-backend

C18 Backend Repositorio

## API:

   [Documentación API](https://c18-backend.onrender.com/api/v1/docs)

# Instrucciones:

## Para correr el proyecto ejecutar:


```bash
npm install
npm run dev
```

## Para levantar DB:
1) Agregar la conexion a tu base de datos en el archivo .env segun ejemplo
2) Correr la migracion: 
```bash
npm run migrate
```

### Trabajar con la migracion:
- Para crear una nueva migracion y modificar la DB: 

```bash
npm run migration:create [Nombre]
```
    
- Para deshacer los cambios de la ultima migracion:

```bash
npm run migration:undo
```
    

### Trabajar con seeders:
- Para crear una nueva seed (cambiar extencion de archivo creado a .cjs) : 
```bash
    npm run seed:create [Nombre] 
```
- Para plantar las seeds ya creadas: 

```bash
    npm run seed:all
```
- Para deshacer las seeds ya plantadas: 

```bash
    npm run seed:undo
```


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
