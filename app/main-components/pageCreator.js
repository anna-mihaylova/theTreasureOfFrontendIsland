const PAGE_CREATOR = (function() {

    const _ELEMENTS = MAIN_COMPONENTS.elements;
    const _TYPES = MAIN_COMPONENTS.types;
    const _MAIN = MAIN_COMPONENTS_ELEMENTS.main;

    function create (game, elementId) {
        CREATORS.deleteAllElements(game.getMain());

        let elements = ELEMENTS_CREATOR.create(game);
        if (elementId === _TYPES[0]){
            createFirstPage(game);
        }
        if (elementId === _TYPES[1]){
            createIslandPage(game);
        }
    };

    function createFirstPage (game) {
        game.getMain().setAttribute('class', _MAIN[0]);
        CREATORS.createSectionWithElements(game.getMain(), _TYPES[0], _ELEMENTS[_TYPES[0]]);
    };

    function createIslandPage (game) {
        game.getMain().setAttribute('class', _MAIN[1]);
        CREATORS.createSectionWithElements(game.getMain(), _TYPES[1], _ELEMENTS[_TYPES[1]]);
    };

    return {
        create: create
    };

})();
