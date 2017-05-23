const MAIN_COMPONENTS_ELEMENTS = (function() {

    const header = {
        pageElement: {
            type: 'header',
            id: 'logo',
            className: ['flex-item']
        },
        innerPageElements: [{
            type: 'div',
            id: 'logoFlag',
            className: ['flex-item'],
            innerElement: [{
                type: 'img',
                src: 'assets/img/logo/flag.png'
            }]
        }, {
            type: 'div',
            id: 'logoText',
            className: ['flex-item'],
            innerElement: [{
                type: 'img',
                src: 'assets/img/logo/logo.png'
            }]
        }]
    };

    const mainMenu = {
        pageElement: {
            type: 'nav',
            id: 'mainMenu'
        },
        innerPageElements: [{
            type: 'div',
            id: 'divMainMenu',
            className: ['flex-item', 'menu'],
            innerElement: [{
                type: 'div',
                className: ['flex-item', 'icon', 'login', 'loginf']
            }, {
                type: 'p',
                className: ['main-menu', 'p', 'login', 'loginf'],
                innerText: 'login'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'register', 'registerf']
            }, {
                type: 'p',
                className: ['main-menu', 'p', 'register', 'registerf'],
                innerText: 'register'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'rules', 'info']
            }, {
                type: 'p',
                className: ['main-menu', 'p', 'rules', 'info'],
                innerText: 'rules'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'play']
            }, {
                type: 'p',
                className: ['main-menu', 'p',  'play'],
                innerText: 'play'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'score']
            }, {
                type: 'p',
                className: ['main-menu', 'p',  'score'],
                innerText: 'score'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'credits', 'forUs']
            }, {
                type: 'p',
                className: ['main-menu', 'p',  'credits', 'forUs'],
                innerText: 'credits'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'exit']
            }, {
                type: 'p',
                className: ['main-menu', 'p',  'exit'],
                innerText: 'exit'
            }]
        }]

    };

    const bottleMenu = {
        pageElement: {
            type: 'nav',
            id: 'bottleMenu'
        },
        innerPageElements: [{
            type: 'div',
            id: 'divBottleMenu',
            className: ['flex-item', 'menu'],
            innerElement: [{
                type: 'div',
                className: ['flex-item', 'bottle-menu', 'icon', 'normal']
            }, {
                type: 'p',
                className: ['bottle-menu', 'p', 'normal'],
                innerText: 'normal quiz'
            }, {
                type: 'div',
                className: ['flex-item' ,'bottle-menu', 'icon', 'speed']
            }, {
                type: 'p',
                className: ['bottle-menu', 'p', 'speed'],
                innerText: 'speed quiz'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'bottle-menu', 'battle']
            }, {
                type: 'p',
                className: ['bottle-menu', 'p', 'battle'],
                innerText: 'battle quiz'
            }, {
                type: 'div',
                className: ['flex-item', 'bottle-menu', 'icon', 'bomb', 'info']
            }, {
                type: 'p',
                className: ['bottle-menu', 'p', 'bomb'],
                innerText: 'bomb'
            }, {
                type: 'div',
                className: ['flex-item', 'bottle-menu', 'icon', 'hook', 'info']
            }, {
                type: 'p',
                className: ['bottle-menu', 'p', 'hook', 'info'],
                innerText: 'hook'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'pipe', 'info']
            }, {
                type: 'p',
                className: ['bottle-menu', 'p', 'pipe', 'info'],
                innerText: 'pipe'
            }, {
                type: 'div',
                className: ['flex-item', 'bottle-menu', 'icon', 'map', 'info']
            }, {
                type: 'p',
                className: ['bottle-menu', 'p', 'map', 'info'],
                innerText: 'map'
            }, {
                type: 'div',
                className: ['flex-item' ,'bottle-menu', 'icon', 'play', 'info']
            }, {
                type: 'p',
                className: ['bottle-menu', 'p', 'play', 'info'],
                innerText: 'play'
            }, {
                type: 'div',
                className: ['flex-item', 'bottle-menu', 'icon', 'flag', 'info']
            }, {
                type: 'p',
                className: ['bottle-menu', 'p', 'flag', 'info'],
                innerText: 'flag'
            }, {
                type: 'div',
                className: ['flex-item', 'bottle-menu', 'icon', 'heart', 'info']
            }, {
                type: 'p',
                className: ['bottle-menu', 'p', 'heart', 'info'],
                innerText: 'live'
            }, {
                type: 'div',
                className: ['flex-item', 'bottle-menu', 'icon', 'player']
            }, {
                type: 'p',
                className: ['bottle-menu', 'p', 'player'],
                innerText: 'player'
            }, {
                type: 'div',
                className: ['flex-item', 'bottle-menu', 'icon', 'treasure', 'info']
            }, {
                type: 'p',
                className: ['bottle-menu', 'p', 'treasure', 'info'],
                innerText: 'coins'
            }, ]
        }]

    };

    const goodNews = {
        pageElement: {
            type: 'div',
            id: 'goodNews',
            className: ['hidden', 'dbclick']
        },
        innerPageElements: [{
            type: 'p',
            className: ['good-news', 'padding']
        }]


    };

    const badNews = {
        pageElement: {
            type: 'div',
            id: 'badNews',
            className: ['hidden', 'dbclick']
        },
        innerPageElements: [{
            type: 'p',
            className: ['bad-news', 'padding']
        }]

    };

    const confirm = {
        pageElement: {
            type: 'div',
            id: 'confirm',
            className: ['hidden', 'dbclick']
        },
        innerPageElements: [{
            type: 'p',
            className: ['confirm', 'p']
        },{
            type: 'button',
            className: ['confirm', 'yes'],
            value: '#',
            innerText: 'yes'
        }, {
            type: 'button',
            className: ['confirm', 'no'],
            value: '#',
            innerText: 'no'
        }]

    };
    const mainMenu2 = {
        pageElement: {
            type: 'nav',
            id: 'mainMenu'
        },
        innerPageElements: [{
            type: 'div',
            id: 'divMainMenu',
            className: ['flex-item', 'menu'],
            innerElement: [{
                type: 'div',
                className: ['flex-item', 'icon', 'normal']
            }, {
                type: 'p',
                className: ['main-menu', 'p', 'normal'],
                innerText: 'normal'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'speed']
            }, {
                type: 'p',
                className: ['main-menu', 'p', 'speed'],
                innerText: 'speed'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'rules', 'info']
            }, {
                type: 'p',
                className: ['main-menu', 'p', 'rules', 'info'],
                innerText: 'rules'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'battle']
            }, {
                type: 'p',
                className: ['main-menu', 'p',  'battle'],
                innerText: 'battle'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'score']
            }, {
                type: 'p',
                className: ['main-menu', 'p',  'score'],
                innerText: 'score'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'credits', 'forUs']
            }, {
                type: 'p',
                className: ['main-menu', 'p',  'credits', 'forUs'],
                innerText: 'credits'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'exit']
            }, {
                type: 'p',
                className: ['main-menu', 'p',  'exit'],
                innerText: 'exit'
            }]
        }]

    };


    const $ELEMENTS = {confirm: confirm, header: header, mainMenu: mainMenu, mainMenu2: mainMenu2, bottleMenu: bottleMenu, goodNews: goodNews, badNews: badNews}

    const TYPES= ['header', 'mainMenu', 'bottleMenu', 'goodNews', 'badNews', 'confirm'];

    const changeDiv = ['first', 'island', 'maps', 'battle'];

    return {
        elements: $ELEMENTS,
        types: TYPES,
        main: changeDiv
    };

})();
