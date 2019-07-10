package mx.org.islas.data;

import mx.org.islas.models.Question;
import org.apache.commons.compress.archivers.dump.InvalidFormatException;
import org.apache.poi.ss.usermodel.*;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
public class ExcelReader{
    public static final String FILE_PATH = "src/Juego.xlsx";

    public static void main (String args []) throws IOException, InvalidFormatException {

        //Se crea un libro de excel con lo que se encuentra en el archivo
        Workbook workbook = WorkbookFactory.create(new File(FILE_PATH));

        //Se tiene el numero de hojas del archivo excel
        System.out.println("El libro tiene " + workbook.getNumberOfSheets() + " hojas : ");

        //Itera todas las hojas y obtiene el nombre de las hojas
        System.out.println("Obteniendo hojas usando Iterator");
        Iterator<Sheet> sheetIterator = workbook.sheetIterator();
        while (sheetIterator.hasNext()) {
            Sheet sheet = sheetIterator.next();
            System.out.println("=> " + sheet.getSheetName());
        }

        //Recorre todas los renglones y columnas en una hoja
        Sheet sheet = workbook.getSheetAt(0);

        //Crea formato para los datos para que al obtener cada valor de una celda como String
        DataFormatter dataFormatter = new DataFormatter();

        ArrayList<Question> question_list = new ArrayList<Question>();

        System.out.println("Recorriendo columnas y renglones");
        int rowNumber = 0;
        Iterator<Row> rowIterator = sheet.rowIterator();
        while(rowIterator.hasNext()){
            Row row = rowIterator.next();

            // Se salta los encabezados de las columnas
            if(rowNumber == 0) {
                rowNumber++;
                continue;
            }
            //Itera las columnas del renglon actual
            Iterator<Cell> cellIterator = row.cellIterator();
            int cellIndex = 0;
            int id = 0;
            String question_string = "";
            while(cellIterator.hasNext()){
                Cell cell = cellIterator.next();
                String cellValue = dataFormatter.formatCellValue(cell);
                if (cellIndex == 0){
                    id = Integer.parseInt(cellValue);
                }else if (cellIndex ==1){
                    question_string = cellValue;
                }
                cellIndex++;
            }
            Question question_object = new Question(id,question_string);
            question_list.add(question_object);
            System.out.println(question_object.getId() + " " + question_object.getQuestion());
        }

        //Recorre todas los renglones y columnas en una hoja
        Sheet sheet2 = workbook.getSheetAt(1);

        System.out.println("Recorriendo columnas y renglones");
        int rowNumber2 = 0;
        Iterator<Row> rowIterator2 = sheet2.rowIterator();
        while(rowIterator2.hasNext()){
            Row row2 = rowIterator2.next();

            // Se salta los encabezados de las columnas
            if(rowNumber2 == 0) {
                rowNumber2++;
                continue;
            }
            //Itera las columnas del renglon actual
            Iterator<Cell> cellIterator2 = row2.cellIterator();
            int cellIndex2 = 0;
            int id2 = 0, score = 0, i = 0;
            String answer_string = "";
            Question question_object2 = null;
            Answer answer_object = null;
            ArrayList<Answer> answer_list = new ArrayList<Answer>();
            while(cellIterator2.hasNext()){
                Cell cell2 = cellIterator2.next();
                String cellValue2 = dataFormatter.formatCellValue(cell2);
                if (cellIndex2 == 0){
                    id2 = Integer.parseInt(cellValue2);
                    if(id2 == question_list.get(i).getId()){
                        question_object2 = question_list.get(i);
                        answer_object = new Answer(answer_string, score);
                        question_object2.addAnswer(answer_object);
                        System.out.println(answer_object.getAnswer() + " " + answer_object.getCount());
                    }
                }else if (cellIndex2 == 1){
                    answer_string = cellValue2;
                }else if (cellIndex2 == 2){
                    score = Integer.parseInt(cellValue2);
                }
                cellIndex2++;
                i++;
            }
        }
        //Se cierra el libro
        workbook.close();
    }
}