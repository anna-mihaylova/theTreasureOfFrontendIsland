const PLAYER_FUNCTIONS = (function() {

    let _playerComponents = PLAYER_COMPONENTS.types;
    // let _tableTypes = PIRATES_DATA.tableTypes;
    // let _levelTypes = PIRATES_DATA.levelTypes;
    // let _dataComponents = PIRATES_DATA.dataComponents;



    function checkForMap (html, css, js) {
        let map;
        let map1 = 0;
        let map2 = 0;
        let map3 = 0;
        if(html === 3){
            map1 = 1;
        }
        if(css === 3){
            map2 = 1;
        }
        if(js === 3){
            map3 = 1;
        }
        map = map1 + map2 + map3;
        return map;
    };

    function win (map, player, game) {
        player.setWins(1);
        if(map === 'htmlMap'){
            player.setHtmlMap(0);
        }
        if(map === 'cssMap'){
            player.setCssMap(0);
        }
        if(map === 'jsMap'){
            player.setJsMap(0);
        }
        setTimeout(function(){
            let good = game.getMain().querySelector('#goodNews');
            let text = good.querySelector('.good-news');
            CREATORS.addTextNode(text, 'YOU WIN')
            good.classList.remove('hidden')
        }, 5000);
        setTimeout(function(){
            component = PAGE_CREATOR.create(game, MAIN_COMPONENTS.types[1]);
        }, 10000);
    };


    function getExtra (player) {
        let extrasArray = ['bomb', 'hook', 'pipe'];
        let random = Math.floor(Math.random() * extrasArray.length);

        if (extrasArray[random] === 'bomb'){
            return player.setBomb(+player.getBomb() + 1);
        }

        if (extrasArray[random] === 'hook'){
            return player.setHook(+player.getHook() + 1);

        }

        if (extrasArray[random] === 'pipe'){
            return player.setPipe(+player.getPipe() + 1);
        }
    };


    return {
        checkForMap: checkForMap,
        win: win,
        getExtra: getExtra

    };

}());
