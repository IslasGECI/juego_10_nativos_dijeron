# Manual de instalación y ejecución

Este es el manual de instalación del juego _10 nativos dijeron_. Aquí veremos los pre-requisitos de sistema para poder instalar y ejecutar esta aplicacion, así como las instrucciones para hacerlo.

### Pre-requisitos del sistema 📋

Cosas que necesitas tener antes de poder ejecutar la aplicación:
- Tener un sistema operativo windows, ubuntu ó macOS
- [Descargar el comprimido de la aplicación](https://drive.google.com/file/d/1pX3LwA_AV7ky7LiQpopkfBTTpyd835K6/view?usp=sharing)
- [Tener java Jre8 instalado](https://drive.google.com/file/d/1fsPZxkXY4lly9LJyNBw0ZrnrhmdTVgRX/view?usp=sharing)


### Instalación 🔧

La aplicación del juego _10 nativos dijeron_ se encuentra dentro del archivo comprimido llamado `aplicacion con ejecutable.zip`.
El cual debe de ser descomprimido sin importar su ubicacion.
Una vez descomprimido se optendra una carpeta llamada `10 nativos dijeron`.

Dentro de la carpeta `10 nativos dijeron` se encuentran los siguientes archivos:
- `src/surveys.xlsx`
- `10-nativos-dijeron.jar`
- `Ejecutar en Windows.bat`
- `Ejecutar en Linux.sh`
- `verificador.bat`

### Ejecución 🕹
Para ejecutar la aplicacion primero debimos de haber extraido nuestro archivo comprimido y obtenido la carpeta `10 nativos dijeron`.
Posteriormente, debemos entrar en esta carpeta `10 nativos dijeron` y dependiendo de nuestro sistema operativo haremos lo siguiente:

#### En Windows:
- Dentro de la carpeta `10 nativos dijeron`
- Hacer doble click sobre el archivo `Ejecutar en Windows.bat` 
- Despues aparecera una ventana emergente pidiendo acceso para la aplicación java. Donde debemos hacer click en `'Permitir Acceso'`

![image](https://user-images.githubusercontent.com/9456708/115612776-7a953d00-a2a0-11eb-9e12-2e7e42d02dc8.png)

#### En Linux:
- Abrir una terminal en la dirección de la carpeta `10 nativos dijeron`
- Ejecutar el comando ./'Ejecutar en Linux.sh'

#### En MacOs:
- Aun por definir.

#### Como visualizar la aplicacion
Para finalizar, despues de una ejecución se nos abrira automaticamente el navegador con una pagina en concreto:

`http://localhost:8080/`.

__NOTA__: Si la pagina no aparece automaticamente, podemos ir a la direccion anterior de manera manual, donde podremos ver nuestra aplicacion ejecutandose. De lo contrario algun problema debio haber ocurrido y debemos notificarlo con el encargado del repositorio.

### Instrucciones para modificar las preguntas del juego de 10 nativos dijeron
Esta sección está planeada para que sepamos cómo modificar y agregar nuevas preguntas en el excel que posteriormente son cargadas en la aplicación:
1. Abrir la carpeta 'SRC'
2. Abrir el archivo de excel `survey.xlsx`. Aquí podremos modificar, agregar o quitar las preguntas deseadas.

---
Con ❤️, el equipo de Ciencia de Datos de GECI 😊
