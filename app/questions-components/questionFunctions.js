const QUESTION_FUNCTIONS = (function() {

    let _QUESTION_CLASSES = QUESTIONS_COMPONENTS.questionClasses;
    let _ANSWER_CLASSES = QUESTIONS_COMPONENTS.answerClasses;

    function draw ($question, $answer1, $answer2, $answer3, question) {
        CREATORS.addTextNode($question, question[_QUESTION_CLASSES[0]])
        CREATORS.addTextNode($answer1, question[_QUESTION_CLASSES[1]])
        CREATORS.addTextNode($answer2, question[_QUESTION_CLASSES[2]])
        CREATORS.addTextNode( $answer3, question[_QUESTION_CLASSES[3]])
    };

    function playerAnswer (e) {
        if (e.target.classList.contains(_QUESTION_CLASSES[6])) {
            e.target.classList.add(_QUESTION_CLASSES[7]);
            e.target.classList.add(_ANSWER_CLASSES[0]);
        }
    };

    function correctAnswer (element, question, poits) {
        element.classList.add(_ANSWER_CLASSES[1]);
        return poits;
    };

    function wrongAnswer (element, section, question) {
        let correct = section.querySelector(`.${question[_QUESTION_CLASSES[4]]}`);
        correct.classList.add(_ANSWER_CLASSES[1]);
        element.classList.add(_ANSWER_CLASSES[2]);
        let points = 0;
        return points;
    };

    function checkAnswer (element, section, question, poits) {
        if (element.classList.contains(question[_QUESTION_CLASSES[4]])) {
            return points = correctAnswer(element, question, poits);
        }
        return points = wrongAnswer(element, section, question)
    };

    function end (element, section, question, poits) {
        if (element.classList.contains(question[_QUESTION_CLASSES[4]])) {
            return points = correctAnswer(element, question, poits);
        }
        return points = wrongAnswer(element, section, question)
    };

    function bomb (section, question, player) {
        if (+player.getBomb() !== 0){
            let answers = section.querySelectorAll('.answer');
            for (let variable of answers) {
                if(!variable.classList.contains(`${question['correct']}`)){
                    let bomb = +player.getBomb() - 1;
                    player.setBomb(bomb);
                    return variable.classList.add(_ANSWER_CLASSES[2]);
                }
            }

        }
        alert('No bomb');
    };

    function hook (section, question, player) {
        if (+player.getHook() !== 0) {
            let answers = section.querySelectorAll('.answer');
            for (let variable of answers) {
                if(variable.classList.contains(`${question['correct']}`)){
                    let hook = +player.getHook() - 1;
                    player.setHook(hook);
                    return variable.classList.add(_ANSWER_CLASSES[0]);
                }
            }
        }
        alert('No hook');
    };

    function pipe (element, section, question, poits) {


    };


    return {
        draw: draw,
        playerAnswer: playerAnswer,
        correctAnswer: correctAnswer,
        wrongAnswer: wrongAnswer,
        checkAnswer: checkAnswer,
        end: end,
        bomb: bomb,
        hook: hook

    };

}());
