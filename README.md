# StockMaterial Version 1.0

StockMaterial es un aplicativo basico para control de inventario,  modelado en Angular
con dependencias de firestore, material y bootstrap.  Es realizado a los fines de realizar el 
control de inventario de una pequeña tienda de ventas. 
No posee hasta el momento de realizar esta documentación un sistema de facturación pero se
podría integrar facilmente con algún sistema de facturación existente que permita la integración
o bien desarrollar a futuro un sistema a tales fines.

## Instalación 

### Requerimientos:

Instalar NodeJS para realizar la instalación de las dependencias.  
Instalar GIT en caso que requiera llevar control de versiones.
Instalar Angular/CLI para realizar la instalación y desarrollo de servidor.
Crear una cuenta en Firebase (teniendo cuenta en google es muy sencillo)

### Instalación:

1. Descargar o clonar el presente repositorio (mediante git o download directo)
2. Dentro de la carpeta donde se alojan los archivos ejecutar desde linea de comandos
   la instrucción 
       npm install
   Esto realizará la instalación de todas las dependencias necesarias para el aplicativo. (Demora su tiempo,  no cancele este punto!)
3. Dentro de la carpeta donde se alojan los archivos se deberá ver una carpeta con el nombre
   node_modules,  si no es así repita el paso 2.  En una linea de comandos ejecute el comando
   npm start       (o bien)       ng serve -o

   Esto realizará el deploy de un servidor de desarrollo y luego abrirá el explorador predeterminado en la dirección correspondiente a la aplicación.

4. IMPORTANTE:   esta aplicación utiliza la autenticación de Firebase por lo que se debe configurar al menos un usuario y activar la autenticación por email y contraseña, para utilizar estos datos para el acceso al aplicativo.  Si no se encuentra este tipo de autenticación configurada en Firebase va a dar error por lo que se recomienda realizar previamente esta configuración.

5. IMPORTANTE:  En este repositorio no encontrará el archivo de configuración de firebase por lo que deberá crearlo de la siguiente forma:

Dentro de la carpeta src/  crear una carpeta llamada 'environments' la cual debe contener al menos un archivo denominado 'environment.ts'

Este archivo contiene la configuración de firebase y debe ser la propia, este archivo tiene que tener la variable de configuración de firebase y es de la siguiente forma:

~
  firebaseConfig: {
    apiKey: 'xxX',
    authDomain: 'xxx',
    databaseURL: 'xxxx',
    projectId: 'xxx',
    storageBucket: 'xxx',
    messagingSenderId: 'xxx'
Las xxx deben reemplazarse por los datos propios generados al crear cuenta en firebase y generar nuevo proyecto.  Cuando se cree el nuevo proyecto ir a la opcion principal y copiar el código.

Con esto el aplicativo ya debe funcionar correctamente,  si encuentra algún inconveniente o bien desea comunicarse con el desarrollador:  marcelo.lavandeira@gmail.com

## Dependencias:

    Se utilizó Angular CLI + Angular Material + Font Awesome + AngularFire2 + Bootstrap 

    La base de datos es firebase 

## Versiones y Cambios (Changelog)

Planificado 

Realizar la eliminación de hardcode y limpiar maquetación.  Actualmente se estan realizando los primeros test unitarios y si bien no arrojan problemas algunos modulos se encuentran muy sobredefinidos o hardcodeados.


12/07/2018 v. 1.0 BETA
Verificación de módulos y remaquetado de ingresos y salidas,  consulta e impresión de comprobantes adicionado.  Se agregó el framework css bootstrap para el mejoramiento de menues y se agregó la pantalla de login junto con los datos de login en la barra de navegación.  
El aplicativo es estable,  las pruebas actualmente realizadas no arrojaron errores.  

10/07/2018 v. 0.1

Desarrollo de módulo de Ingresos y salidas con pequeños errores en el maquetado.
Las primeras pruebas realizadas mediante un deploy basico no arrojan errores 
aunque se verifica la necesidad de realizar cambios al maquetado esto no implica el desarrollo o mejoras de las funciones principales.   

29-06-2018 v.0 Beta
Desarrollo de tablas y CRUDS basicos Tablas de Clientes, Proveedores, Productos y Rubros
Listados de Clientes, Proveedores, Rubros consultas por pantalla basicas.



## Google Firebase 

Es1te sistema utiliza la implementación de Firestore por lo que se debe tener en cuenta al crear el proyecto,  realizar cambio al environment.ts existente con los datos propios del servidor de firestore.  

## Angular y Angular Material (Google)

Este proyecto ue generado mediante [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7. 
Pero recuerden que en estas últimas versiones de Angular ya no se debe citar los números de versiones por lo que solamente saber que se encuentra desarrollado en la última versión estable de Angular.

## NodeJS

Soporte para la instalación de Angular CLI

## Bootstrap

Framework de CSS (maquetación)

Para mas ayuda sobre Angular CLI:


 `ng help` 
 [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
