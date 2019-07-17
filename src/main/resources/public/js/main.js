$(window).on("load", function() {

    var numberOfQuestions;
    async function main() {
        numberOfQuestions = await getCount();
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

    main();
});