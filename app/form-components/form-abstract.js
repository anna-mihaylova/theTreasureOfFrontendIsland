const FORM_ABSTRACT = (function(game, object) {

    const FORM_COMPONENTS = ['username', 'password', 'email', 'repeat-password', 'input', 'paragraph', 'button', 'forgot-password'];

    const FORM_$COMPONENTS = ['.div-form', '.form', '.form.username.input',
        '.form.username.paragraph', '.form.password.input',
        '.form.password.paragraph', '.form.input.repeat-password',
        '.form.repeat-password.paragraph', '.form.email.input',
        '.form.email.paragraph', '.form.forgot-password.input',
        '.form.forgot-password.paragraph', '.form.button'
    ];

    const INFORMATION_$COMPONENTS = ['#goodNews', '.good-news',
        '#badNews', '.bad-news'
    ];

    const FORM_PARAGRAPH_VALUES = [`must be between 3 and 16 characters. May only contain (a-z), (0-9), (-) and (_)`,
        `must be between 6 and 10 characters. May only contain (a-z) and (_)`,
        'repeat password must match the password',
        `email may only contain (a-z), (A-Z), (0-9), (!#$%&'*+-/=?^_{|}~), (.) and (,)`
    ];

    const FORM_ALERT_VALUES = ['is valid', 'is invalid', 'does not match the', 'wrong', 'correct'];


    function FormAbstract(game, object) {
        VERIFICATIONS.isGameInstanceOfConstructorGame(game);
        VERIFICATIONS.isAbstractClass(this);


        let _game = game;
        let _$main = game.getMain();
        let _type = object.getPage()['id'];
        let _$section = object.getPage();
        let _$formDiv = object.getFormDiv();
        let _$form = object.getForm();
        let _$button = object.getButton();

        let _$informationGoodNewsSection = game.getMain().querySelector(INFORMATION_$COMPONENTS[0]);
        let _$informationGoodNewsParagraph = game.getMain().querySelector(INFORMATION_$COMPONENTS[1]);

        let _$informationBadNewsSection = game.getMain().querySelector(INFORMATION_$COMPONENTS[2]);
        let _$informationBadNewsParagraph = game.getMain().querySelector(INFORMATION_$COMPONENTS[3]);



        this.getGame = function() {
            return _game;
        }

        this.getType = function() {
            return _type;
        }

        this.getMain = function() {
            return _$main;
        }

        this.getSection = function() {
            return _$section;
        }

        this.getFormDiv = function() {
            return _$formDiv;
        }

        this.getForm = function() {
            return _$form;
        }

        this.getButton = function() {
            return _$button;
        }

        this.getInformationGoodNewsSection = function() {
            return _$informationGoodNewsSection;
        }

        this.getInformationGoodNewsParagraph = function() {
            return _$informationGoodNewsParagraph;
        }

        this.getInformationBadNewsSection = function() {
            return _$informationBadNewsSection;
        }

        this.getInformationBadNewsParagraph = function() {
            return _$informationBadNewsParagraph;
        }
    }

    FormAbstract.prototype.deleteParagraph = function(paragraph) {
        if (paragraph.firstChild) {
            while (paragraph.firstChild) {
                paragraph.removeChild(paragraph.firstChild);
            }
        }
    };

    FormAbstract.prototype.changeClass = function(paragraph, className) {
        if (className === FormAbstract.prototype.formAlertValues[3]) {
            paragraph.classList.add('wrong-data');
            if (paragraph.classList.contains('correct-data')) {
                paragraph.classList.remove('correct-data');
            }
        }
        if (className === FormAbstract.prototype.formAlertValues[4]) {
            paragraph.classList.add('correct-data');
            if (paragraph.classList.contains('wrong-data')) {
                paragraph.classList.remove('wrong-data');
            }
        }
    };

    FormAbstract.prototype.removeClass = function(paragraph) {
        if (paragraph.classList.contains('correct-data')) {
            paragraph.classList.remove('correct-data');
        }
        if (paragraph.classList.contains('wrong-data')) {
            paragraph.classList.remove('wrong-data');
        }
    };

    FormAbstract.prototype.changeParagraph = function(e, paragraph) {
        if (e.target.value === 'username' || e.target.value === 'email' || e.target.value === 'password' || e.target.value === 'repeat-password' || e.target.value === 'forgot-password') {
            e.target.value = '';
        }
        this.removeClass(paragraph);
        paragraph.classList.remove('hidden');
        this.deleteParagraph(paragraph);
        let strong = this.createStrong(paragraph);
        paragraph.appendChild(strong);
    };

    FormAbstract.prototype.createStrong = function(paragraph) {

        let strong;
        if (paragraph.classList.contains(FormAbstract.prototype.formComponents[0])) {
            return strong = document.createTextNode(FormAbstract.prototype.formParafraphValues[0]);
        }
        if (paragraph.classList.contains(FormAbstract.prototype.formComponents[1])) {
            return strong = document.createTextNode(FormAbstract.prototype.formParafraphValues[1]);
        }
        if (paragraph.classList.contains(FormAbstract.prototype.formComponents[2])) {
            return strong = document.createTextNode(FormAbstract.prototype.formParafraphValues[3]);
        }
        if (paragraph.classList.contains(FormAbstract.prototype.formComponents[3])) {
            return strong = document.createTextNode(FormAbstract.prototype.formParafraphValues[2]);
        }
    };

    FormAbstract.prototype.bindEventSendAjax = function(e) {
        let self = this;

        this.getFormDiv().addEventListener("click", function(e) {
            if (e.target.classList.contains(FormAbstract.prototype.formComponents[6])) {
                e.target.classList.add('button-click');
                e.preventDefault();
                self.validateForm();
            }
        }, true);
    };

    FormAbstract.prototype.validateUserName = function(username) {
        let regexpObj = /^[a-z0-9_-]{3,15}$/gm;
        let result = `${username} ${FormAbstract.prototype.formAlertValues[1]} ${FormAbstract.prototype.formComponents[0]}`;
        this.changeClass(this.getUsernameParagraph(), FormAbstract.prototype.formAlertValues[3]);

        if (regexpObj.test(username)) {
            result = `${FormAbstract.prototype.formComponents[0]} ${FormAbstract.prototype.formAlertValues[0]}`;
            this.changeClass(this.getUsernameParagraph(), FormAbstract.prototype.formAlertValues[4]);
            this.setClientUsername(username);

        } else {
            this.getClientUsername('');
        }
        return result;
    };

    FormAbstract.prototype.validatePassword = function(password) {
        let regexpObj = /^[a-zA-Z0-9_]{6,10}$/gm;
        let result = `${password} ${FormAbstract.prototype.formAlertValues[1]} ${FormAbstract.prototype.formComponents[1]}`;
        this.changeClass(this.getPasswordParagraph(), FormAbstract.prototype.formAlertValues[3]);

        if (regexpObj.test(password)) {
            result = `${FormAbstract.prototype.formComponents[1]} ${FormAbstract.prototype.formAlertValues[0]}`;
            this.changeClass(this.getPasswordParagraph(), FormAbstract.prototype.formAlertValues[4]);
            this.setClientUserPassword(password);
        } else {
            this.getClientUserPassword('');
        }
        return result;
    };

    FormAbstract.prototype.validateRepeatPassword = function(repeatPassword) {

        let result = `${FormAbstract.prototype.formComponents[3]} ${FormAbstract.prototype.formAlertValues[2]} ${FormAbstract.prototype.formComponents[1]}`;
        this.changeClass(this.getRepeatPasswordParagraph(), FormAbstract.prototype.formAlertValues[3]);

        if (this.getClientUserPassword() != '' && this.getClientUserPassword() === repeatPassword) {
            result = `${FormAbstract.prototype.formComponents[3]} ${FormAbstract.prototype.formAlertValues[0]}`;
            this.changeClass(this.getRepeatPasswordParagraph(), FormAbstract.prototype.formAlertValues[4]);
        } else {
            this.setClientUserPassword('');
        }
        return result;
    };

    FormAbstract.prototype.validateEmail = function(emailAdress) {
        let regexpObj = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/g;
        let result = `${emailAdress} ${FormAbstract.prototype.formAlertValues[1]} ${FormAbstract.prototype.formComponents[2]}`;
        this.changeClass(this.getEmailParagraph(), FormAbstract.prototype.formAlertValues[3]);

        if (regexpObj.test(emailAdress)) {
            result = `${FormAbstract.prototype.formComponents[2]} ${FormAbstract.prototype.formAlertValues[0]}`;
            this.changeClass(this.getEmailParagraph(), FormAbstract.prototype.formAlertValues[4]);
            this.setClientEmail(emailAdress);

        } else {
            this.setClientEmail('');
        }
        return result;
    };

    FormAbstract.prototype.formComponents = FORM_COMPONENTS;

    FormAbstract.prototype.$formComponents = FORM_$COMPONENTS;

    FormAbstract.prototype.$informationComponents = INFORMATION_$COMPONENTS;

    FormAbstract.prototype.formParafraphValues = FORM_PARAGRAPH_VALUES;

    FormAbstract.prototype.formAlertValues = FORM_ALERT_VALUES;

    return FormAbstract;

}());
