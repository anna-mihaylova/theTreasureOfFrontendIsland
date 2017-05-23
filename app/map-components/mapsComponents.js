const MAPS_COMPONENTS = (function() {

    const map = {
        pageElement: {
            type: 'section',
            className: ['flex-item']
        },
        innerPageElements: [{
            type: 'div',
            id: 'map'
        }, {
            type: 'div',
            className: ['ship'],
            innerElement: [{
                type: 'div',
                id: 'water-ship',
                className: ['flex-item', 'water-ship']
            }]
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
            className: ['animal']
        },  {
            type: 'h1',
            id: 'map-h1',
            innerText: 'good luck'
        }]

    };

    const $ELEMENTS = {htmlMap: map, cssMap: map, jsMap: map,};

    const TYPES = ['htmlMap', 'cssMap', 'jsMap'];


    return {
        elements: $ELEMENTS,
        types: TYPES
    };

})();
