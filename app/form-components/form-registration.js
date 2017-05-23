const FORM_REGISTRATION = (function(game, object) {

    const REGISTRATION_RESPONCE_VALUES = [`Thank you for registration!`, 'Username already exists', 'Email already exists'];

    const PAGE_URL_REGISTRATION = "php/registration.php";

    function Registration(game, object) {
        VERIFICATIONS.isGameInstanceOfConstructorGame(game);
        FORM_LOGIN.call(this, game, object);

        let _$repeatPasswordInput = object.getRepeatPasswordInput();
        let _$emailInput = object.getEmailInput();
        let _$repeatPasswordParagraph = object.getRepeatPasswordParagraph();
        let _$emailParagraph = object.getEmailParagraph();
        let _clientEmail = '';

        this.getRepeatPasswordInput = function() {
            return _$repeatPasswordInput;
        }

        this.getEmailInput = function() {
            return _$emailInput;
        }

        this.getRepeatPasswordParagraph = function() {
            return _$repeatPasswordParagraph;
        }

        this.getEmailParagraph = function() {
            return _$emailParagraph;
        }

        this.getClientEmail = function() {
            return _clientEmail;
        }

        this.setClientEmail = function(value) {
            _clientEmail = value;
        }
    }
    Registration.prototype = Object.create(FORM_LOGIN.prototype);
    Registration.prototype.constructor = Registration;

    Registration.prototype.bindEvents = function() {
        let self = this;

        FORM_LOGIN.prototype.bindEvents.call(this);

        this.getFormDiv().addEventListener("focus", function(e) {

            if (e.target.classList.contains(Registration.prototype.formComponents[4])) {

                if (e.target.classList.contains(Registration.prototype.formComponents[3])) {
                    self.changeParagraph(e, self.getRepeatPasswordParagraph());
                }
                if (e.target.classList.contains(Registration.prototype.formComponents[2])) {
                    self.changeParagraph(e, self.getEmailParagraph());
                }
            }

        }, true);

        this.getFormDiv().addEventListener("blur", function(e) {

            if (e.target.classList.contains(Registration.prototype.formComponents[4])) {

                if (e.target.classList.contains(Registration.prototype.formComponents[2])) {
                    self.deleteParagraph(self.getEmailParagraph());
                    let strong = document.createTextNode(self.validateEmail(e.target.value));
                    self.getEmailParagraph().appendChild(strong);
                }
                if (e.target.classList.contains(Registration.prototype.formComponents[3])) {
                    self.deleteParagraph(self.getRepeatPasswordParagraph());
                    let strong = document.createTextNode(self.validateRepeatPassword(e.target.value));
                    self.getRepeatPasswordParagraph().appendChild(strong);
                }
            }

        }, true);

    };


    Registration.prototype.validateForm = function(pageUrl) {
        if (this.getClientUsername() != '' && this.getClientUserPassword() != '' && this.getClientEmail() != '') {
            let information = {
                username: this.getClientUsername(),
                password: this.getClientUserPassword(),
                email: this.getClientEmail()
            }
            this.sendAjax(PAGE_URL_REGISTRATION, information, Registration.prototype.responceValuesRegistration);
        }
    };

    Registration.prototype.sendAjax = function(pageUrl, information, values, isFromRegistration) {
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

    Registration.prototype.responceAjax = function(response) {
        if (response === REGISTRATION_RESPONCE_VALUES[0]) {
            let timer;
            let self = this;
            return self.registrationSucceed()
        }
        if (response === REGISTRATION_RESPONCE_VALUES[1] || response === REGISTRATION_RESPONCE_VALUES[2]) {
            return this.registrationFailed(response);
        }
    };

    Registration.prototype.registrationFailed = function(response) {
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

    Registration.prototype.registrationSucceed = function() {
        let timer;
        let self = this;
        self.getSection().classList.add('hidden');
        self.clearForm();
        let strong = document.createTextNode(REGISTRATION_RESPONCE_VALUES[0]);

        self.getInformationGoodNewsSection().classList.remove('hidden');

        self.deleteParagraph(self.getInformationGoodNewsParagraph());

        self.getInformationGoodNewsParagraph().appendChild(strong);

        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {

            self.getInformationGoodNewsSection().classList.add('hidden');
            component = PAGE_CREATOR.create(self.getGame(), MAIN_COMPONENTS.types[1]);
            component = new PAGE_FORM(self.getGame(), FORM_COMPONENTS.elements[FORM_COMPONENTS.types[0]], FORM_COMPONENTS_ELEMENTS.elements[FORM_COMPONENTS.types[0]]);
            page = new FORM_CREATOR(self.getGame(), component);
            return page;
        }, 5000);
    };


    Registration.prototype.clearForm = function() {
        FORM_LOGIN.prototype.clearForm.call(this);
        this.deleteParagraph(this.getRepeatPasswordParagraph());
        this.deleteParagraph(this.getEmailParagraph());
    };

    Registration.prototype.responceValuesRegistration = REGISTRATION_RESPONCE_VALUES;

    return Registration;
}());
