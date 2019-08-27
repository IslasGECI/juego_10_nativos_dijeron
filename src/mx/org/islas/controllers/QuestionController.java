package mx.org.islas.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import mx.org.islas.models.Question;
import mx.org.islas.data.ExcelReader;

import java.io.IOException;
import java.util.ArrayList;

/**
 * Clase que se encarga de atender las peticiones de nuevas preguntas
 */
@RestController
public class QuestionController {

    public static final String FILE_PATH = "src/survey.xlsx";

    /**
     * Método que regresar una pregunta cuando se haga la petición
     * @return JSON que representa una pregunta
     */
    @RequestMapping("/question/get")
    public Question getQuestion(@RequestParam(value="idQuestion", defaultValue = "0") int idQuestion) throws IOException {
        ArrayList<Question> questions = ExcelReader.loadQuestions(FILE_PATH);
        return questions.get(idQuestion);
    }

    /**
     * Método que regresa la cantidad de preguntas disponibles
     * @return Cantidad de preguntas disponibles
     */
    @RequestMapping("/question/count")
    public int getQuestionCount() throws IOException {
        ArrayList<Question> questions = ExcelReader.loadQuestions(FILE_PATH);
        return questions.size();
    }
}
