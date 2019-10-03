package mx.org.islas.controllers;

import mx.org.islas.data.ExcelReader;
import mx.org.islas.models.Question;
import mx.org.islas.models.Round;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.ArrayList;

/**
 * Clase que se encarga de atender las peticiones de preguntas de un round
 */
@RestController
public class RoundController {

    public static final String FILE_PATH = "src/survey.xlsx";

    /**
     * Método que regresará todas las rondas
     */
    @RequestMapping("rounds/")
    public ArrayList<Round> getRounds() throws IOException {
        ArrayList<Question> questions = ExcelReader.loadQuestions(FILE_PATH);
        ArrayList<Round> rounds = ExcelReader.populateRound(questions);
        return rounds;
    }

    /**
     * Método que regresará la información de una ronda
     */
    @RequestMapping("questions/") //round/questions
    public Round getQuestions() throws IOException {
        ArrayList<Question> questions = ExcelReader.loadQuestions(FILE_PATH);
        Round round = new Round (questions.size(), questions);
        return round;
    }
}
