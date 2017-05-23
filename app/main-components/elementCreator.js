const ELEMENTS_CREATOR = (function() {

    const _ELEMENTS = MAIN_COMPONENTS_ELEMENTS.elements;
    const _PLAYER_ELEMENTS = PLAYER_COMPONENTS.elements;

    function create (game) {
        CREATORS.deleteAllElements(game);
        createMainElements(game);
        createPlayerElements(game);
    };

    function createMainElements (game) {

        for (var variable in _ELEMENTS) {

            CREATORS.deleteElementID(game.getMain(), variable);

            if ((game.getPlayer() != '' && variable === 'mainMenu') || (game.getPlayer() === '' && variable === 'mainMenu2')){
                continue
            }
            CREATORS.createSectionWithElements(game.getMain(), variable, _ELEMENTS[variable]);
        }
    };

    function createPlayerElements (game) {
        if(game.getPlayer() != ''){
            for (var variable in _PLAYER_ELEMENTS) {
                 CREATORS.deleteElementID(game.getMain(), variable);
                 CREATORS.createSectionWithElements(game.getMain(), variable, _PLAYER_ELEMENTS[variable]);
            }
            let playerData = new DRAW_PLAYER_DATA (game, game.getPlayer());

        }
    };

    return {
        create: create,
        createMainElements: createMainElements,
        createPlayerElements: createPlayerElements
    };

})();
