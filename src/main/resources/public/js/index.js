    var roundScore = 0;

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
     */
    function setInitialScore2Boards(){
        $("#center_score").html(`<p>${roundScore}</p>`);
        $("#left_score").html(`<p>${roundScore}</p>`);
        $("#right_score").html(`<p>${roundScore}</p>`);
    }
    /**
     * @param {string} audioPath es la ruta en la que se encuentra el audio por reproducir
     */
    function playSound(audioPath){
        var sound = new Audio (audioPath);
        sound.play();
    }

    /**
     * Agrega clase hide que se encuentra en el css
     * @param {string} element elemento al que se le quiere agregar clase hide
     */
    function addClassHide2Element(element){
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