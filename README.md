# ProyectoJS - Alain Ruales
En este repositorio se encuentra la implementación de un juego de memoria creado para ingeniería web del periodo 202310

Fuente utilizada: https://www.youtube.com/watch?v=OpZEIxqQfIs

## Ejecución de proyecto

Para poder ejecutar el proyecto se debera ejecutar el comando 'npm start'. Es aplicación se abrirá en el 'http://localhost:8080/' y además se actualizará automáticamente si existen cambios en los archivos

# Estructura de proyecto
Los archivos y carpetas más importantes dentro de la estructura del proyecto son los siguientes:
- src:
  - ## Componets:
  En esta carpeta se encuentran los componentes utilizados para el funcionamiento del juego
    - Card.js: Este es un componente que es utilizado para el manejo de estado al ser seleccionada una tarjeta en pantalla.
  - ## Images: 
  En esta carpeta se encuentra todas las imágenes que serán utilizadas para este proyecto. Esto incluye el background, la imágen posterior de la tarjeta, y el contenido que tendrá cada tarjeta.
  - ## App.js
  Será la vista presentada al iniciar el programa. En este archivo se tiene una lista de componentes tarjetas. También, se encuentra las funciones necesarias para validar parejas de tarjetas, controlar el estado de cada una de ellas en caso de que se encuentre un par de tarjetas y regresar a estado inicial al momento de presionar dos tarjetas que no son pareja.
  - ## import.js
  Es un archivo que será utilizado para cargar las imágenes de contenido para las tarjetas.
  

# Funcionalidad de proyecto
Este proyecto es un juego de memoria con temática del medio ambiente. Esta es una aplicación sencilla creada en React, la cual sirvió como práctica para empezar a conocer sobre esta herramienta muy útil al momento de crear front-end.

![image](https://user-images.githubusercontent.com/87552871/217009580-8496e5d9-a79f-4b19-b0e2-96defe860017.png)

# Deploy en la nube
Actualmente, este proyecto se encuentra deployado en la plataforma de Netlify. Para poder lograr esto se siguió la siguiente guía: https://www.youtube.com/watch?v=-Euov0WKuV8

Enlace front: https://arproyectojs.netlify.app/
