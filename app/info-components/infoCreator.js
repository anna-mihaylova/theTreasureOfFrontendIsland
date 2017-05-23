const INFO_CREATOR = (function() {

    function create (game, elementId, element, infoComponents) {
        CREATORS.deleteElementID(game.getMain(), elementId);
        CREATORS.createSectionWithElements(game.getMain(), elementId, element);
        if (infoComponents){
            let element = game.getMain().querySelector(`#${elementId}`);
            CREATORS.addClass(element, infoComponents);
            let el = game.getMain().querySelector(`#info.${infoComponents}`);
            let text = el.querySelector('.info-p');
            CREATORS.addTextNode(text, INFO_COMPONENTS.infoP[`${infoComponents}`])
        }
    };

    return {
        create: create
    };

})();
