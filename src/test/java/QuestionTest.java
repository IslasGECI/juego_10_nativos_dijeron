package test.java;

import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import mx.org.islas.models.*;

public class QuestionTest {
    private final String questionText = "¿Qué comen las pardelas";
    private final int id = 1;
    private Question question;

    @BeforeMethod
    public void setUp() {
        question = new Question(id, questionText);
    }

    @Test
    public void getQuestion() {
        Assert.assertEquals(question.getQuestion(), questionText);
    }

    @Test
    public void getId() {
        Assert.assertEquals(question.getId(), id);
    }

    @Test
    public void getAnswerNumber() {
        Answer answer = new Answer(1, "ratones", 5);
        question.addAnswer(answer);
        Assert.assertEquals(question.getAnswerNumber(), 1);
    }

    @Test
    public void getAnswerNumberWhenVoid() {
        Assert.assertEquals(question.getAnswerNumber(), 0);
    }
}
