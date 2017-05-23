const FORM_LOGIN = (function(game, object) {

    const LOGIN_RESPONCE_VALUES = ['Thank you for login!', 'Username no exists', 'The password does not match'];

    const PAGE_URL_LOGIN = "php/login.php";

    const REGISTRATION = 'registration';

    function Login(game, object) {
        VERIFICATIONS.isGameInstanceOfConstructorGame(game);
        FORM_ABSTRACT.call(this, game, object);

        let _$usernameInput = object.getUsernameInput();
        let _$passwordInput = object.getPasswordInput();
        let _$usernameParagraph = object.getUsernameParagraph();
        let _$passwordParagraph = object.getPasswordParagraph();

        let _clientUsername = '';
        let _clientUserPassword = '';
        let _userFromBase = '';

        this.getUsernameInput = function() {
            return _$usernameInput;
        }

        this.getPasswordInput = function() {
            return _$passwordInput;
        }

        this.getUsernameParagraph = function() {
            return _$usernameParagraph;
        }

        this.getPasswordParagraph = function() {
            return _$passwordParagraph;
        }

        this.getClientUsername = function() {
            return _clientUsername;
        }

        this.setClientUsername = function(value) {
            _clientUsername = value;
        }

        this.getClientUserPassword = function() {
            return _clientUserPassword;
        }

        this.setClientUserPassword = function(value) {
            _clientUserPassword = value;
        }

        this.getUserFromBase = function() {
            return _userFromBase;
        }

        this.setUserFromBase = function(user) {
            _userFromBase = user;
        }

        this.bindEvents();
        this.bindEventSendAjax();
    }
    Login.prototype = Object.create(FORM_ABSTRACT.prototype);
    Login.prototype.constructor = Login;


    Login.prototype.bindEvents = function() {

        let self = this;

        this.getFormDiv().addEventListener("focus", function(e) {
            if (e.target.classList.contains(Login.prototype.formComponents[4])) {

                if (e.target.classList.contains(Login.prototype.formComponents[0])) {
                    self.changeParagraph(e, self.getUsernameParagraph());
                }

                if (e.target.classList.contains(Login.prototype.formComponents[1])) {
                    self.changeParagraph(e, self.getPasswordParagraph());
                }
            }

        }, true);

        this.getFormDiv().addEventListener("blur", function(e) {
            if (e.target.classList.contains(Login.prototype.formComponents[4])) {

                if (e.target.classList.contains(Login.prototype.formComponents[0])) {
                    self.deleteParagraph(self.getUsernameParagraph());
                    let strong = document.createTextNode(self.validateUserName(e.target.value));
                    self.getUsernameParagraph().appendChild(strong);
                }

                if (e.target.classList.contains(Login.prototype.formComponents[1])) {
                    self.deleteParagraph(self.getPasswordParagraph());
                    let strong = document.createTextNode(self.validatePassword(e.target.value));
                    self.getPasswordParagraph().appendChild(strong);
                }
            }

        }, true);

    };

    Login.prototype.validateForm = function() {

        if (this.getClientUsername() != '' && this.getClientUserPassword() != '') {
            let information = {
                username: this.getClientUsername(),
                password: this.getClientUserPassword()
            }
            this.sendAjax(PAGE_URL_LOGIN, information, Login.prototype.responceValuesLogin);
        }
    };

    Login.prototype.sendAjax = function(pageUrl, information, values, isFromRegistration) {
        let self = this;

        $.ajax({
                url: pageUrl,
                method: "POST",
                data: information,
                dataType: 'json',
            })
            .done(function(response) {
                self.responceAjax(response);
            })
    };

    Login.prototype.responceAjax = function(response) {
        if (typeof response[0] === 'object') {
            this.setUserFromBase(response[0]);
            this.createUser(response[0]);
            return this.registrationSucceed();
        }
        if (response === LOGIN_RESPONCE_VALUES[0]) {
            let timer;
            let self = this;

            this.registrationSucceed(values);
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(function() {

                self.sendAjaxAfterRegistration();

            }, 6000);

        }
        if (response === LOGIN_RESPONCE_VALUES[1] || response === LOGIN_RESPONCE_VALUES[2]) {
            return this.registrationFailed(response);
        }
    };

    Login.prototype.registrationFailed = function(response) {
        let timer;
        let self = this;

        let strong = document.createTextNode(response);

        self.getInformationBadNewsSection().classList.remove('hidden');

        self.deleteParagraph(self.getInformationBadNewsParagraph());

        self.getInformationBadNewsParagraph().appendChild(strong);
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {

            self.getInformationBadNewsSection().classList.add('hidden');

        }, 5000);
    };

    Login.prototype.registrationSucceed = function(values) {
        let timer, timer2;
        let self = this;
        self.getSection().classList.add('hidden');
        self.clearForm();
        let strong = document.createTextNode(LOGIN_RESPONCE_VALUES[0]);

        self.getInformationGoodNewsSection().classList.remove('hidden');

        self.deleteParagraph(self.getInformationGoodNewsParagraph());

        self.getInformationGoodNewsParagraph().appendChild(strong);

        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {

            return self.getInformationGoodNewsSection().classList.add('hidden');

        }, 5000);
        if (timer2) {
            clearTimeout(timer2);
        }
        timer2 = setTimeout(function() {
            createFirstPage = new ELEMENTS_CREATOR.create(self.getGame());
        }, 5050);
    };

    Login.prototype.clearForm = function() {
        this.getForm().reset();
        this.deleteParagraph(this.getUsernameParagraph());
        this.deleteParagraph(this.getPasswordParagraph());
    };

    Login.prototype.createUser = function(obj) {
        let player = PLAYER.create (this.getGame(), obj, this);
        GAME.getInstance().playerSet(player, this);
        ELEMENTS_CREATOR.create(this.getGame());
    };

    return Login;
}());
