const CONSTRUCTORS_CLASSES_ID = (function() {

    const gameConstructors = ['Game', 'Player', ]

    const gameClasses = ['main-menu-login', 'login', 'icon', 'main-menu-register', 'register', 'main-menu-play', 'play', 'main-menu-score', 'icon-player', 'score', 'hidden',
    'main-menu-credits','credits','main-menu-rules', 'rules' ,
    'icon-pipe',  'icon-bomb', 'icon-hook',
    'icon-battle', 'icon-flag', 'icon-map', 'icon-heart', 'icon-treasure',
    'icon-play', 'icon-normal', 'icon-speed', 'icon-battle', 'main-menu-exit']


    const gameId = ['linkForgotPassword', 'linkRegistration', 'html-map', 'map-p-html', 'css-map', 'map-p-css', 'js-map', 'map-p-js', 'forPlayerInfo']

    const abstractClass = ['PageAbstract', 'FormAbstract', 'PirateAbstract', 'MapAbstract', 'QuestionAbstract']

    const ELEMENTS = [gameConstructors, gameClasses, gameId, abstractClass]


    return {
        elements: ELEMENTS
    };
})();
