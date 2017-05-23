const ERRORS = (function() {

    const TYPE_ERROR = 'Please supply correct type';
    const ABSTRACT_ERROR = "Can't instantiate abstract class!";
    const FUNCTION_ERROR = 'Please supply correct function';
    const CANVAS_ERROR = 'Canvas and canvas elemement are with diffrents id';
    const GAME_CONSTRUCTOR_ERROR = 'Please supply correct game.';
    const PLAYER_CONSTRUCTOR_ERROR = 'Please supply correct player.';


    return {
        typeError: TYPE_ERROR,
        abstractError: ABSTRACT_ERROR,
        functionError: FUNCTION_ERROR,
        canavasError: CANVAS_ERROR,
        gameError: GAME_CONSTRUCTOR_ERROR,
        playerError: PLAYER_CONSTRUCTOR_ERROR
    };

})();
