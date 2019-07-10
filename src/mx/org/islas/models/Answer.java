package mx.org.islas.models;

/**
 * Esta clase representa una respuesta. Estas están compuestas por el texto de la respuesta y un valor que representa la
 * cantidad de personas que dijeron dicha respuesta.
 */
public class Answer {
    private String answer;
    private int count;

    public Answer(String answer, int count) {
        this.answer = answer;
        this.count = count;
    }

    /**
     * Regresa la cantidad de personas que dijeron esta respuesta
     * @return int Cantidad de personas que dijeron esta respuesta
     */
    public int getCount() {
        return count;
    }

    /**
     * Regresa el texto de la respuesta
     * @return String Texto de esta respuesta
     */
    public String getAnswer() {
        return answer;
    }
}
