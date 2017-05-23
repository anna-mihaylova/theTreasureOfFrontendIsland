const MAP_PIRATE_CREATOR = (function() {

    let firstPirate, secondPirate, thirdPirate, player, pirateShip, toFirstPiratTimer, toSecondPiratTimer;

    const _ELEMENTS = CANVAS_COMPONENTS.elements;
    const _TYPES = CANVAS_COMPONENTS.types;
    const _FUNCTIONS = CANVAS_COMPONENTS.functions;
    const _MAP_FUNCTIONS = CANVAS_COMPONENTS.mapFunctions;
    const _MAP_TYPES = MAPS_COMPONENTS.types;


    function create(game, type, playerPirate) {

        if (playerPirate === _TYPES[2]) {
            return toSecond(game, type, playerPirate);
        }
        if (playerPirate === _TYPES[3]) {
            return toTird(game, type, playerPirate)
        }
        if (playerPirate === _TYPES[4]) {
            return win(game, type, playerPirate);
        } else {
            start(game, type, _TYPES[2]);
        }
    };

    function start(game, type, playerPirate) {
        firstPirate = new CANVAS_CREATOR.create(game, _TYPES[2], _FUNCTIONS[5]);
        pirateShip = new CANVAS_CREATOR.create(game, _TYPES[0], _FUNCTIONS[1]);
        secondPirate = new CANVAS_CREATOR.create(game, _TYPES[3], _FUNCTIONS[0]);
        thirdPirate = new CANVAS_CREATOR.create(game, _TYPES[4], _FUNCTIONS[0]);

        if (toFirstPiratTimer) {
            clearTimeout(toFirstPiratTimer);
        }

        toFirstPiratTimer = setTimeout(function() {
            pirateShip = new CANVAS_CREATOR.create(game, _TYPES[0], _FUNCTIONS[2]);
            clearTimeout(toFirstPiratTimer);

        }, 3300);

        if (toSecondPiratTimer) {
            clearTimeout(toSecondPiratTimer);
        }

        toSecondPiratTimer = setTimeout(function() {
            player = new CANVAS_CREATOR.create(game,  _TYPES[1], _FUNCTIONS[0]);
            clearTimeout(toFirstPiratTimer);

            let confirm = game.getMain().querySelector('#confirm');
            let text = confirm.querySelector('.confirm.p');
            CREATORS.addTextNode(text, 'Are you ready?')
            confirm.classList.remove('hidden')
            confirm.addEventListener('click', function(e){
                checkConfirm(e, game, type, playerPirate, confirm)
            }, false)

            function checkConfirm (e, game, type, playerPirate, confirm) {
                if (e.target.classList.contains('yes')){
                    toFirst(game, type, playerPirate)
                }
                confirm.removeEventListener('click', function(e){
                    checkConfirm(e, game, type, playerPirate, confirm)
                }, false);
                setTimeout(function(){
                    confirm.classList.add('hidden');
                }, 1000);

            };
        }, 17400);

    };

    function toFirst(game, type, playerPirate) {
        pirateShip = new CANVAS_CREATOR.create(game,  _TYPES[0], _FUNCTIONS[0]);
        player = new CANVAS_CREATOR.create(game,  _TYPES[1], _FUNCTIONS[1]);
        firstPirate = new CANVAS_CREATOR.create(game,  _TYPES[2], _FUNCTIONS[1]);
        secondPirate = new CANVAS_CREATOR.create(game,  _TYPES[3], _FUNCTIONS[5]);
        thirdPirate = new CANVAS_CREATOR.create(game,  _TYPES[4], _FUNCTIONS[0]);

        if (toFirstPiratTimer) {
            clearTimeout(toFirstPiratTimer);
        }

        toFirstPiratTimer = setTimeout(function() {
            firstPirate = new CANVAS_CREATOR.create(game,  _TYPES[2], _FUNCTIONS[8]);
            clearTimeout(toFirstPiratTimer);

        }, 3500);

        if (toSecondPiratTimer) {
            clearTimeout(toSecondPiratTimer);
        }

        toSecondPiratTimer = setTimeout(function() {
            player = new CANVAS_CREATOR.create(game,  _TYPES[1], _FUNCTIONS[14]);
            PIRATE.create(game, type);
            clearTimeout(toFirstPiratTimer);
        }, 4100);

    };

    function toSecond(game, type, playerPirate) {
        pirateShip = new CANVAS_CREATOR.create(game,  _TYPES[0], _FUNCTIONS[0]);
        player = new CANVAS_CREATOR.create(game,  _TYPES[1], _FUNCTIONS[2]);
        firstPirate = new CANVAS_CREATOR.create(game,  _TYPES[2], _FUNCTIONS[0]);
        secondPirate = new CANVAS_CREATOR.create(game,  _TYPES[3], _FUNCTIONS[1]);
        thirdPirate = new CANVAS_CREATOR.create(game,  _TYPES[4], _FUNCTIONS[5]);

        if (toFirstPiratTimer) {
            clearTimeout(toFirstPiratTimer);
        }

        toFirstPiratTimer = setTimeout(function() {
            secondPirate = new CANVAS_CREATOR.create(game,  _TYPES[3], _FUNCTIONS[8]);
            clearTimeout(toFirstPiratTimer);

        }, 2700);

        if (toSecondPiratTimer) {
            clearTimeout(toSecondPiratTimer);
        }

        toSecondPiratTimer = setTimeout(function() {
            player = new CANVAS_CREATOR.create(game,  _TYPES[1], _FUNCTIONS[14]);
            PIRATE.create(game, type, _TYPES[2]);
            clearTimeout(toFirstPiratTimer);
        }, 3300);
    };

    function toTird(game, type, playerPirate) {
        if (type === _MAP_TYPES[0]) {
            return toTirdHtml(game, type, playerPirate);
        }
        if (type === _MAP_TYPES[1]) {
            return toTirdCss(game, type, playerPirate);
        }
        if (type === _MAP_TYPES[2]) {
            return toTirdJs(game, type, playerPirate);

        } else {
            toTirdHtml(game, type, playerPirate);
        }

    }

    function toTirdHtml(game, type, playerPirate) {
        pirateShip = new CANVAS_CREATOR.create(game,  _TYPES[0], _FUNCTIONS[0]);
        player = new CANVAS_CREATOR.create(game,  _TYPES[1], _FUNCTIONS[6]);
        firstPirate = new CANVAS_CREATOR.create(game,  _TYPES[2], _FUNCTIONS[0]);
        secondPirate = new CANVAS_CREATOR.create(game,  _TYPES[3], _FUNCTIONS[0]);
        thirdPirate = new CANVAS_CREATOR.create(game,  _TYPES[4], _FUNCTIONS[1]);

        if (toFirstPiratTimer) {
            clearTimeout(toFirstPiratTimer);
        }

        toFirstPiratTimer = setTimeout(function() {
            thirdPirate = new CANVAS_CREATOR.create(game,  _TYPES[4], _FUNCTIONS[8]);
            clearTimeout(toFirstPiratTimer);

        }, 4300);

        if (toSecondPiratTimer) {
            clearTimeout(toSecondPiratTimer);
        }

        toSecondPiratTimer = setTimeout(function() {
            player = new CANVAS_CREATOR.create(game,  _TYPES[1], _FUNCTIONS[14]);
            PIRATE.create(game, type, _TYPES[3]);
            clearTimeout(toFirstPiratTimer);
        }, 4900);
    }

    function toTirdCss(game, type, playerPirate) {
        pirateShip = new CANVAS_CREATOR.create(game,  _TYPES[0], _FUNCTIONS[0]);
        player = new CANVAS_CREATOR.create(game,  _TYPES[1], _FUNCTIONS[6]);
        firstPirate = new CANVAS_CREATOR.create(game,  _TYPES[2], _FUNCTIONS[0]);
        secondPirate = new CANVAS_CREATOR.create(game,  _TYPES[3], _FUNCTIONS[0]);
        thirdPirate = new CANVAS_CREATOR.create(game,  _TYPES[4], _FUNCTIONS[2]);

        if (toFirstPiratTimer) {
            clearTimeout(toFirstPiratTimer);
        }

        toFirstPiratTimer = setTimeout(function() {
            thirdPirate = new CANVAS_CREATOR.create(game,  _TYPES[4], _FUNCTIONS[8]);
            clearTimeout(toFirstPiratTimer);

        }, 4300);

        if (toSecondPiratTimer) {
            clearTimeout(toSecondPiratTimer);
        }

        toSecondPiratTimer = setTimeout(function() {
            player = new CANVAS_CREATOR.create(game,  _TYPES[1], _FUNCTIONS[14]);
            PIRATE.create(game, type, _TYPES[3]);
            clearTimeout(toFirstPiratTimer);
        }, 4900);
    }

    function toTirdJs(game, type, playerPirate) {
        pirateShip = new CANVAS_CREATOR.create(game,  _TYPES[0], _FUNCTIONS[0]);
        player = new CANVAS_CREATOR.create(game,  _TYPES[1], _FUNCTIONS[6]);
        firstPirate = new CANVAS_CREATOR.create(game,  _TYPES[2], _FUNCTIONS[0]);
        secondPirate = new CANVAS_CREATOR.create(game,  _TYPES[3], _FUNCTIONS[0]);
        thirdPirate = new CANVAS_CREATOR.create(game,  _TYPES[4], _FUNCTIONS[6]);

        if (toFirstPiratTimer) {
            clearTimeout(toFirstPiratTimer);
        }

        toFirstPiratTimer = setTimeout(function() {
            thirdPirate = new CANVAS_CREATOR.create(game,  _TYPES[4], _FUNCTIONS[8]);
            clearTimeout(toFirstPiratTimer);

        }, 4300);

        if (toSecondPiratTimer) {
            clearTimeout(toSecondPiratTimer);
        }

        toSecondPiratTimer = setTimeout(function() {
            player = new CANVAS_CREATOR.create(game,  _TYPES[1], _FUNCTIONS[14]);
            PIRATE.create(game, type, _TYPES[3]);
            clearTimeout(toFirstPiratTimer);
        }, 4900);
    }

    function win(game, type) {
        pirateShip = new CANVAS_CREATOR.create(game,  _TYPES[0], _FUNCTIONS[0]);
        player = new CANVAS_CREATOR.create(game,  _TYPES[1], _FUNCTIONS[9]);
        firstPirate = new CANVAS_CREATOR.create(game,  _TYPES[2], _FUNCTIONS[0]);
        secondPirate = new CANVAS_CREATOR.create(game,  _TYPES[3], _FUNCTIONS[0]);
        thirdPirate = new CANVAS_CREATOR.create(game,  _TYPES[4], _FUNCTIONS[9]);

        if (toFirstPiratTimer) {
            clearTimeout(toFirstPiratTimer);
        }

        toFirstPiratTimer = setTimeout(function() {
            let treasure = game.getMain().querySelector(`#${type} .treasure`);
            treasure.classList.add('hover')
            clearTimeout(toFirstPiratTimer);

        }, 2000);
    }

    function lose(game, type, playerPirate) {
        pirateShip = new CANVAS_CREATOR.create(game,  _TYPES[0], _FUNCTIONS[0]);
        player = new CANVAS_CREATOR.create(game,  _TYPES[1], _FUNCTIONS[10]);
        firstPirate = new CANVAS_CREATOR.create(game,  _TYPES[2], _FUNCTIONS[0]);
        secondPirate = new CANVAS_CREATOR.create(game,  _TYPES[3], _FUNCTIONS[0]);
        thirdPirate = new CANVAS_CREATOR.create(game,  _TYPES[4], _FUNCTIONS[10]);
        if (toFirstPiratTimer) {
            clearTimeout(toFirstPiratTimer);
        }
        toFirstPiratTimer = setTimeout(function() {
            PAGE_CREATOR.create(game, MAIN_COMPONENTS.types[1]);
            clearTimeout(toFirstPiratTimer);
        }, 10000);

    }

    function deletePirates(game, type, playerPirate) {
        pirateShip = new CANVAS_CREATOR.create(game,  _TYPES[0], _FUNCTIONS[14]);
        player = new CANVAS_CREATOR.create(game,  _TYPES[1], _FUNCTIONS[14]);
        firstPirate = new CANVAS_CREATOR.create(game,  _TYPES[2], _FUNCTIONS[14]);
        secondPirate = new CANVAS_CREATOR.create(game,  _TYPES[3], _FUNCTIONS[14]);
        thirdPirate = new CANVAS_CREATOR.create(game,  _TYPES[4], _FUNCTIONS[14]);

        clearTimeout(toFirstPiratTimer);
        clearTimeout(toSecondPiratTimer);
    }

    return {
        create: create,
        start: start,
        toFirst: toFirst,
        toSecond: toSecond,
        toTird: toTird,
        toTirdHtml: toTirdHtml,
        toTirdCss: toTirdCss,
        toTirdJs: toTirdJs,
        win: win,
        lose: lose,
        deletePirates: deletePirates,
    };

})();
