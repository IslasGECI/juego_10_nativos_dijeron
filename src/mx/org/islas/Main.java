package mx.org.islas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Esta es la clase que inicializa el Framework spring, es el encargado de servir los archivos estáticos y escuchar las
 * peticiones al servidor web
 */
@SpringBootApplication
public class Main {

    /**
     * Aquí se inicializa el framework spring
     * @param args Argumentos de entrada provenientes de la terminal
     */
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

}