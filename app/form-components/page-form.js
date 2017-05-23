const PAGE_FORM = (function(game, object, form) {

    function PageForm(game, object, form) {

        VERIFICATIONS.isGameInstanceOfConstructorGame(game);

        PAGE_ABSTRACT.call(this, game, object);
        let _$formDiv = '';
        let _$form = '';
        let _$formElements = [];
        let _$formParentElements = [];
        let _$formChildElements = [];
        let _formObject = form;

        let _$usernameInput = '';
        let _$passwordInput = '';
        let _$repeatPasswordInput = '';
        let _$emailInput = '';
        let _$forgotPasswordInput = '';

        let _$usernameParagraph = '';
        let _$passwordParagraph = '';
        let _$repeatPasswordParagraph = '';
        let _$emailParagraph = '';
        let _$forgotPasswordParagraph = '';
        let _$section = '';


        let _$button = '';


        this.getFormObject = function() {
            return _formObject;
        }

        this.getFormDiv = function() {
            return _$formDiv;
        }

        this.setFormDiv = function(value) {
            _$formDiv = value;
        }

        this.getForm = function() {
            return _$form;
        }

        this.setForm = function(value) {
            _$form = value;
        }

        this.getFormElements = function() {
            return _$formElements;
        }

        this.setFormElements = function(val) {
            _$formElements.push(val);
        }

        this.removeFormElements = function() {
            _$formElements = [];
        }

        this.getFormChildElements = function() {
            return _$formChildElements;
        }

        this.setFormChildElements = function(val) {
            _$formChildElements.push(val);
        }

        this.removeFormChildElements = function() {
            _$formChildElements = [];
        }

        this.getUsernameInput = function() {
            return _$usernameInput;
        }

        this.setUsernameInput = function(value) {
            _$usernameInput = value;
        }

        this.getPasswordInput = function() {
            return _$passwordInput;
        }

        this.setPasswordInput = function(value) {
            _$passwordInput = value;
        }

        this.getRepeatPasswordInput = function() {
            return _$repeatPasswordInput;
        }

        this.setRepeatPasswordInput = function(value) {
            _$repeatPasswordInput = value;
        }

        this.getEmailInput = function() {
            return _$emailInput;
        }

        this.setEmailInput = function(value) {
            _$emailInput = value;
        }

        this.getForgotPasswordInput = function() {
            return _$forgotPasswordInput;
        }

        this.setForgotPasswordInput = function(value) {
            _$forgotPasswordInput = value;
        }

        this.getUsernameParagraph = function() {
            return _$usernameParagraph;
        }

        this.setUsernameParagraph = function(value) {
            _$usernameParagraph = value;
        }

        this.getPasswordParagraph = function() {
            return _$passwordParagraph;
        }

        this.setPasswordParagraph = function(value) {
            _$passwordParagraph = value;
        }

        this.getRepeatPasswordParagraph = function() {
            return _$repeatPasswordParagraph;
        }

        this.setRepeatPasswordParagraph = function(value) {
            _$repeatPasswordParagraph = value;
        }

        this.getEmailParagraph = function() {
            return _$emailParagraph;
        }

        this.setEmailParagraph = function(value) {
            _$emailParagraph = value;
        }

        this.getForgotPasswordParagraph = function() {
            return _$forgotPasswordParagraph;
        }

        this.setForgotPasswordParagraph = function(value) {
            _$forgotPasswordParagraph = value;
        }

        this.getButton = function() {
            return _$button;
        }

        this.setButton = function(value) {
            _$button = value;
        }

        this.createAllPage(object['pageElement'], object['innerPageElements'], form['pageElement'], form['innerPageElements']);

    }

    PageForm.prototype = Object.create(PAGE_ABSTRACT.prototype);
    PageForm.prototype.constructor = PageForm;

    PageForm.prototype.createAllPage = function(arr, arr1, arr2, arr3) {
        let element;
        this.createPage(arr);

        for (let variable in arr1) {
            element = this.createPageElement(arr1[variable]);
            this.setElements(element);

            for (let item in arr1[variable]) {

                if (item === 'innerElement') {
                    this.innerElements(arr1[variable][item], arr2, arr3, variable);
                }

            }

        }

        this.appendToMain();
    };

    PageForm.prototype.appendElement = function(element, parentElement) {


        if (Array.isArray(element)) {
            for (var variable of element) {
                parentElement.appendChild(variable);
            }

            return parentElement;
        }

        if (parentElement === this.getMain()) {
            parentElement.appendChild(element);

            this.setFormDiv(this.getMain().querySelector(`#${this.getFormDiv()['id']}`));
            this.setUsernameInput(this.getFormDiv().querySelector(`input.username.input`));
            this.setPasswordInput(this.getFormDiv().querySelector(`input.password.input`));
            this.setRepeatPasswordInput(this.getFormDiv().querySelector(`input.repeat-password.input`))
            this.setEmailInput(this.getFormDiv().querySelector(`input.email.input`))
            this.setForgotPasswordInput(this.getFormDiv().querySelector(`input.forgot-password.input`))

            this.setUsernameParagraph(this.getFormDiv().querySelector(`p.username.paragraph`))
            this.setPasswordParagraph(this.getFormDiv().querySelector(`p.password.paragraph`))
            this.setRepeatPasswordParagraph(this.getFormDiv().querySelector(`p.repeat-password.paragraph`))
            this.setEmailParagraph(this.getFormDiv().querySelector(`p.email.paragraph`))
            this.setForgotPasswordParagraph(this.getFormDiv().querySelector(`p.forgot-password.paragraph`))
            this.setButton(this.getFormDiv().querySelector(`button.button.form`))
            return;
        }
        return parentElement.appendChild(element);
    };

    PageForm.prototype.createForm = function(arr) {

        let form = this.createElementOfPage(arr['type']);

        if (arr['id']) {
            form = this.addId(form, arr['id']);
        }

        if (arr['className']) {
            form = this.addClass(form, arr['className']);
        }

        this.setForm(form);
    };

    PageForm.prototype.createPageElement = function(variable) {

        for (let item in variable) {

            if (item === 'type') {
                element = this.createElementOfPage(variable[item]);
            }

            if (item === 'id') {
                element = this.addId(element, variable[item]);
            }

            if (item === 'className') {
                element = this.addClass(element, variable[item]);
            }

            if (item === 'innerText') {
                element = this.addTextNode(element, variable[item]);
            }

            if (item === 'src') {
                element = this.addSrc(element, variable[item]);
            }

            if (item === 'href') {
                element = this.addHref(element, variable[item]);
            }

            if (item === 'for') {
                element = this.addFor(element, variable[item]);
            }

            if (item === 'value') {
                element = this.addValue(element, variable[item]);
            }

            if (item === 'typeInput') {
                element = this.addType(element, variable[item]);
            }
        }

        return element;
    };

    PageForm.prototype.createFormElements = function(arr2, arr3) {
        let formElement, childElement;
        this.createForm(arr2);

        for (let item in arr3) {
            formElement = this.createPageElement(arr3[item]);
            this.setFormElements(formElement);

            for (let variable in arr3[item]) {

                if (variable === 'innerElement') {

                    for (let i of arr3[item][variable]) {
                        childElement = this.createPageElement(i);
                        this.setFormChildElements(childElement);
                    }

                    this.appendElement(this.getFormChildElements(), this.getFormElements()[item])
                    this.appendElement(this.getFormElements()[item], this.getForm())
                    this.removeFormChildElements()
                }

                this.appendElement(this.getFormElements()[item], this.getForm())
            }
        }

        this.removeFormChildElements()
    };

    PageForm.prototype.innerElements = function(arr, arr2, arr3, variable) {

        for (let i of arr) {

            childElement = this.createPageElement(i);
            this.setChildElements(childElement);

            for (let j in i) {

                if (j === 'innerFormElement') {
                    this.setFormDiv(this.getChildElements()[0]);
                    this.createFormElements(arr2, arr3);
                    this.appendElement(this.getForm(), this.getFormDiv())
                }

            }

            this.appendElement(this.getChildElements(), this.getElements()[variable]);
            this.appendElement(this.getElements()[variable], this.getPage());
            this.removeChildElements();

        }

        this.appendElement(this.getElements()[variable], this.getPage());
    };

    PageForm.prototype.addHref = function(element, href) {
        element.href = href;
        return element;
    };

    PageForm.prototype.addFor = function(element, htmlFor) {
        element.htmlFor = htmlFor;
        return element;
    };

    PageForm.prototype.addValue = function(element, value) {
        element.setAttribute("value", value);
        return element;
    };

    PageForm.prototype.addType = function(element, type) {
        element.setAttribute("type", type);
        return element;
    };

    return PageForm;

}());
