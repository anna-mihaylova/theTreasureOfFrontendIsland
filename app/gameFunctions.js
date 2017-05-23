const GAME_FUNCTIONS = (function() {
    let _gameConstructors = GAME_ELEMENTS.constructors;
    let _gameTypes = GAME_ELEMENTS.types;
    let _mainComponents = MAIN_COMPONENTS;
    let _mainComponentsElements = MAIN_COMPONENTS_ELEMENTS;
    let _formComponents = FORM_COMPONENTS;
    let _formComponentsElements = FORM_COMPONENTS_ELEMENTS;
    let _mapComponents = MAPS_COMPONENTS;
    let _battleComponents = BATTLE_COMPONENTS;
    let _infoComponents = INFO_COMPONENTS;
    let _playerComponents = PLAYER_COMPONENTS;

    function click (e, game) {
        let component, element;
        let mainComponents = VERIFICATIONS.isCorrectClass(e.target.classList, _mainComponents.types);
        let formComponents = VERIFICATIONS.isCorrectClass(e.target.classList, _formComponents.types);
        let mapComponents = VERIFICATIONS.isCorrectClass(e.target.classList, _mapComponents.types);
        let battleComponents = VERIFICATIONS.isCorrectClass(e.target.classList, _battleComponents.types);
        let infoComponents = VERIFICATIONS.isCorrectClass(e.target.classList, _infoComponents.types);
        let infoClasses = VERIFICATIONS.isCorrectClass(e.target.classList, _infoComponents.infoClasses);
        let playerComponents = VERIFICATIONS.isCorrectClass(e.target.classList, _playerComponents.types);
        let gameTypes = VERIFICATIONS.isCorrectClass(e.target.classList, _gameTypes);



        if (mainComponents){
            return component = PAGE_CREATOR.create(game, _mainComponents.types[1]);
        }

        if (formComponents){
            component = PAGE_CREATOR.create(game, _mainComponents.types[1]);
            component = new PAGE_FORM(game, _formComponents.elements[formComponents], _formComponentsElements.elements[formComponents]);
            return element = new FORM_CREATOR(game, component);
        }

        if (mapComponents){
            if (checkForLoginPlayer(game)){
                return component = MAP_CREATOR.create(game, mapComponents);
            }
        }

        if (infoComponents){
            return component = INFO_CREATOR.create(game, infoComponents, _infoComponents.elements[infoComponents], infoClasses);
        }

        if (playerComponents){
            if (checkForLoginPlayer(game)){
                game.getMain().querySelector(`#${_playerComponents.types[1]}`).classList.remove('hidden');
            }
        }

        if (gameTypes){
            let confirm = game.getMain().querySelector('#confirm');
            let text = confirm.querySelector('.confirm.p');
            CREATORS.addTextNode(text, 'Are you sure?')
            confirm.classList.remove('hidden')

            confirm.addEventListener('click', function(e){
                checkConfirm(e, game, gameTypes, confirm)
            }, false)

        }
        if (e.target.classList.contains('exit')){
            if (checkForLoginPlayer(game)){
                exitFunction(game)
            }


        }

    };

    function dbClick (e) {
        if (e.target.classList.contains('dbclick')){
            e.target.classList.add('hidden')
        }
    };


    function checkConfirm (e, game, gameType, confirm) {

        if (e.target.classList.contains('yes')){
            game.setType(gameType);
        }
        confirm.removeEventListener('click', function(e){
            checkConfirm(e, game, gameTypes, confirm)
        }, false);


        QUESTION_CREATOR.clearInterval()
        component = PAGE_CREATOR.create(game, MAIN_COMPONENTS.types[1]);
        confirm.classList.add('hidden');
    };

    function checkPlayer (game, player, functionName) {
        VERIFICATIONS.isPlayerInstanceOfConstructorPlayer(player);
     // VERIFICATIONS.isPlayerCanInstanceOfFunction(functionName);
    };

    function checkForLoginPlayer (game) {
        if(game.getPlayer() === ''){
            firstLogin(game);
            return false;
        }
        return true;

    };

    function firstLogin (game) {
        let news = game.getMain().querySelector('#badNews');
        let pNews = news.querySelector('.bad-news');
        pNews.innerText = '';
        let value = document.createTextNode('Please first login');
        pNews.appendChild(value);
        CREATORS.displayElement(game.getMain(),'badNews');
    };

    function exitFunction (game) {
        let information = exitData(game.getPlayer());
        let self = this;
        $.ajax({
            type:"POST",
            url: "php/exit.php",
            data: information,
            success:function(data){
                if (JSON.parse(data) === 'Success'){
                    GAME.getInstance().playerSet('');
                    let createFirstPage = PAGE_CREATOR.create(game, _mainComponents.types[0]);
                }
            }
        });
    };

    function exitData (player) {
        let information = {
            username: player.getName(),
            points: player.getTreasure(),
            games: player.getGames(),
            wins: player.getWins(),
            html: player.getHtmlMap(),
            css: player.getCssMap(),
            js: player.getJsMap(),
            bomb: player.getBomb(),
            hook: player.getHook(),
            pipe: player.getPipe()
        }
        return information;
    };


    return {
        click: click,
        checkPlayer: checkPlayer,
        dbClick: dbClick,
        checkForLoginPlayer: checkForLoginPlayer
    };

}());
