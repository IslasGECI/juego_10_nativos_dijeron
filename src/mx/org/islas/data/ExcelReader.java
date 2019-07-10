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

            Question question_object;

            int cellIndex = 0;
            while(cellIterator.hasNext()){
                Cell cell = cellIterator.next();
                String cellValue = dataFormatter.formatCellValue(cell);

                if (cellIndex == 0){
                    
                }
                System.out.print(cellValue + "\t");
            }
            System.out.println();
        }
        //Se cierra el libro
        workbook.close();
    }
}