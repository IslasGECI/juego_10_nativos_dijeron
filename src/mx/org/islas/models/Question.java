package mx.org.islas.models;

import java.util.ArrayList;

/**
 * Esta clase representa una pregunta del juego. Contiene la pregunta y una lista con las respuestas que dieron los
 * encuestados.
 */
public class Question {
    private int id;
    private String question;
    private ArrayList<Answer> answers = new ArrayList<Answer>();

    /**
     * Crea una nueva pregunta.
     * @param id Identificador de la pregunta
     * @param question Texto de la pregunta
     */
    public Question(int id, String question) {
        this.id = id;
        this.question = question;
    }

    /**
     * Función para agregar una nueva respuesta a la pregunta
     * @param answer Respuesta a agregar
     */
    public void addAnswer(Answer answer) {
        this.answers.add(answer);
    }

    /**
     * Función para conocer la cantidad de respuestas que contiene esta pregunta
     * @return Cantidad de respuestas
     */
    public int getAnswerNumber() {
        return this.answers.size();
    }

    /**
     * Función para obtener el id de la pregunta
     * @return Id de la pregunta
     */
    public int getId() {
        return this.id;
    }

    /**
     * Función para obtener el texto de la pregunta
     * @return Texto de la pregunta
     */
    public String getQuestion() {
        return this.question;
    }
}
