$(window).on("load", function() {

    var actualQuestion = 0;
    var numberOfQuestions;
    async function main() {
        numberOfQuestions = await getCount();
        let firstQuestion = await getQuestion(actualQuestion);
        drawQuestion(firstQuestion);
    }

    /**
     * Función que muestra preguntas en el tablero manteniendo
     * las respuestas ocultas
     * @param {} question 
     */
    function drawQuestion(question) {
        $("#center_board").html(`<h2>${question.id}. ${question.question}</h2>`);
        let orderedAnswers = orderAnswers(question);
        for(let answerIndex in orderedAnswers) {
            $("#center_board").append(`<div id="answer-${parseInt(answerIndex)+1}" class="hide" ><p>${question.answers[answerIndex].answer.trim()}</p><span>${question.answers[answerIndex].count}</span></div>`);
        }
        for (let i=question.answers.length+1; i<6; i++){
            $(`#button${i}`).addClass("hide");
        }
        $("#next_question").addClass("hide");
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
    /**
     * Función que obtiene el número total de preguntas
     */
    function getCount() {
        return new Promise(function(resolve, reject) {
            $.get(`/question/count`, (count) => {
                resolve(count);
            });
        });
    }

    /**
     * Función que ordena las respuestas de las preguntas
     * @param {*} question es la pregunta a la que se le ordenarán
     * las respuestas
     */
    function orderAnswers(question){
        return question.answers.sort((a,b) => {
            if ( a.count < b.count ){
                return 1;
            }
            if ( a.count > b.count ){
                return -1;
            }
                return 0;
        });
    }

    main();
});
