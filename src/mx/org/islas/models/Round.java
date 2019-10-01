package mx.org.islas.models;

import java.lang.reflect.Array;
import java.util.ArrayList;

/**
 * Esta clase representa un round del juego. Contiene el número total de preguntas
 * y las preguntas con sus respuestas
 */

public class Round {
    private int count;
    private ArrayList<Question> questions = new ArrayList<Question>();


    /**
     * Crea una ronda
     * @param count cantidad de preguntas de la ronda
     * @param questions preguntas de la ronda
     */
    public Round(int count, ArrayList<Question> questions){
        this.count = count;
        this.questions = questions;
    }

    /**
     * Función para agregar una nueva pregunta al arraylist de preguntas
     * @param question
     */
    public void addQuestion(Question question){
        this.questions.add(question);
    }

    /**
     * Función para conocer la cantidad de preguntas que contiene el arraylist de preguntas
     * @return cantidad de preguntas en la ronda
     */
    public int getQuestionsNumber(){
        this.count =  this.questions.size();
        return count;
    }

    /**
     * Función para obtener las preguntas
     * @return arraylist con las preguntas de la ronda
     */
    public ArrayList<Question> getQuestions(){
        return this.questions;
    }

    /**
     * Función que obtiene la ronda
     * @return un mensaje con la cantidad total de preguntas y las preguntas
     */
    public String getRound(){
        return getQuestionsNumber() + " " + getQuestions();
    }
}
