# 1234ticket BackEnd v2

BackEnd para el proyecto 1234ticket escrito en Nodejs y express con typescript

## Instalación

Instalar dependencias

```bash
npm install
```
Crear interfaces prisma en base al archivo schema.prisma
```bash
npm run generate-types

Iniciar aplicación modo development

```bash
npm run dev
```

## Estructura Proyecto


```bash
/src/
|-- controllers/ *controladores heredados de _base.controller.ts
|-- errors/   *errores genericos normalizados
|-- middlewares/ *middlewares para rutas
|-- routes/ *rutas del proyecto, partiendo de _main.route.ts
|-- seeders/ * archivos de generación de seeders
|-- utils/ * funciones genericas de ayuda ej: manejo de fechas
|-- config/ * archivos de configuracion ej: paginacion
|-- validators/ * validadores de campos 
| app.ts
| index.ts

```
## Formateo Código
La aplicación funciona con ESlint, por lo que se recomineda descargar la extensión de VScode
```bash
    npm run lint *ver errores de formato
    npm run lint-fix *ver y arreglar errores(los que se puedan) de formato
```
## Documentación Swagger
En cada ruta de la carpeta src/routes se debe llenar la documentación con JsDocs para la autogeneración de [swagger](https://swagger.io/docs/)
```javascrpit
/**
 * @swagger
 * /roles/:
 *  patch:
 *    description: Api para modificar rol
 *    responses:
 *      '200':
 *        description: Modificación satisfactoria
 *
 */
providersCatalogRoute.patch('/:id', providersCatalogController.editOne)
