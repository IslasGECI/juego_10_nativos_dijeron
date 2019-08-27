package mx.org.islas.data;

import mx.org.islas.models.*;
import org.apache.commons.compress.archivers.dump.InvalidFormatException;
import org.apache.poi.ss.usermodel.*;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;

public class ExcelReader{

    /**
     * Método que se encarga de leer las preguntas desde el archivo
     * @param workbook Workbook donde se encuentran las preguntas
     * @return Lista de preguntas cargadas desde el archivo
     */
    private static ArrayList<Question> readQuestions(Workbook workbook) {
        ArrayList<Question> question_list = new ArrayList<Question>();
        Sheet questionsSheet = workbook.getSheetAt(0);
        Iterator<Row> rowIterator = questionsSheet.rowIterator();
        rowIterator.next();
        while(rowIterator.hasNext()){
            question_list.add(getQuestionFromRow(rowIterator.next()));
        }
        return question_list;
    }

    /**
     * Método para construir una pregunta a partir de un renglón del excel
     * @param row Renglón de datos
     * @return Pregunta construida a partir de los datos del renglón
     */
    private static Question getQuestionFromRow(Row row) {
        DataFormatter dataFormatter = new DataFormatter();
        Cell indexCell = row.getCell(0);
        String cellValue = dataFormatter.formatCellValue(indexCell);
        int id = Integer.parseInt(cellValue);
        Cell questionCell = row.getCell(1);
        String questionValue = dataFormatter.formatCellValue(questionCell);
        return new Question(id, questionValue);
    }

    /**
     * Método que se encarga de leer las preguntas desde el archivo
     * @param workbook Workbook donde se encuentran las preguntas
     * @return Lisra de respuestas cargadas desde el archivo
     */
    private static ArrayList<Answer> readAnswers(Workbook workbook) {
        ArrayList<Answer> answer_list = new ArrayList<Answer>();
        Sheet answerSheet = workbook.getSheetAt(1);
        Iterator<Row> rowIterator = answerSheet.rowIterator();
        rowIterator.next();
        while(rowIterator.hasNext()){
            answer_list.add(getAnswerFromRow(rowIterator.next()));
        }
        return answer_list;
    }

    /**
     * Método para construir una respeusta a partir de un renglón de datos
     * @param row Renglón de datos
     * @return Respuesta construida a partir de los datos del renglón
     */
    private static Answer getAnswerFromRow(Row row) {
        DataFormatter dataFormatter = new DataFormatter();
        Cell idCell = row.getCell(0);
        String idValue = dataFormatter.formatCellValue(idCell);
        int idQuestion = Integer.parseInt(idValue);
        Cell answerCell = row.getCell(1);
        String answerValue = dataFormatter.formatCellValue(answerCell);
        Cell countCell = row.getCell(2);
        String countValue = dataFormatter.formatCellValue(countCell);
        int count = Integer.parseInt(countValue);
        return new Answer(idQuestion, answerValue, count);
    }

    /**
     * Método encargado de agregar las respuestas a las preguntas correspondientes
     * @param questions Lista de preguntas donde se agregarán las respuestas
     * @param answers Lista de respuestas a agregar
     */
    private static void populateQuestionWithAnswers(ArrayList<Question> questions, ArrayList<Answer> answers) {
        for(Answer answer : answers) {
            for (Question question : questions) {
                if (question.getId() == answer.getQuestionID()) {
                    question.addAnswer(answer);
                    break;
                }
            }
        }
    }

    /**
     * Método que se encarga de leer el archivo de datos
     * @param file_path Dirección al archivo de datos
     * @return Lista de preguntas cargadas desde el archivo de datos
     * @throws IOException No existe el archivo
     * @throws InvalidFormatException No es el formato adecuado del archivo
     */
    public static ArrayList<Question> loadQuestions(String file_path) throws IOException, InvalidFormatException {
        Workbook workbook = WorkbookFactory.create(new File(file_path));
        ArrayList<Question> questions = readQuestions(workbook);
        ArrayList<Answer> answers = readAnswers(workbook);
        populateQuestionWithAnswers(questions, answers);
        workbook.close();
        return questions;
    }
}