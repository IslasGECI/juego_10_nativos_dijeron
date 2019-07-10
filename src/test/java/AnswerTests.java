package test.java;

import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import mx.org.islas.models.*;

/**
 * Clase para probar la clase Answer
 */
public class AnswerTests {
    final String answerText = "Pardela";
    // Variable que contiene la cantidad de personas que contestaron la respuesta de prueba
    final int count = 4;
    private Answer answer;

    /**
     * Método que se ejecuta al iniciar cada una de las pruebas
     */
    @BeforeMethod
    public void setUp() {
        answer = new Answer(answerText, count);
    }

    /**
     * Prueba que verifica que se obtenga el texto de la respeusta de forma correcta
     */
    @Test
    public void getAnswer() {
        Assert.assertEquals(answer.getAnswer(), answerText);;
    }

    /**
     * Prueba que verifica que se obtenga la cantidad de personas que contestaron esto de manera correcta
     */
    @Test
    public void getCount() {
        Assert.assertEquals(answer.getCount(), count);
    }
}
