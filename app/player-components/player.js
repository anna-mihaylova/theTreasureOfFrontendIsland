const PLAYER = (function(game, obj, functionName) {
    let player = PLAYER_COMPONENTS.components
    let playerFunctions = PLAYER_FUNCTIONS;
    function Player(game, obj, functionName) {
        VERIFICATIONS.isGameInstanceOfConstructorGame(game);

        let _game = game;
        let _object = obj;
        let _player = obj[player[0]];
        let _games = +obj[player[1]] + 1;
        let _wins = obj[player[2]];
        let _heart = 3;
        let _treasure = obj[player[3]];
        let _htmlPirat = obj[player[4]];
        let _cssPirat = obj[player[5]];
        let _jsPirat = obj[player[6]];
        let _bomb = obj[player[7]];
        let _hook = obj[player[8]];
        let _pipe = obj[player[9]];
        let _typeOfQuiz = game.getType();
        let _map = playerFunctions.checkForMap(+_htmlPirat, +_cssPirat, +_jsPirat);
        let _flag = +_htmlPirat + +_cssPirat + +_jsPirat;

        this.getGame = function() {
            return _game;
        }

        this.getObject = function() {
            return _object;
        }

        this.getName = function() {
            return _player;
        }

        this.getGames = function() {
            return _games;
        }

        this.setGames = function(values) {
            _games = values;
        }

        this.getWins = function() {
            return _wins;
        }

        this.setWins = function(value) {
            _wins = +_wins + +value;
        }

        this.getLive = function() {
            return _heart;
        }

        this.setLive = function(value) {
            _heart = value;
        }

        this.getTreasure = function() {
            return _treasure;
        }

        this.setTreasure = function(value) {
            _treasure = +_treasure + +value;
        }
        this.getHtmlMap = function() {
            return _htmlPirat;
        }

        this.setHtmlMap = function(value) {
            _htmlPirat = +value;
        }

        this.getCssMap = function() {
            return _cssPirat;
        }

        this.setCssMap = function(value) {
            _cssPirat = +value;
        }


        this.getJsMap = function() {
            return _jsPirat;
        }

        this.setJsMap = function(value) {
            _jsPirat = +value;
        }

        this.getMap = function() {
            return _map;
        }

        this.setMap = function(value) {
            _map = value;
        }

        this.getFlag = function() {
            return _flag;
        }

        this.setFlag = function(value) {
            _flag = value;
        }

        this.getBomb = function() {
            return _bomb;
        }

        this.setBomb = function(value) {
            _bomb = value;
        }

        this.getHook = function() {
            return _hook;
        }

        this.setHook = function(value) {
            _hook = value;
        }

        this.getPipe = function() {
            return _pipe;
        }

        this.setPipe = function(value) {
            _pipe = value;
        }

        this.getTypeOfQuiz = function() {
            return _typeOfQuiz;
        }

    }

    return{
        create: function(game, obj, login){
            return new Player(game, obj, login);
        }
    }
}());
