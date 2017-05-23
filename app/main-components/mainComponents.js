const MAIN_COMPONENTS = (function() {

    const firstPage = {
        pageElement: {
            type: 'section',
            id: 'first',
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
            className: ['caption']
        }, {
            type: 'div',
            className: ['treasure']
        }, {
            type: 'div',
            className: ['parrot']
        }, {
            type: 'div',
            className: ['shark']
        }, {
            type: 'div',
            className: ['dodo']
        }]

    };

    const islandMap = {
        pageElement: {
            type: 'section',
            id: 'islandMap',
            className: ['flex-item']
        },
        innerPageElements: [{
            type: 'div',
            id: 'map',
            innerElement: [{
                type: 'div',
                id: 'treasure',
                className: ['flex-item', 'treasure']
            }, {
                type: 'div',
                className: ['caption']
            }, {
                type: 'div',
                id: 'html-map',
                className: ['flex-item', 'map', 'htmlMap']
            }, {
                type: 'p',
                className: ['flex-item', 'map-p-html', 'htmlMap'],
                innerText: 'html'
            }, {
                type: 'div',
                id: 'css-map',
                className: ['flex-item', 'map', 'cssMap']
            }, {
                type: 'p',
                className: ['flex-item', 'map-p-css', 'cssMap'],
                innerText: 'css'
            }, {
                type: 'div',
                id: 'js-map',
                className: ['flex-item', 'map', 'jsMap']
            }, {
                type: 'p',
                className: ['flex-item', 'map-p-js', 'jsMap'],
                innerText: 'js'
            }, {
                type: 'div',
                id: ['smoke'],
                className: ['flex-item', 'smoke']
            }, {
                type: 'div',
                id: ['water'],
                className: ['flex-item', 'water']
            }]
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
            className: ['first', 'cloud'],
            innerElement: [{
                type: 'img',
                src: 'assets/img/clouds/first-cloud.png'
            }]
        }, {
            type: 'div',
            className: ['second', 'cloud'],
            innerElement: [{
                type: 'img',
                src: 'assets/img/clouds/second-cloud.png'
            }]
        }, {
            type: 'div',
            className: ['third', 'cloud'],
            innerElement: [{
                type: 'img',
                src: 'assets/img/clouds/third-cloud.png'
            }]
        }, {
            type: 'div',
            className: ['forth', 'cloud'],
            innerElement: [{
                type: 'img',
                src: 'assets/img/clouds/forth-cloud.png'
            }]
        }, {
            type: 'div',
            className: ['fifth', 'cloud'],
            innerElement: [{
                type: 'img',
                src: 'assets/img/clouds/fifth-cloud.png'
            }]
        }, {
            type: 'div',
            className: ['sixth', 'cloud'],
            innerElement: [{
                type: 'img',
                src: 'assets/img/clouds/first-cloud.png'
            }]
        }, {
            type: 'div',
            className: ['seventh', 'cloud'],
            innerElement: [{
                type: 'img',
                src: 'assets/img/clouds/first-cloud.png'
            }]
        }, {
            type: 'div',
            className: ['eight', 'cloud'],
            innerElement: [{
                type: 'img',
                src: 'assets/img/clouds/fifth-cloud.png'
            }]
        }, {
            type: 'div',
            className: ['ninth', 'cloud'],
            innerElement: [{
                type: 'img',
                src: 'assets/img/clouds/second-cloud.png'
            }]
        }, {
            type: 'div',
            className: ['tenth', 'cloud'],
            innerElement: [{
                type: 'img',
                src: 'assets/img/clouds/third-cloud.png'
            }]
        }]

    };

    const $ELEMENTS = {firstPage: firstPage, islandMap: islandMap}

    const TYPES = ['firstPage', 'islandMap', 'play'];

    return {
        elements: $ELEMENTS,
        types: TYPES
    };

})();
