$(window).on("load", function() {

    var numberOfQuestions;
    async function main() {
        numberOfQuestions = await getCount();
        let firstQuestion = await getQuestion(actualQuestion);
    }
    /**
     * Función que obtiene una pregunta
     * @param {*} questionID es el numero de pregunta
     */
    function getQuestion(questionID) {
        return new Promise(function(resolve, reject) {
            $.get(`/question/get?idQuestion=${questionID}`, (questionJSON) => {
                resolve(questionJSON);
            });
        });
    }
     * Función que obtiene el número total de preguntas
     */
    function getCount() {
        return new Promise(function(resolve, reject) {
            $.get(`/question/count`, (count) => {
                resolve(count);
            });
        });
    }

    main();
});