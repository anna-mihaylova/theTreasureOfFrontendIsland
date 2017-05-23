const DRAW_PLAYER_DATA = (function(game, player) {


    function DrawPlayerData(game, player) {

        let _game = game;
        let _$main = _game.getMain();
        let _player = player;
        let _playerElements = PLAYER_COMPONENTS.playerClasses;
        let _$footer = _game.getMain().querySelector( _playerElements[0]);
        let _$gameMenu = _game.getMain().querySelector(_playerElements[1]);
        let _$pageForPlayer = _game.getMain().querySelector(_playerElements[2]);
        let _$playerName = _game.getMain().querySelectorAll(_playerElements[10]);
        let _$playerLive = _game.getMain().querySelectorAll(_playerElements[3]);
        let _$playerCoins = _game.getMain().querySelectorAll(_playerElements[4]);
        let _$playerCompletedMaps = _game.getMain().querySelectorAll(_playerElements[5]);
        let _$playerCompletedPirates = _game.getMain().querySelectorAll(_playerElements[6]);
        let _$playerBomb = _game.getMain().querySelectorAll(_playerElements[7]);
        let _$playerHook = _game.getMain().querySelectorAll(_playerElements[8]);
        let _$playerPipe = _game.getMain().querySelectorAll(_playerElements[9]);
        let _$playerGames = _game.getMain().querySelectorAll(_playerElements[11]);
        let _$playerWins = _game.getMain().querySelectorAll(_playerElements[12]);

        this.getMain = function() {
            return _$main;
        }

        this.getPlayer = function() {
            return _player;
        }

        this.getFooter = function() {
            return _$footer;
        }

        this.getGameMenu = function() {
            return _$gameMenu;
        }

        this.getPageForPlayer = function() {
            return _$pageForPlayer;
        }

        this.getPlayerName = function() {
            return _$playerName;
        }

        this.getPlayerLive = function() {
            return _$playerLive;
        }

        this.getPlayerCoins = function() {
            return _$playerCoins;
        }

        this.setPlayerCoins = function(value) {
            _$playerCoins = value;
        }

        this.getPlayerCompletedMaps = function() {
            return _$playerCompletedMaps;
        }

        this.getPlayerCompletedPirates = function() {
            return _$playerCompletedPirates;
        }

        this.getPlayerBomb = function() {
            return _$playerBomb;
        }

        this.getPlayerHook = function() {
            return _$playerHook;
        }

        this.getPlayerPipe = function() {
            return _$playerPipe;
        }

        this.getPlayerGames = function() {
            return _$playerGames;
        }

        this.getPlayerWins = function() {
            return _$playerWins;
        }

        this.draw();
    }

    DrawPlayerData.prototype.deleteParagraph = function(paragraph) {
        if (paragraph.firstChild) {
            while (paragraph.firstChild) {
                paragraph.removeChild(paragraph.firstChild);
            }
        }
    };

    DrawPlayerData.prototype.draw = function() {
        if (this.getFooter().classList.contains('hidden')) {
            this.getFooter().classList.remove('hidden')
        }
        this.drawParagraph(this.getPlayerName(), this.getPlayer().getName())
        this.drawParagraph(this.getPlayerLive(), this.getPlayer().getLive())
        this.drawParagraph(this.getPlayerCoins(), this.getPlayer().getTreasure())
        this.drawParagraph(this.getPlayerCompletedMaps(), this.getPlayer().getMap())
        this.drawParagraph(this.getPlayerCompletedPirates(), this.getPlayer().getFlag())
        this.drawParagraph(this.getPlayerBomb(), this.getPlayer().getBomb())
        this.drawParagraph(this.getPlayerHook(), this.getPlayer().getHook())
        this.drawParagraph(this.getPlayerPipe(), this.getPlayer().getPipe())
        this.drawParagraph(this.getPlayerGames(), this.getPlayer().getGames())
        this.drawParagraph(this.getPlayerWins(), this.getPlayer().getWins())
    };

    DrawPlayerData.prototype.drawParagraph = function(where, what) {
        for (variable of where) {
            this.deleteParagraph(variable);
            let value = document.createTextNode(what);
            variable.appendChild(value);
        }
    };

    return DrawPlayerData;
}());
