
const PIRATE = (function(game, map, pirate) {
    const _pirateTypes = CANVAS_COMPONENTS.types;

    function Pirate (game, map, pirate) {
        VERIFICATIONS.isGameInstanceOfConstructorGame(game);

        let _game = game;
        let _type = map;
        let _main = game.getMain();
        let _player = game.getPlayer();
        let _pirate = pirate;
        let _url = PIRATES_DATA.url;
        let _questions = '';
        let _map = map;

        this.getQuestions = function() {
            return _questions;
        }

        this.setQuestions = function(value) {
            _questions = value;
        }

        this.getPirate = function() {
            return _pirate;
        }

        this.getUrl = function() {
            return _url;
        }

        this.getMap = function() {
            return _map;
        }

        this.sendAjax(_game, _type, _pirate);

    }
    Pirate.prototype.checkPoints = function() {
        let poits;
        if (this.getPirate() === _pirateTypes[2]) {
            return poits = 6;
        }
        if (this.getPirate() === _pirateTypes[3]) {
            return poits = 10;
        }
        return poits = 4;
    };


    Pirate.prototype.sendAjax = function(game, type, pirate) {

        let self = this;
        let poits = self.checkPoints();
        let information = PIRATE_FUNCTIONS.createInformation(game, type, pirate);
        $(document).ready(function(){
            function isFinish (){
                $.ajax({
                    type:"POST",
                    url: self.getUrl(),
                    data: information,
                    success:function(data){
                        let dataJs = JSON.parse(data)
                        self.setQuestions(dataJs);
                        return PIRATE_FUNCTIONS.createQuestions(game, self.getQuestions(), poits, self.getMap(), self.getPirate())
                    }
                });
            }
            isFinish();
        });
    };


    return{
        create: function(game, map, pirate){
            return new Pirate(game, map, pirate);
        },
    }

}());
