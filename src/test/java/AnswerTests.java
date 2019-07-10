package test.java;

import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import mx.org.islas.models.*;

public class AnswerTests {
    final String respuesta = "fd";
    final int count = 4;
    private Answer answer;

    @BeforeMethod
    public void setUp() {
        answer = new Answer(respuesta, count);
    }

    @Test
    public void getAnswer() {
        Assert.assertEquals(answer.getAnswer(), respuesta);;
    }

    @Test
    public void getCount() {
        Assert.assertEquals(answer.getCount(), count);
    }
}
