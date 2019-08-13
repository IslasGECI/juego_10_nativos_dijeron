$(window).on("load", function() {

    var actualQuestion = 0;
    var numberOfQuestions;
    var roundScore = 0;
    var team1Score = 0, team2Score = 0;

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
     * Muestra preguntas en el tablero manteniendo las respuestas ocultas
     * @param {question} es la pregunta a mostrar
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
     * Agrega audio al seleccionar un botón de respuesta y muestra el 
     * puntaje acumulado en el tablero central
     */
    function addListener2AnswerButtons() {
        for (let i=1; i<6; i++){
            $(`#button-${i}`).click(function (){
                playSound("sound/right-answer.mp3");
                $(`#answer-${i}`).delay(300).fadeIn(1000);
                roundScore += parseInt($(`#answer-${i} span`).text());
                $("#center_score").html(`<p>${roundScore}</p>`);
                $(this).addClass("hide");
            })
        }
    }

    /**
     * Muestra la siguiente pregunta y agrega efecto de sonido para nueva ronda
     */
    async function go2NextQuestion(){
        $("#next_question").click(async function(){
            actualQuestion++;
            let newQuestion = await getQuestionByID(actualQuestion);
            removeHideClass("button");
            playSound("sound/new-round.mp3");
            displayQuestion(newQuestion);
            hideNextQuestionButton();
        });
    }
    /**
     * Agrega listeners a los botones que asignan puntaje a los equipos
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
     * Actualiza puntaje del equipo en el tablero
     * @param {number} newScore nuevo puntaje para asignar a un equipo
     * @param {string} idScoreTeam id del div que despliega puntaje 
     */
    function updateScore(newScore, idScoreTeam){        
        $(`#${idScoreTeam}`).html(`<p>${newScore}</p>`);
        addHideClass("button");
        removeHideClass("answer");
        $("#center_score").html(`<p>${roundScore}</p>`);
        showNextQuestionButton();
    }


    /**
     * Ordena las respuestas de las preguntas de acuerdo a la cantidad de personas que 
     * dijeron una respuesta
     * @param {question} question es la pregunta a la que se le ordenarán las respuestas
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
     * Muestra el botón de siguiente pregunta
     */
    function showNextQuestionButton(){
        if(actualQuestion < numberOfQuestions -1 ){
            $("#next_question").removeClass("hide");
        }
    }
    /**
     * Oculta el botón de siguiente pregunta cuando el límite de preguntas por hacer,
     * se ha alcanzado
     */
    function hideNextQuestionButton(){
        if(actualQuestion < numberOfQuestions -1 ){
            $("#next_question").addClass("hide");
        }
    }
    
    main();
});
