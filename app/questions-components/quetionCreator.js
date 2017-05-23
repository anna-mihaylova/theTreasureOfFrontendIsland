
const QUESTION_CREATOR = (function() {

    let _gameTypes = GAME_ELEMENTS.types;
    let _questionTypes = QUESTIONS_COMPONENTS.types;
    let _questionElements = QUESTIONS_COMPONENTS.elements;
    let interval;
    let count = 0;
    let maxCountSpeed = 4;
    const speedMaxPercentage = 80;
    const normalMaxPercentage = 50;
    const normalInterval = 2000;
    const speedInterval = 6000;
    const battleInterval = 9000;
    let startCoins;
    let type;


    function playerCoins (palyer) {
        return palyer.getTreasure();
    };

    function create (game, questions, poits, map) {
        startCoins = playerCoins (game.getPlayer());

        let intervalValue = checkType(game);
        getRandomQuestion(questions, game, poits, map);

        interval = setInterval(function(){
            if (type === _gameTypes[0]){
                let playerAnswer = game.getMain().getElementsByClassName('correct-answer');
                if (playerAnswer[0]){
                    return getRandomQuestion(questions, game, poits, map);
                }
            }
            if (type === _gameTypes[1]){
                return getRandomQuestion(questions, game, poits, map);
            }
            if (type === _gameTypes[2]){
                return getRandomQuestion(questions, game, poits, map);
            }
        }, intervalValue);
    };


    function checkType (game) {
        let interval;
        if (game.getType() === _gameTypes[0]){
            intervalValue = normalInterval;
            type = _gameTypes[0];
        }
        if (game.getType() === _gameTypes[1]){
            intervalValue = speedInterval;
            type = _gameTypes[1];
        }
        if (game.getType() === _gameTypes[2]){
            intervalValue = battleInterval;
            type = _gameTypes[2];
        }
        return intervalValue;

    };


    function getRandomQuestion (questions, game, poits, map) {
        let random = Math.floor(Math.random() * questions.length)
        if (questions[random].given === undefined){
            questions[random].given = 'given';
            return checkForType(questions[random], game, questions, poits, map);
        }
    };


    function checkForType (question, game, questions, poits, map) {
        if (type === _gameTypes[0]){
            CREATORS.createSectionWithElements(game.getMain(), _questionTypes[0], _questionElements[_questionTypes[0]]);
            normalMood(game, questions, poits, questions.length, map);

        }
        if (type === _gameTypes[1]){
            CREATORS.createSectionWithElements(game.getMain(), _questionTypes[1], _questionElements[_questionTypes[1]]);
            sppedMood(game, questions, poits, map);
        }
        if (type === _gameTypes[2]){
            CREATORS.createSectionWithElements(game.getMain(), _questionTypes[2], _questionElements[_questionTypes[2]]);
            normalMood(game, questions, poits, questions.length, map);
        }
        QUESTION.create(game, question, poits);

    };

    function normalMood (game, questions, poits, maxCountSpeed, map) {
        if (!isEndOfQuestions(questions)){
            clearInterval(interval);
            let percentage = correctAnswerCalculation(game, poits, maxCountSpeed);
            if (percentage < normalMaxPercentage){
                return lose(game, percentage);
            }

            return win (game, percentage, map)
        }
    };

    function sppedMood (game, questions, poits, map) {
        if (count > maxCountSpeed){
            clearInterval(interval);
            let percentage = correctAnswerCalculation(game, poits, maxCountSpeed+1);
            if (percentage < speedMaxPercentage){
                return lose(game, percentage);
            }

            return win (game, percentage, map)
        }
        count++;
    };

    function lose (game, percentage) {
        count = 0;
        let speed = game.getMain().querySelector('#speed');
        if (speed){
            speed.classList.add('hidden');
        }
        let normal = game.getMain().querySelector('#normal');
        if (normal){
            normal.classList.add('hidden');
        }
        let battle = game.getMain().querySelector('#battle');
        if (battle){
            battle.classList.add('battle');
        }
        MAP_PIRATE_CREATOR.lose(game);
        let bad = game.getMain().querySelector('#badNews');
        let text = bad.querySelector('.bad-news');
        CREATORS.addTextNode(text, `Sorry you have ${percentage}%`);
        bad.classList.remove('hidden');
        count = 0;
    };

    function win (game, percentage, map) {
        count = 0;
        PLAYER_FUNCTIONS.getExtra(game.getPlayer());

        let good = game.getMain().querySelector('#goodNews');
        let text = good.querySelector('.good-news');
        let speed = game.getMain().querySelector('#speed');
        speed.classList.add('hidden');
        CREATORS.addTextNode(text, `Congratulations you have ${percentage}%`);
        good.classList.remove('hidden');

        let player = game.getPlayer();
        let newPirate;

        if (map === 'htmlMap'){
            newPirate = +player.getHtmlMap() + 1;
            player.setHtmlMap(newPirate)
        }
        if (map === 'cssMap'){
            newPirate = +player.getCssMap() + 1;
            player.setCssMap(newPirate)

        }
        if (map === 'jsMap'){
            newPirate = +player.getJsMap() + 1;
            player.setJsMap(newPirate)
        }
        timeOut = setTimeout(function() {
            clearTimeout(timeOut);
            player.setFlag(+player.getFlag() + 1)

            MAP_CREATOR.create(game, map)
        }, 6000);
    };

    function isEndOfQuestions (questions) {
        for (let variable in questions) {
            if (questions[variable] != undefined){
                return true;
            }
        }
        return false;

    };

    function correctAnswerCalculation (game, poits, numOfQuestions) {
        let coins = playerCoins(game.getPlayer())
        let playerPirateScore = +coins - +startCoins;
        let playerCorrectAnswer = playerPirateScore/poits;

        return percentageCalculation(playerCorrectAnswer, numOfQuestions);
    };

    function percentageCalculation (playerCorrectAnswer, numOfQuestions) {
        let percentage = Math.floor((100/+numOfQuestions) * +playerCorrectAnswer);
        return percentage;
    };

    function clear () {
        if (interval){
            clearInterval(interval);
        }

    };
    return {
        create: create,
        clearInterval: clear
    };

})();
