const MAXIMUM_OF_ANSWERS_TO_SHOW = 5;
$(window).on("load", function() {

    var currentQuestion = 0;
    var numberOfQuestions;
    var roundScore = 0;
    var team1Score = 0, team2Score = 0;
    var round;

    async function main() {
        round = await getRoundInformation();
        numberOfQuestions = round.questionsNumber;
        let firstQuestion = round.questions[currentQuestion];
        displayQuestion(firstQuestion);
        addListenerToAnswerButtons();
        goToNextQuestion();
        assignScoreToTeam();
        showWrongAnswerMessage();
        setInitialScoreOnBoards();
    }

    /**
     * Muestra preguntas en el tablero manteniendo las respuestas ocultas
     * @param {question} es la pregunta a mostrar
     */
    function displayQuestion(question) {
        $("#center_board").html(`<h2>${question.id}. ${question.question}</h2>`);
        let orderedAnswers = orderAnswers(question);
        for(let answerIndex in orderedAnswers) {
            $("#center_board").append(`<div id="answer-${parseInt(answerIndex)}" class="hide" ><p>${question.answers[answerIndex].answer.trim()}</p><span>${question.answers[answerIndex].count}</span></div>`);
        }
        showAnswerButtons(question);
        $("#next_question").addClass("hide");
    }

    /**
     * Agrega audio al seleccionar un botón de respuesta y muestra el 
     * puntaje acumulado en el tablero central
     */
    function addListenerToAnswerButtons() {
        for (let i = 0; i <  MAXIMUM_OF_ANSWERS_TO_SHOW; i++){
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
    async function goToNextQuestion(){
        $("#next_question").click(async function(){
            currentQuestion++;
            let newQuestion = await getQuestionByID(currentQuestion);
            removeClassHideFromElement("button");
            playSound("sound/new-round.mp3");
            displayQuestion(newQuestion);
            hideNextQuestionButton();
        });
    }
    
    /**
     * Agrega listeners a los botones que asignan puntaje a los equipos
     */
    function assignScoreToTeam(){
        for(let i = 1; i<=2; i++){
            $(`#team_${i}`).click(() => {
                isTeamOne = i === 1;
                let scoreTeam = isTeamOne ? team1Score += roundScore: team2Score += roundScore;
                roundScore = 0;
                updateScore(scoreTeam, `${isTeamOne ? "left" : "right"}_score`);
            });
        }
    }

    /**
     * Actualiza puntaje del equipo en el tablero
     * @param {number} newScore nuevo puntaje para asignar a un equipo
     * @param {string} idScoreTeam id del div que despliega puntaje 
     */
    function updateScore(newScore, idScoreTeam){        
        $(`#${idScoreTeam}`).html(`<p>${newScore}</p>`);
        addClassHideToElement("button");
        removeClassHideFromElement("answer");
        $("#center_score").html(`<p>${roundScore}</p>`);
        if(currentQuestion < numberOfQuestions -1 ){
            showNextQuestionButton();
        }else{
            hideNextQuestionButton();
        }
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
     * Inicializa los puntajes de los tableros
     */
    function setInitialScoreOnBoards(){
        $("#board .score_board").html(`<p>${roundScore}</p>`);
    }

    main();
});
