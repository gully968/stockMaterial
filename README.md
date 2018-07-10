# StockMaterial Version 1.0
Si desea comunicarse con el desarrollador:  marcelo.lavandeira@gmail.com

## Dependencias:

    Se utilizó Angular CLI + Angular Material + Font Awesome + AngularFire2

    La base de datos es firebase 

## Observaciones:
Este es un sistema de inventario basico para uso en pequeños comercios.  Se encuentra actualmente en desarrollo. Actualmente los modulos incluidos son:


29-06-2018 
Tablas de Clientes, Proveedores, Productos y Rubros
    En estos se dan altas, bajas y modificaciones respectivas.

Listados de Clientes, Proveedores, Rubros
    En estos se consultan en pantalla (por ahora no tiene posibilidad de pasar a pdf pero la tendra a futuro)

    Productos:

        Se comienza el desarrollo y de hecho se pueden agregar productos pero falta dar forma a la vista para poder
        mostrar los datos de forma mas adecuada.

10/07/2018

Se encuentran en funciones todos los módulos básicos de administración
y configuración.  CRUD de productos, clientes, proveedores. 
Se encuentra funcionando el modulo de ingresos correctamente ()
Se encuentra realizado el modulo de salidas a confirmar errores y conceptos basicos.

Las primeras pruebas realizadas mediante un deploy basico no arrojan errores 
aunque se verifica la necesidad de realizar cambios al maquetado esto no implica el desarrollo o mejoras de las funciones principales.   

En etapa de salida falta implementación de impresión de comprobantes como
así también la verificación de los importes y traer los importes desde los doc de productos/fstore


# Notas basicas para implementación

## Servidor Firestore

Este sistema utiliza la implementación de Firestore por lo que se debe tener en cuenta al crear el proyecto,  realizar cambio al environment.ts existente con los datos propios del servidor de firestore.  El agregado al archivo environment.ts es:

~
  firebaseConfig: {
    apiKey: 'xxX',
    authDomain: 'xxx',
    databaseURL: 'xxxx',
    projectId: 'xxx',
    storageBucket: 'xxx',
    messagingSenderId: 'xxx'
Las xxx deben reemplazarse por los datos propios generados al crear cuenta en firebase y generar nuevo proyecto.  Cuando se cree el nuevo proyecto ir a la opcion principal y copiar el código.

Este proyecto fue generado mediante [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Desarrollo de servidor

Correr `ng serve` para hacer deploy del servidor luego desde un navegador ir a la dirección local: `http://localhost:4200/`. 

Para mas ayuda sobre Angular CLI:

 `ng help` 
 [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
