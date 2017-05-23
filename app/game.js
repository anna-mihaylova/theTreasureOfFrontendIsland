const GAME = (function () {

    let instance;

    function Game() {
        const _self = this;
        let _$main = document.querySelector('main#change');
        let _type = GAME_ELEMENTS.types[1];

        let _mainComponents = MAIN_COMPONENTS;
        let _mainComponentsElements = MAIN_COMPONENTS_ELEMENTS;
        let _formComponents = FORM_COMPONENTS;
        let _formComponentsElements = FORM_COMPONENTS_ELEMENTS;
        let _mapComponents = MAPS_COMPONENTS;
        let _battleComponents = BATTLE_COMPONENTS;
        let _infoComponents = INFO_COMPONENTS;

        let _player = '';

        this.getMain = function () {
            return _$main;
        }

        this.getType = function () {
            return _type;
        }

        this.setType = function (value) {
            _type = VERIFICATIONS.isCorrectGameType(value);
        }

        this.getPlayer = function () {
            return _player;
        }

        this.setPlayer = function (value) {
            if (GAME_FUNCTIONS.checkPlayer(value)) {
                _player = value;
            }
        }

        let bindEvents = function () {

            _$main.addEventListener('click', function (e) {

                GAME_FUNCTIONS.click(e, _self);

            }, false);

            _$main.addEventListener('dblclick', function (e) {

                GAME_FUNCTIONS.dbClick(e, _self);

            }, false);

        };


        let playerSet = function (player, functionName) {
            // if (GAME_FUNCTIONS.checkPlayer(player)) {
                _player = player;
            // }
            };





        return {
              init: function () {

                let createFirstPage = PAGE_CREATOR.create(_self, _mainComponents.types[0]);
                bindEvents()

              },
              playerSet: playerSet,
        };
    }

    return {
        getInstance: function () {

            if ( !instance ) {
              instance = new Game();
            }

            return instance;
        }
    };

})();
