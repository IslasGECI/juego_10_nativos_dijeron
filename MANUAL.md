# Manual de instalación y ejecución

Este es el manual de instalación del juego _10 nativos dijeron_. Aquí veremos los pre-requisitos de sistema para poder instalar y ejecutar esta aplicación, así como las instrucciones para hacerlo.

### 📋 Pre-requisitos del sistema

Cosas que necesitas tener antes de poder ejecutar la aplicación:
- Tener un sistema operativo windows, ubuntu ó macOS
- Descargar el comprimido de la aplicación llamado [`10 nativos dijeron.zip`](https://drive.google.com/file/d/1HZ3-3eFd9Eqhr25x3BohHmzpRPeqenEu/view?usp=sharing)
- [Tener java JRE 8 instalado](https://drive.google.com/file/d/1fsPZxkXY4lly9LJyNBw0ZrnrhmdTVgRX/view?usp=sharing)


### 🔧 Instalación

La aplicación del juego _10 nativos dijeron_ se encuentra dentro del archivo comprimido llamado `10 nativos dijeron.zip`.
A continuación se muestran las instrucciones para descomprimir este archivo:
1. Ubicar el archivo descargado `10 nativos dijeron.zip`

<p align="center">
<img
src="https://user-images.githubusercontent.com/56838850/116307682-7fa03380-a75b-11eb-9f51-cbd6cf81037c.png" width="400">
</p>

2. Hacer click derecho sobre el archivo y seleccionar `extraer todo`

<p align="center">
<img
src="https://user-images.githubusercontent.com/56838850/116307850-ac544b00-a75b-11eb-8c92-c70df1dd2ea6.png"
width="450">
</p>

3. Elegir la carpeta en la que extraeremos los archivos y seleccionar la opción `extraer`

<p align="center">
<img
src="https://user-images.githubusercontent.com/56838850/116308021-d9a0f900-a75b-11eb-991b-33d4821108f5.png"
width="450">
</p>

Una vez descomprimido obtendremos una carpeta llamada `10 nativos dijeron`.

Dentro de la carpeta `10 nativos dijeron` se encuentran los siguientes archivos:
- `src/surveys.xlsx`
- `10-nativos-dijeron.jar`
- `Ejecutar en Windows.bat`
- `Ejecutar en Linux.sh`
- `verificador.bat`

<p align="center">
<img
src="https://user-images.githubusercontent.com/56838850/116308209-18cf4a00-a75c-11eb-8ee0-2ed41869af4f.png"
width="500">
</p>

### 🕹 Ejecución
Entrar a la carpeta `10 nativos dijeron` que extrajimos anteriormente y dependiendo de nuestro sistema operativo haremos lo siguiente:

#### Windows
- Dentro de la carpeta `10 nativos dijeron`, hacer doble click sobre el archivo `Ejecutar en Windows.bat` 
- Si es la primera vez ejecutando la aplicación, aparecerá la siguiente ventana:

<p align="center">
<img
src="https://user-images.githubusercontent.com/9456708/115908158-a5a59b00-a41e-11eb-9314-467fbb4fee34.png"
width="450">
</p>

- Al seleccionar la opción `Más información` aparecerá el siguiente mensaje:

<p align="center">
<img
src="https://user-images.githubusercontent.com/9456708/115908201-b6eea780-a41e-11eb-86bc-d91365b19794.png"
width="300">
</p>

Seleccionar `Ejecutar de todas formas`.

- La ventana emergente solicitará acceso para la aplicación java, hacer click en `Permitir Acceso`:

<p align="center">
<img
src="https://user-images.githubusercontent.com/9456708/115612776-7a953d00-a2a0-11eb-9e12-2e7e42d02dc8.png"
width="300">
</p>

- Si todo salió bien, obtedremos lo siguiente:

<p align="center">
<img
src="https://user-images.githubusercontent.com/9456708/115908785-75123100-a41f-11eb-8ade-0d9813b12b27.png"
width="550">
</p>

#### Linux:
- Abrir una terminal en la dirección de la carpeta `10 nativos dijeron`
- Ejecutar el siguiente comando:

```bash
$ ./'Ejecutar en Linux.sh'
```

#### MacOs:
- Aún por definir.

### 👓 Visualización de la aplicación
Posterior a la ejecución, se nos abrirá automaticamente el navegador con la siguiente página:

[http://localhost:8080/](http://localhost:8080/)

Si la aplicación se ejecutó de forma correcta, la veremos de la siguiente forma<sup>1</sup>:

<p align="center">
<img
src="https://user-images.githubusercontent.com/9456708/115908995-bb679000-a41f-11eb-9071-c68a7409e968.png"
width="550">
</p>

<sup>1</sup> Si la página no aparece automaticamente, podemos ir a la dirección anterior de manera
manual, donde podremos ver nuestra aplicación ejecutandose. De lo contrario algún problema debió
haber ocurrido y debemos notificarlo con equipo de Ciencia de Datos.

### ✏️ Instrucciones para modificar las preguntas del juego de _10 nativos dijeron_ 
Esta sección está planeada para que sepamos cómo modificar y agregar nuevas preguntas en el excel
que posteriormente son cargadas en la aplicación:
1. Dentro de la carpeta `10 nativos dijeron`, abrir la carpeta `src`
2. Abrir el archivo de excel `survey.xlsx`. Aquí podremos modificar<sup>1-</sup><sup>2-</sup><sup>3</sup>, agregar o quitar las preguntas deseadas de acuerdo al siguiente ejemplo:

<p align="center">
<img
src="https://user-images.githubusercontent.com/56838850/116309958-46b58e00-a75e-11eb-942b-da724dd5589b.png"
width="550">
</p>

<sup>1</sup> Debemos tener el archivo de excel cerrado cuando ejecutemos la aplicación.

<sup>2</sup> Durante la modificación de preguntas, no debemos tener la aplicación en ejecución.

<sup>3</sup> Siempre debemos guardar el archivo de excel despues de agregar o modificar una pregunta.

---
Con ❤️, el equipo de Ciencia de Datos de GECI 😊
