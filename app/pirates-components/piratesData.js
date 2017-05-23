const PIRATES_DATA = (function() {

    const URL = "php/questions.php";

    const DATA_COMPONENTS = ['table', 'level'];

    const TABLE_TYPES = ['html', 'css', 'js'];

    const LEVEL_TYPES = ['easy', 'medium', 'hard'];

    return {
        tableTypes: TABLE_TYPES,
        levelTypes: LEVEL_TYPES,
        dataComponents: DATA_COMPONENTS,
        url: URL,
    };

})();
