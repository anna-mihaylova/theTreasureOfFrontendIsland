const PLAYER_COMPONENTS = (function() {

    const gameMenu = {
        pageElement: {
            type: 'footer'

        },
        innerPageElements: [{
            type: 'nav',
            id: 'gameMenu',
            className: ['flex-item', 'menu'],
            innerElement: [{
                type: 'div',
                className: ['flex-item', 'icon', 'game-menu', 'heart', 'info']
            }, {
                type: 'p',
                id: 'forHeart',
                className: ['game-menu', 'p'],
                innerText: 'live:'
            }, {
                type: 'p',
                id: 'forHeartValue',
                className: ['game-menu', 'p', 'value'],
                innerText: ''
            }, {
                type: 'div',
                className: ['flex-item', 'game-menu', 'icon', 'treasure', 'info']
            }, {
                type: 'p',
                id: 'forTreasure',
                className: [ 'game-menu', 'p'],
                innerText: 'coins:'
            }, {
                type: 'p',
                id: 'forTreasureValue',
                className: [ 'game-menu', 'p', 'value'],
                innerText: ''
            }, {
                type: 'div',
                className: ['flex-item', 'game-menu',  'icon', 'map', 'info']
            }, {
                type: 'p',
                id: 'forMap',
                className: [ 'game-menu', 'p'],
                innerText: 'maps:'
            }, {
                type: 'p',
                id: 'forMapValue',
                className: ['p',  'game-menu',  'value'],
                innerText: ''
            }, {
                type: 'p',
                id: 'forMapValueOf',
                className: ['p',  'game-menu', 'value'],
                innerText: `*3`
            }, {
                type: 'div',
                className: ['flex-item', 'game-menu',  'icon', 'flag', 'info']
            }, {
                type: 'p',
                id: 'forFlag',
                className: [ 'game-menu', 'p'],
                innerText: 'flags:'
            }, {
                type: 'p',
                id: 'forFlagValue',
                className: ['p',  'game-menu',  'value'],
                innerText: ''
            }, {
                type: 'p',
                id: 'forFlagValueOf',
                className: ['p', 'game-menu', 'value'],
                innerText: `*9`
            }, {
                type: 'p',
                id: 'extras',
                className: ['p', 'game-menu', 'value'],
                innerText: 'extras:'
            }, {
                type: 'div',
                className: ['flex-item', 'game-menu', 'icon', 'bomb', 'info']
            }, {
                type: 'p',
                id: 'forBombValue',
                className: ['p', 'game-menu', 'value'],
                innerText: 'bomb'
            }, {
                type: 'div',
                className: ['flex-item', 'game-menu', 'icon', 'hook', 'info']
            }, {
                type: 'p',
                id: 'forHookValue',
                className: ['p', 'game-menu', 'value'],
                innerText: 'hook'
            }, {
                type: 'div',
                className: ['flex-item', 'game-menu', 'icon', 'pipe', 'info']
            }, {
                type: 'p',
                id: 'forPipeValue',
                className: ['p', 'game-menu', 'value'],
                innerText: 'pipe'
            }, {
                type: 'div',
                className: ['flex-item', 'game-menu', 'icon', 'player']
            }, {
                type: 'p',
                id: 'forPlayer',
                className: [ 'game-menu', 'p'],
                innerText: 'name:'
            }, {
                type: 'p',
                id: 'forPlayerValue',
                className: [ 'game-menu', 'p', 'value'],
                innerText: ''
            }, ]
        }]
    };

    const forPlayerInfo = {
        pageElement: {
            type: 'div',
            id: 'forPlayerInfo',
            className: ['hidden', 'dbclick']
        },
        innerPageElements: [{
            type: 'div',
            className: ['for-player-info-container', 'flex-item'],
            innerElement: [{
                type: 'div',
                className: ['flex-item', 'icon', 'player']
            }, {
                type: 'p',
                id: 'forPlayer',
                className: ['for-player', 'p'],
                innerText: 'name:'
            }, {
                type: 'p',
                id: 'forPlayerValue',
                className: ['for-player', 'p', 'value'],
                innerText: '2222222222'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'play-games']
            }, {
                type: 'p',
                id: 'forPLayGames',
                className: ['for-player', 'p'],
                innerText: 'games:'
            }, {
                type: 'p',
                id: 'forPLayGamesValue',
                className: ['for-player', 'p', 'value'],
                innerText: '10'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'play-wins']
            }, {
                type: 'p',
                id: 'forPLayWins',
                className: ['for-player', 'p'],
                innerText: 'wins:'
            }, {
                type: 'p',
                id: 'forPLayWinsValue',
                className: ['for-player', 'p', 'value'],
                innerText: '10'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'heart']
            }, {
                type: 'p',
                id: 'forHeart',
                className: ['for-player', 'p'],
                innerText: 'live:'
            }, {
                type: 'p',
                id: 'forHeartValue',
                className: ['for-player', 'p', 'value'],
                innerText: '10'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'treasure']
            }, {
                type: 'p',
                id: 'forTreasure',
                className: ['for-player', 'p'],
                innerText: 'coins:'
            }, {
                type: 'p',
                id: 'forTreasureValue',
                className: ['for-player', 'p', 'value'],
                innerText: '1000'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'map']
            }, {
                type: 'p',
                id: 'forMap',
                className: ['for-player', 'p'],
                innerText: 'maps:'
            }, {
                type: 'p',
                id: 'forMapValue',
                className: ['for-player', 'p', 'value'],
                innerText: '0'
            }, {
                type: 'p',
                id: 'forMapValueOf',
                className: ['for-player', 'p', 'value'],
                innerText: `*3`
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'flag']
            }, {
                type: 'p',
                id: 'forFlag',
                className: ['for-player', 'p'],
                innerText: 'flags:'
            }, {
                type: 'p',
                id: 'forFlagValue',
                className: ['for-player', 'p', 'value'],
                innerText: '0'
            }, {
                type: 'p',
                id: 'forFlagValueOf',
                className: ['for-player', 'p', 'value'],
                innerText: `*9`
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'bomb']
            }, {
                type: 'p',
                id: 'forBomb',
                className: ['for-player', 'p'],
                innerText: 'bombs:'
            }, {
                type: 'p',
                id: 'forBombValue',
                className: ['for-player', 'p', 'value'],
                innerText: '10'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'hook']
            }, {
                type: 'p',
                id: 'forHook',
                className: ['for-player', 'p'],
                innerText: 'hooks:'
            }, {
                type: 'p',
                id: 'forHookValue',
                className: ['for-player', 'p', 'value'],
                innerText: '10'
            }, {
                type: 'div',
                className: ['flex-item', 'icon', 'pipe']
            }, {
                type: 'p',
                id: 'forPipe',
                className: ['for-player', 'p'],
                innerText: 'pipes:'
            }, {
                type: 'p',
                id: 'forPipeValue',
                className: ['for-player', 'p', 'value'],
                innerText: '10'
            }]
        }]
    };


    const PLAYER_CLASSES = ['footer', '#gameMenu', '#forPlayerInfo', '#forHeartValue', '#forTreasureValue', '#forMapValue', '#forFlagValue', '#forBombValue', '#forHookValue', '#forPipeValue', '#forPlayerValue', '#forPLayGamesValue', '#forPLayWinsValue'];

    const $ELEMENTS = {footer: gameMenu, forPlayerInfo: forPlayerInfo}

    const TYPES = ['gameMenu', 'forPlayerInfo', 'player', 'score'];

    const COMPONENTS = ['username', 'games', 'wins', 'points', 'html', 'css', 'js', 'bomb', 'hook', 'pipe'];

    return {
        elements: $ELEMENTS,
        types: TYPES,
        playerClasses: PLAYER_CLASSES,
        components: COMPONENTS
    };

})();
