
    /**
     * Obtiene una pregunta
     * @param {number} questionID es el numero de pregunta
     */
    function getQuestionByID(questionID) {
        return new Promise(function(resolve, reject) {
            $.get(`/questions/${questionID}`, (questionJSON) => {
                resolve(questionJSON);
            });
        });
    }

    /**
     * Obtiene todas las preguntas
     */
    function getRoundInformation() {
        return new Promise(function(resolve, reject) {
            $.get(`questions/`, (questionJSON) => {
                resolve(questionJSON);
            });
        });
    }
    /**
     * Reproduce los sonidos
     * @param {string} audioPath es la ruta en la que se encuentra el audio por reproducir
     */
    function playSound(audioPath){
        let sound = new Audio (audioPath);
        sound.play();
    }

    /**
     * Agrega clase hide que se encuentra en el css
     * @param {string} element elemento al que se le quiere agregar clase hide
     */
    function addClassHideToElement(element){
        for (let i=0; i <  MAXIMUM_OF_ANSWERS_TO_SHOW; i++){
            $(`#${element}-${i}`).addClass("hide");
        }
    }
    /**
     * Remueve clase hide que se encuentra en el css
     * @param {string} element elemento de html al que se le quiere remover la clase hide
     */
    function removeClassHideFromElement(element){
        for (let i=0; i <  MAXIMUM_OF_ANSWERS_TO_SHOW; i++){
            $(`#${element}-${i}`).removeClass("hide");
        }
    }

    /**
     * Agrega listener a botón de respuesta incorrecta muestra imagen y reproduce sonido
     */
    function showWrongAnswerMessage(){
        $("#wrong_answer").click(function (){
            $("#error_image").show(1).delay(800).hide(1);
            playSound("sound/wrong-answer.mp3");
        });
    }

    /**
     * Muestra los botones de respuesta dependiendo de la cantidad de respuestas por pregunta
     * @param {question} question es la pregunta actual
     */
    function showAnswerButtons(question){
        for (let i=question.answers.length; i <  MAXIMUM_OF_ANSWERS_TO_SHOW; i++){
            $(`#button-${i}`).addClass("hide");
        }
    }

    /**
     * Muestra el botón de siguiente pregunta
     */
    function showNextQuestionButton(){
        $("#next_question").removeClass("hide");
    }
    /**
     * Oculta el botón de siguiente pregunta cuando el límite de preguntas por hacer,
     * se ha alcanzado
     */
    function hideNextQuestionButton(){
        $("#next_question").addClass("hide");
    }