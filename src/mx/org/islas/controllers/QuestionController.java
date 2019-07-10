package mx.org.islas.controllers;

import mx.org.islas.models.Answer;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import mx.org.islas.models.Question;

import java.util.ArrayList;

/**
 * Clase que se encarga de atender las peticiones de nuevas preguntas
 */
@RestController
public class QuestionController {

    /**
     * Método que regresar una pregunta cuando se haga la petición
     * @return JSON que representa una pregunta
     */
    @RequestMapping("/question/get")
    public Question getQuestion(@RequestParam(value="exclude") ArrayList idToExclude) {
        System.out.println(idToExclude);
        Question q = new Question(1, "¿Cuál es el animal más común en Natividad");
        q.addAnswer(new Answer("Pardela", 5));
        return q;
    }

    /**
     * Método que regresa la cantidad de preguntas disponibles
     * @return Cantidad de preguntas disponibles
     */
    @RequestMapping("/question/count")
    public int getQuestionCount() {
        return 1;
    }
}
