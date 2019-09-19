
    /**
     * Obtiene una pregunta
     * @param {number} questionID es el numero de pregunta
     */
    function getQuestionByID(questionID) {
        return new Promise(function(resolve, reject) {
            $.get(`/question/get?idQuestion=${questionID}`, (questionJSON) => {
                resolve(questionJSON);
            });
        });
    }
    /**
     * Obtiene el número total de preguntas
     */
    function getQuestionCount() {
        return new Promise(function(resolve, reject) {
            $.get(`/question/count`, (count) => {
                resolve(count);
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
        for (let i=1; i<6; i++){
            $(`#${element}-${i}`).addClass("hide");
        }
    }
    /**
     * Remueve clase hide que se encuentra en el css
     * @param {string} element elemento de html al que se le quiere remover la clase hide
     */
    function removeClassHide2Element(element){
        for (let i=1; i<6; i++){
            $(`#${element}-${i}`).removeClass("hide");
        }
    }

    /**
     * Agrega listener a botón de respuesta incorrecta muestra imagen y reproduce sonido
     */
    function showErrorAnswerMessage(){
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
        for (let i=question.answers.length+1; i<6; i++){
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