package test.java;

import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import mx.org.islas.models.*;

/**
 * Esta clase prueba la clase Question
 */
public class QuestionTest {
    private final String questionText = "¿Qué comen las pardelas";
    // Id de la pregunta de prueba
    private final int id = 1;
    private Question question;

    /**
     * Este método se ejecuta antes de correr las pruebas
     */
    @BeforeMethod
    public void setUp() {
        question = new Question(id, questionText);
    }

    /**
     * Prueba que verifica que se puede obtener el texto de la pregunta
     */
    @Test
    public void getQuestion() {
        Assert.assertEquals(question.getQuestion(), questionText);
    }

    /**
     * Prueba que verifica que se puede obtener el id de la pregunta
     */
    @Test
    public void getId() {
        Assert.assertEquals(question.getId(), id);
    }

    /**
     * Prueba que verifica que se puede obtener el número de respuestas
     */
    @Test
    public void getAnswerNumber() {
        Answer answer = new Answer(1, "ratones", 5);
        question.addAnswer(answer);
        Assert.assertEquals(question.getAnswerNumber(), 1);
    }

    /**
     * Prueba que verifica que cuando no hay respuestas agregadas a la pregunta regrese 0
     */
    @Test
    public void getAnswerNumberWhenVoid() {
        Assert.assertEquals(question.getAnswerNumber(), 0);
    }
}
