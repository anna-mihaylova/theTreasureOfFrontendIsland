const BATTLE_COMPONENTS = (function() {

    const battle = {
        pageElement: {
            type: 'section',
            className: ['flex-item']
        },
        innerPageElements: [{
            type: 'div',
            id: 'map'
        }, {
            type: 'div',
            className: ['treasure']
        }, {
            type: 'div',
            className: ['sign']
        }, {
            type: 'div',
            className: ['logo']
        }, {
            type: 'div',
            className: ['ship']
        }, {
            type: 'div',
            className: ['pirate1']
        }]

    };

    const $ELEMENTS = {battleMap: battle, battleMap2: battle, battleMap2Shadow: battle};

    const TYPES = ['battleMap', 'battleMap2', 'battleMap2Shadow']

    return {
        elements: $ELEMENTS,
        types: TYPES,
    };

})();
