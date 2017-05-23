const CANVAS_CREATOR = (function() {

    const _ELEMENTS = CANVAS_COMPONENTS.elements;
    const _TYPES = CANVAS_COMPONENTS.types;

    function create (game, elementId, functions) {
        let canvas, component;
        $canvas = CREATORS.createCanvas(game.getMain(), elementId);
        $canvas = game.getMain().querySelector(`#${elementId}`);
        component = CANVAS_ELEMENT.create(game, $canvas, _ELEMENTS[elementId], functions);
    };

    return {
        create: create,
    };

})();
