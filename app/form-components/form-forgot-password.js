const FORM_FORGOT_PASSWORD = (function(game, object) {

    const PAGE_URL_FORGOT_PASSWORD = "php/forgotten_pass.php"

    function ForgotPassword(game, object) {
        VERIFICATIONS.isGameInstanceOfConstructorGame(game);
        FORM_ABSTRACT.call(this, game, object);

        let _$forgotPasswordInput = object.getForgotPasswordInput();
        let _$forgotPasswordParagraph = object.getForgotPasswordParagraph();

        let _clientEmail = '';

        this.getEmailInput = function() {
            return _$forgotPasswordInput;
        }

        this.getEmailParagraph = function() {
            return _$forgotPasswordParagraph;
        }

        this.getClientEmail = function() {
            return _clientEmail;
        }

        this.setClientEmail = function(value) {
            _clientEmail = value;
        }

        this.bindEvents();
    }
    ForgotPassword.prototype = Object.create(FORM_ABSTRACT.prototype);
    ForgotPassword.prototype.constructor = ForgotPassword;

    ForgotPassword.prototype.bindEvents = function() {

        let self = this;

        this.getFormDiv().addEventListener("focus", function(e) {
            debugger
            if (e.target.classList.contains(ForgotPassword.prototype.formComponents[4]) &&
                e.target.classList.contains(ForgotPassword.prototype.formComponents[7])) {
                self.changeParagraph(e, self.getEmailParagraph());
            }

        }, true);

        this.getFormDiv().addEventListener("blur", function(e) {
            if (e.target.classList.contains(ForgotPassword.prototype.formComponents[4]) &&
                e.target.classList.contains(ForgotPassword.prototype.formComponents[7])) {
                self.deleteParagraph(self.getEmailParagraph());
                let strong = document.createTextNode(self.validateEmail(e.target.value));
                self.getEmailParagraph().appendChild(strong);
            }

        }, true);

        this.bindEventSendAjax();
    };


    ForgotPassword.prototype.validateForm = function() {
        if (this.getClientEmail() != '') {
            let information = {
                email: this.getClientEmail()
            }
            this.sendAjax(PAGE_URL_FORGOT_PASSWORD, information);
        }
    }

    ForgotPassword.prototype.sendAjax = function(pageUrl, information, values, isFromRegistration) {
        let self = this;
        $.ajax({
                url: pageUrl,
                method: "POST",
                data: information,
                dataType: 'json',
            })
            .done(function(response) {
                let page = new PAGE_CREATOR (self.getGame(), PAGES.elements[1]);
                return page;
            })
    };

    ForgotPassword.prototype.clearForm = function() {
        this.getForm().reset();
        this.deleteParagraph(this.getEmailParagraph());
    };

    return ForgotPassword;

}());
