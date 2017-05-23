const QUESTIONS_COMPONENTS = (function() {

    const question = {
        pageElement: {
            type: 'div',
        },
        innerPageElements: [{
            type: 'p',
            className: ['p', 'question']
        }, {
            type: 'p',
            className: ['first', 'answer']
        }, {
            type: 'p',
            className: ['second', 'answer']
        }, {
            type: 'p',
            className: ['third', 'answer']
        }, {
            type: 'div',
            className: ['bomb-q']
        },  {
            type: 'div',
            className: ['pipe-q']
        }, {
            type: 'div',
            className: ['hook-q']
        }]

    };

    const $ELEMENTS = {normal: question, speed: question, battle: question}

    const TYPES = ['normal', 'speed', 'battle'];

    const  QUESTION_CLASSES = ['question', 'first', 'second', 'third', 'correct', 'p', 'answer', 'hover'];

    const  ANSWER_CLASSES = ['player-answer', 'correct-answer', 'wrong-answer'];

    return {
        elements: $ELEMENTS,
        types: TYPES,
        questionClasses: QUESTION_CLASSES,
        answerClasses: ANSWER_CLASSES,
    };

})();
