const MAP_CREATOR = (function() {

    const _ELEMENTS = MAPS_COMPONENTS.elements;
    const _TYPES = MAPS_COMPONENTS.types;
    const _MAIN = MAIN_COMPONENTS_ELEMENTS.main;
    const _PIRATE_TYPES = CANVAS_COMPONENTS.types;


    function create (game, elementId) {
        CREATORS.deleteAllElements(game.getMain());

        let elements = ELEMENTS_CREATOR.create(game);

        game.getMain().setAttribute('class', _MAIN[2]);

        if (elementId === _TYPES[0]){
            createHtml(game, elementId);
            createHtmlPirate(game, elementId);
        }
        if (elementId === _TYPES[1]){
            createCss(game, elementId);
            createCssPirate(game, elementId);
        }
        if (elementId === _TYPES[2]){
            createJs(game, elementId);
            createJsPirate(game, elementId);
        }

    };

    function createHtmlPirate (game, elementId) {
        let pirate = game.getPlayer();

        if (+pirate.getHtmlMap() === 0){
            return MAP_PIRATE_CREATOR.create(game, elementId);
        }
        if (+pirate.getHtmlMap()=== 1){
            return MAP_PIRATE_CREATOR.create(game, elementId, _PIRATE_TYPES[2]);
        }
        if (+pirate.getHtmlMap() === 2){
            return MAP_PIRATE_CREATOR.create(game, elementId, _PIRATE_TYPES[3]);
        }
        if (+pirate.getHtmlMap() === 3){
            return MAP_PIRATE_CREATOR.create(game, elementId, _PIRATE_TYPES[4]);
        }
    };

    function createCssPirate (game, elementId) {
        let pirate = game.getPlayer();

        if (+pirate.getCssMap() === 0){
            return MAP_PIRATE_CREATOR.create(game, elementId);
        }
        if (+pirate.getCssMap()=== 1){
            return MAP_PIRATE_CREATOR.create(game, elementId, _PIRATE_TYPES[2]);
        }
        if (+pirate.getCssMap() === 2){
            return MAP_PIRATE_CREATOR.create(game, elementId, _PIRATE_TYPES[3]);
        }
        if (+pirate.getCssMap() === 3){
            return MAP_PIRATE_CREATOR.create(game, elementId, _PIRATE_TYPES[4]);
        }
    };

    function createJsPirate (game, elementId) {
        let pirate = game.getPlayer();

        if (+pirate.getJsMap() === 0){
            return MAP_PIRATE_CREATOR.create(game, elementId);
        }
        if (+pirate.getJsMap()=== 1){
            return MAP_PIRATE_CREATOR.create(game, elementId, _PIRATE_TYPES[2]);
        }
        if (+pirate.getJsMap() === 2){
            return MAP_PIRATE_CREATOR.create(game, elementId, _PIRATE_TYPES[3]);
        }
        if (+pirate.getJsMap() === 3){
            return MAP_PIRATE_CREATOR.create(game, elementId, _PIRATE_TYPES[4]);
        }
    };

    function createHtml (game, elementId) {
        CREATORS.createSectionWithElements(game.getMain(), _TYPES[0], _ELEMENTS[_TYPES[0]]);

    };

    function createCss (game, elementId) {
        CREATORS.createSectionWithElements(game.getMain(), _TYPES[1], _ELEMENTS[_TYPES[1]]);
    };

    function createJs (game, elementId) {
        CREATORS.createSectionWithElements(game.getMain(), _TYPES[2], _ELEMENTS[_TYPES[2]]);
    };

    return {
        create: create
    };

})();
