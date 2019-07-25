$(window).on("load", function() {

    var actualQuestion = 0;
    var numberOfQuestions;
    var roundScore = 0;
    var team1Score = 0, team2Score = 0;
    var wrongAudio = new Audio("sound/wrong-answer.mp3");
    var rightAudio = new Audio("sound/right-answer.mp3");
    var newRoundAudio = new Audio("sound/new-round.mp3");

    async function main() {
        numberOfQuestions = await getQuestionCount();
        let firstQuestion = await getQuestionByID(actualQuestion);
        displayQuestion(firstQuestion);
        addListener2AnswerButtons();
        go2NextQuestion();
        assignScore2Team();
        showErrorAnswerMessage();
        setInitialScore2Boards();
    }

    /**
     * Función que muestra preguntas en el tablero manteniendo
     * las respuestas ocultas
     * @param {} question 
     */
    function displayQuestion(question) {
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
    function getQuestionByID(questionID) {
        return new Promise(function(resolve, reject) {
            $.get(`/question/get?idQuestion=${questionID}`, (questionJSON) => {
                resolve(questionJSON);
            });
        });
    }
    /**
     * Función que obtiene el número total de preguntas
     */
    function getQuestionCount() {
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
            let newQuestion = await getQuestionByID(actualQuestion);
            removeHideClass("button");
            newRoundAudio.play();
            displayQuestion(newQuestion);
            hideNextQuestionButton();
        });
    }
    /**
     * Función que agrega listeners a los botones que asignan puntaje
     * a los equipos
     */
    function assignScore2Team(){
        $("#team_1").click(() => {
            team1Score += roundScore;
            roundScore = 0;
            updateScore(team1Score, "left_score");
        });
        $("#team_2").click(() => {
            team2Score += roundScore;
            roundScore = 0;
            updateScore(team2Score, "right_score");
        });
    }
    /**
     * Función que actualiza puntaje del equipo en el tablero
     * @param {*} newScore nuevo puntaje para asignar a un equipo
     * @param {*} idScoreTeam id del div que despliega puntaje 
     */
    function updateScore(newScore, idScoreTeam){        
        $(`#${idScoreTeam}`).html(`<p>${newScore}</p>`);
        addHideClass("button");
        removeHideClass("answer");
        $("#center_score").html(`<p>${roundScore}</p>`);
        showNextQuestionButton();
    }

    /**
     * Función que agrega listener a botón de respuesta incorrecta
     * muestra imagen y reproduce sonido
     */
    function showErrorAnswerMessage(){
        $("#wrong_answer").click(function (){
            $("#error_image").show(1).delay(800).hide(1);
             wrongAudio.play();
        });
    }

    /**
     * Función que agrega clase hide que se encuentra en el css
     * @param {} element elemento al que se le quiere 
     * agregar clase hide
     */
    function addHideClass(element){
        for (let i=1; i<6; i++){
            $(`#${element}${i}`).addClass("hide");
        }
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
     * Función que  muestra el botón de siguiente pregunta
     */
    function showNextQuestionButton(){
        if(actualQuestion < numberOfQuestions -1 ){
            $("#next_question").removeClass("hide");
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
     * Función que ordena las respuestas de las preguntas de acuerdo 
     * a la cantidad de personas que dijeron una respuesta
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
    /**
     * Función que inicializa los puntajes de los tableros
     */
    function setInitialScore2Boards(){
        $("#center_score").html(`<p>${roundScore}</p>`);
        $("#left_score").html(`<p>${roundScore}</p>`);
        $("#right_score").html(`<p>${roundScore}</p>`);
    }

    main();
});
