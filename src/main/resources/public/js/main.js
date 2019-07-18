$(window).on("load", function() {

    var actualQuestion = 0;
    var numberOfQuestions;
    var roundScore = 0;
    var rightAudio = new Audio("sound/right-answer.mp3");
    var newRoundAudio = new Audio("sound/new-round.mp3");
    async function main() {
        numberOfQuestions = await getCount();
        let firstQuestion = await getQuestion(actualQuestion);
        drawQuestion(firstQuestion);
        addListener2AnswerButtons();
        go2NextQuestion();
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
     * Función que agrega audio al seleccionar un botón de respuesta
     * y muestra el puntaje acumulado en el tablero central
     */
    function addListener2AnswerButtons() {
        for (let i=1; i<6; i++){
            $(`#button${i}`).click(function (){
                rightAudio.play();
                $(`#answer-${i}`).delay(300).fadeIn(1000);
                roundScore += parseInt($(`#answer-${i} span`).text());
                $("#center_score").html(`<p>${roundScore}</p>`);
                $(this).addClass("hide");
            })
        }
    }

    /**
     * Función que va hacia la siguiente pregunta y agrega efecto de sonido 
     * para nueva ronda
     */
    async function go2NextQuestion(){
        $("#next_question").click(async function(){
            actualQuestion++;
            let newQuestion = await getQuestion(actualQuestion);
            roundScore = 0;
            removeHideClass("button");
            newRoundAudio.play();
            drawQuestion(newQuestion);
            hideNextQuestionButton();
        });
    }
    /**
     * Función que remueve clase hide que se encuentra en el css
     * @param {*} element elemento de html al que se le quiere
     * remover la clase hide
     */
    function removeHideClass(element){
        for (let i=1; i<6; i++){
            $(`#${element}${i}`).removeClass("hide");
        }
    }
    /**
     * Función que oculta el botón de siguiente pregunta cuando
     * el límite de preguntas por hacer, se ha alcanzado
     */
    function hideNextQuestionButton(){
        if(actualQuestion < numberOfQuestions -1 ){
            $("#next_question").addClass("hide");
        }
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
