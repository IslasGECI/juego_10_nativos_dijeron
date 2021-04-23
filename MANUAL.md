# Manual de instalación y ejecución

Este es el manual de instalación del juego _10 nativos dijeron_. Aquí veremos los pre-requisitos de sistema para poder instalar y ejecutar esta aplicacion, así como las instrucciones para hacerlo.

### Pre-requisitos del sistema 📋

Cosas que necesitas tener antes de poder ejecutar la aplicación:
- Tener un sistema operativo windows, ubuntu ó macOS
- [Descargar el comprimido de la aplicación llamado '10 nativos dijeron.zip'](https://drive.google.com/file/d/1HZ3-3eFd9Eqhr25x3BohHmzpRPeqenEu/view?usp=sharing)
- [Tener java Jre8 instalado](https://drive.google.com/file/d/1fsPZxkXY4lly9LJyNBw0ZrnrhmdTVgRX/view?usp=sharing)


### Instalación 🔧

La aplicación del juego _10 nativos dijeron_ se encuentra dentro del archivo comprimido llamado `10 nativos dijeron.zip`.
A continuacion se mostrara un ejemplo de como descomprimir este archivo:
1. Ubicar tu archivo descargado llamado `10 nativos dijeron.zip`
![image](https://user-images.githubusercontent.com/9456708/115905363-daafee80-a41a-11eb-9b2d-81e1a5f977de.png)


2. Hacer click derecho sobre este archivo y seleccionar `extraer todo`
![image](https://user-images.githubusercontent.com/9456708/115905851-8c4f1f80-a41b-11eb-9ee0-0bd7d1aa61d6.png)


3. Se nos pedira introducir una ubicacion para extraer el contenido del archivo comprimido. Este espacio se llena automaticamente pero si lo desearamos podriamos cambiar esta ubicacion siempre y cuando estemos consientes de esta misma. Despues seleccionamos la opción `extraer`.
![image](https://user-images.githubusercontent.com/9456708/115905916-aab51b00-a41b-11eb-8807-9aa49dc77d34.png)


Una vez descomprimido se optendra una carpeta llamada `10 nativos dijeron`.

Dentro de la carpeta `10 nativos dijeron` se encuentran los siguientes archivos:
- `src/surveys.xlsx`
- `10-nativos-dijeron.jar`
- `Ejecutar en Windows.bat`
- `Ejecutar en Linux.sh`
- `verificador.bat`  

![image](https://user-images.githubusercontent.com/9456708/115907538-dfc26d00-a41d-11eb-85d5-decc9257fd22.png)

### Ejecución 🕹
Para ejecutar la aplicacion primero debimos de haber extraido nuestro archivo comprimido y obtenido la carpeta `10 nativos dijeron`.
Posteriormente, debemos entrar en esta carpeta `10 nativos dijeron` y dependiendo de nuestro sistema operativo haremos lo siguiente:

#### En Windows:
- Dentro de la carpeta `10 nativos dijeron`
- Hacer doble click sobre el archivo `Ejecutar en Windows.bat` 
- Si es tu primera vez ejecutando la aplicación, surgirá la siguiente ventana emergente:
![image](https://user-images.githubusercontent.com/9456708/115908158-a5a59b00-a41e-11eb-9314-467fbb4fee34.png)

- Despues te aparecera lo siguiente:

![image](https://user-images.githubusercontent.com/9456708/115908201-b6eea780-a41e-11eb-86bc-d91365b19794.png)


- Despues aparecera una ventana emergente pidiendo acceso para la aplicación java. Donde debemos hacer click en `'Permitir Acceso'`
 
![image](https://user-images.githubusercontent.com/9456708/115612776-7a953d00-a2a0-11eb-9e12-2e7e42d02dc8.png)

- Si todo salio bien, obtedremos lo siguiente:

![image](https://user-images.githubusercontent.com/9456708/115908785-75123100-a41f-11eb-8ade-0d9813b12b27.png)

#### En Linux:
- Abrir una terminal en la dirección de la carpeta `10 nativos dijeron`
- Ejecutar el comando ./'Ejecutar en Linux.sh'

#### En MacOs:
- Aun por definir.

#### Como visualizar la aplicacion
Para finalizar, despues de una ejecución se nos abrira automaticamente el navegador con una pagina en concreto:

`http://localhost:8080/`.

Si la aplicación se ejecuto de forma correcta, esta se vera de la siguiente forma:

![image](https://user-images.githubusercontent.com/9456708/115908995-bb679000-a41f-11eb-9071-c68a7409e968.png)


__NOTA__: Si la pagina no aparece automaticamente, podemos ir a la direccion anterior de manera manual, donde podremos ver nuestra aplicacion ejecutandose. De lo contrario algun problema debio haber ocurrido y debemos notificarlo con el encargado del repositorio.

### Instrucciones para modificar las preguntas del juego de 10 nativos dijeron
Esta sección está planeada para que sepamos cómo modificar y agregar nuevas preguntas en el excel que posteriormente son cargadas en la aplicación:
1. Abrir la carpeta 'SRC'
2. Abrir el archivo de excel `survey.xlsx`. Aquí podremos modificar, agregar o quitar las preguntas deseadas.
3. Si todo sale bien obtendremos el siguiente resultado:

![image](https://user-images.githubusercontent.com/9456708/115909323-392b9b80-a420-11eb-8adb-1f2689be8c10.png)

__NOTA__: Debemos tener el archivo de Excel cerrado cuando ejecutemos la aplicación.  
__NOTA__: Si queremos modificar a las preguntas no debemos tener la aplicación en ejecución.  
__NOTA__: Siempre debemos guardar el archivo de Excel despues de agregar o modificar una pregunta.  

---
Con ❤️, el equipo de Ciencia de Datos de GECI 😊
