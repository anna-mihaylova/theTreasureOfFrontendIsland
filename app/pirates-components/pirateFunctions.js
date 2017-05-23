const PIRATE_FUNCTIONS = (function() {

    const _mapComponents = MAPS_COMPONENTS.types;
    const _tableTypes = PIRATES_DATA.tableTypes;
    const _levelTypes = PIRATES_DATA.levelTypes;
    const _dataComponents = PIRATES_DATA.dataComponents;
    const _pirateTypes = CANVAS_COMPONENTS.types;



    function checkForMap (game, type) {
        let table;
        if (type === _mapComponents[0]){

            return table =  _tableTypes[0];
        }
        if (type === _mapComponents[1]){
            return table =  _tableTypes[1];

        }
        if (type === _mapComponents[2]){
            return table = _tableTypes[2];
        }
    };

    function checkForPirate (game, type, pirate) {
        let level;

        if (pirate === _pirateTypes[2]){
            return level = _levelTypes[1];
        }
        if (pirate === _pirateTypes[3]){
            return level = _levelTypes[2];
        }

        return level = _levelTypes[0];
    };

    function createInformation (game, type, pirate) {
        let data = {
            table: checkForMap (game, type),
            level: checkForPirate(game, type, pirate),
        }
        return data;
    };

    function createQuestions (game, question, poits, map, pirate) {
        QUESTION_CREATOR.create (game, question, poits, map, pirate);
    };

    return {
        checkForMap: checkForMap,
        checkForPirate: checkForPirate,
        createInformation: createInformation,
        createQuestions: createQuestions
    };

}());
