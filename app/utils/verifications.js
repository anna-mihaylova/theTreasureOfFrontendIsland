const VERIFICATIONS = (function() {

    function isObject (object) {
        if (typeof object === 'object') {
            return true;
        }
        return null;
    }

    function isCorrectType2 (object, id) {
        for (let value of object) {
            if (value['name'] === id) {
                return value;
            }
        }
        throw new Error(ERRORS.typeError);
    }

    function isCorrectType (object, id) {
        for (let value of object) {
            if (value === id) {
                return value;
            }
        }
        throw new Error(ERRORS.typeError);
    }

    function isCorrectClass (object, object1) {
        for (let value of object) {
            for (let item of object1) {
                if (value === item) {
                    return value;
                }
            }
        }
        return false;
    }

    function isCorrectTypeId (object, id) {
        for (let value of object) {
            if (value['name'] === id) {
                return value;
            }
            for (let item in value) {
                if (value[item]['id'] === id) {
                    return item;
                }
            }
        }
        return null;
    }

    function isGameInstanceOfConstructorGame (game) {
        if (game.constructor.name != GAME_ELEMENTS.constructors[0]) {
            throw new Error(ERRORS.playerError);
        }
    }

    function isPlayerInstanceOfConstructorPlayer (player) {
        if (player.constructor.name != GAME_ELEMENTS.constructors[1]) {
            throw new Error(ERRORS.gameError);
        }
    }

    function isCorrectGameType (type) {
        if (isCorrectType(GAME_ELEMENTS.types, type)){
            return type;
        }
        return GAME_ELEMENTS.types[0];
    }

    function isAbstractClass (className) {
        for (let variable of CONSTRUCTORS_CLASSES_ID.elements[3]) {
            if (variable === className.constructor.name){
                throw new Error(ERRORS.abstractError);
            }

        }

    }



    return {
        isObject: isObject,
        isCorrectClass: isCorrectClass,
        isCorrectType: isCorrectType,
        isCorrectTypeId: isCorrectTypeId,
        isGameInstanceOfConstructorGame: isGameInstanceOfConstructorGame,
        isAbstractClass: isAbstractClass,
        isCorrectGameType: isCorrectGameType,
        isPlayerInstanceOfConstructorPlayer: isPlayerInstanceOfConstructorPlayer
    };
})();
