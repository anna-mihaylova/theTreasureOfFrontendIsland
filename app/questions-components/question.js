const QUESTION = (function(game, question, poits) {

    let _QUESTION_CLASSES = QUESTIONS_COMPONENTS.questionClasses;
    let _ANSWER_CLASSES = QUESTIONS_COMPONENTS.answerClasses;
    let _QUESTION_FUNCTIONS = QUESTION_FUNCTIONS;

    function Question (game, question, poits) {
        let _game = game;
        let _type = game.getType();

        VERIFICATIONS.isGameInstanceOfConstructorGame(_game);
        VERIFICATIONS.isCorrectType(QUESTIONS_COMPONENTS.types, _type);

        let _$main = game.getMain();
        let _player = game.getPlayer();
        let _$questionSection = _$main.querySelector(`#${_type}`);
        let _$question = _$main.querySelector(`.${_QUESTION_CLASSES[0]}`);
        let _$answer1 = _$main.querySelector(`.${_QUESTION_CLASSES[1]}`);
        let _$answer2 = _$main.querySelector(`.${_QUESTION_CLASSES[2]}`);
        let _$answer3 = _$main.querySelector(`.${_QUESTION_CLASSES[3]}`);
        let _question = question;
        let _questionPoints = poits;
        let intervalPlayerAnswer;
        let _self = this;

        this.getGame = function() {
            return _game;
        }

        this.getMain = function() {
            return _$main;
        }

        this.getPlayer = function() {
            return _player;
        }

        this.getQuestionSection = function() {
            return _$questionSection;
        }

        this.get$Question = function() {
            return _$question;
        }

        this.get$Answer1 = function() {
            return _$answer1;
        }

        this.get$Answer2 = function() {
            return _$answer2;
        }

        this.get$Answer3 = function() {
            return _$answer3;
        }

        this.getQuestion = function() {
            return _question;
        }

        this.getQuestionPoints = function() {
            return _questionPoints;
        }
        this.getInterval = function() {
            return intervalPlayerAnswer;
        }


        _QUESTION_FUNCTIONS.draw(_$question, _$answer1, _$answer2, _$answer3, _question);

        this.bindEvents();

        clearInterval(intervalPlayerAnswer);

        intervalPlayerAnswer = setInterval(function(){
            let playerAnswer = _self.getQuestionSection().getElementsByClassName(_ANSWER_CLASSES[0]);
            if (playerAnswer[0]){
                _self.getQuestionSection().removeEventListener('click', _self.playerAnswer);
                _self.check(playerAnswer[0]);
                clearInterval(intervalPlayerAnswer);
            }
        }, 500);
    }

    Question.prototype.bindEvents = function() {
        let self = this;
        this.getQuestionSection().addEventListener('click', _QUESTION_FUNCTIONS.playerAnswer, false);

        let gameMenu = self.getMain().querySelector('#footer');
        this.getQuestionSection().addEventListener('click', function(e){
             if (e.target.classList.contains('bomb-q')){
                    return QUESTION_FUNCTIONS.bomb (self.getQuestionSection(), self.getQuestion(), self.getPlayer());
                }
            if (e.target.classList.contains('hook-q')){
                   return QUESTION_FUNCTIONS.hook (self.getQuestionSection(), self.getQuestion(), self.getPlayer());
               }
        }, false);

    };

    Question.prototype.check = function(element) {
        this.getQuestionSection().removeEventListener('click', _QUESTION_FUNCTIONS.playerAnswer);
        let self = this;
        let points;
        let timeOut = setTimeout( function () {
            let points = _QUESTION_FUNCTIONS.checkAnswer(element, self.getQuestionSection(), self.getQuestion(), self.getQuestionPoints());
            self.getPlayer().setTreasure(points);
            let a = new DRAW_PLAYER_DATA (self.getGame(), self.getPlayer());
           clearTimeout(timeOut);
        }, 1000);
    }



    return {
        create: function(game, question, poits){
            return new Question (game, question, poits);
        }
    };

}());
