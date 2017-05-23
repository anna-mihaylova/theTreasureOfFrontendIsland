const FORM_CREATOR = (function(game, element) {

    const PAGE_URL_FORGOT_PASSWORD = "php/forgotten_pass.php";

    function FormCreator(game, element) {
        VERIFICATIONS.isGameInstanceOfConstructorGame(game);

        let _game = game;
        let _main = _game.getMain();
        let _element = element;
        let _type = element.getForm()['id'];
        let _formTypes = FORM_COMPONENTS.elements;

        this.getGame = function() {
            return _game;
        }

        this.getMain = function() {
            return _$main;
        }

        this.getElement = function() {
            return _element;
        }

        this.getType = function() {
            return _type;
        }

        this.getFormTypes = function() {
            return _formTypes;
        }

        this.createForm();
    }

    FormCreator.prototype.createForm = function() {
        let form;

        if (this.getType() === 'loginForm') {

            return form = new FORM_LOGIN (this.getGame(), this.getElement());

        }
        if (this.getType() === 'registrationForm') {

            return form = new FORM_REGISTRATION (this.getGame(), this.getElement());

        } else if (this.getType() === 'forgotPassword') {

            return form = new FORM_FORGOT_PASSWORD (this.getGame(), this.getElement());

        } else {

            throw new Error(ERRORS.typeError);
        }
    };

    return FormCreator;
}());
