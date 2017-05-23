const FORM_COMPONENTS_ELEMENTS = (function() {

    const login = {
        pageElement: {
            type: 'form',
            id: 'loginForm',
            className: ['form', 'login'],
            action: '',
            method: 'POST'
        },
        innerPageElements: [{
            type: 'label',
            id: 'loginLabel',
            className: ['form', 'name', 'h1', 'block'],
            for: 'loginForm',
            innerText: 'login'
        }, {
            type: 'div',
            className: ['form', 'container', 'block'],
            innerElement: [{
                type: 'label',
                id: 'usernameLabelLogin',
                className: ['form', 'block', 'name', 'composites'],
                for: 'usernameLogin',
                innerText: 'username:'
            }, {
                type: 'div',
                className: ['form', 'image', 'username', 'inline']
            }, {
                type: 'input',
                id: 'usernameLogin',
                className: ['inline', 'form', 'username', 'input', 'login'],
                value: 'username',
                typeInput: 'text'
            }, {
                type: 'p',
                id: 'usernameloginParagraph',
                className: ['form', 'username', 'paragraph']
            }]
        }, {
            type: 'div',
            className: ['form', 'container', 'block'],
            innerElement: [{
                type: 'label',
                id: 'passwordLabel',
                className: ['form', 'block', 'name', 'composites'],
                for: 'passwordLogin',
                innerText: 'password:'
            }, {
                type: 'div',
                className: ['form', 'image', 'password', 'inline']
            }, {
                type: 'input',
                id: 'passwordLogin',
                className: ['inline', 'form', 'password', 'input', 'login'],
                value: 'password',
                typeInput: 'password'
            }, {
                type: 'p',
                id: 'passwordLoginParagraph',
                className: ['form', 'password', 'paragraph']
            }]
        }, {
            type: 'div',
            id: 'links',
            innerElement: [{
                type: 'a',
                id: 'linkRegistration',
                className: ['inline', 'registerf'],
                href: '#',
                innerText: 'registration'
            }, {
                type: 'a',
                id: 'linkForgotPassword',
                className: ['inline', 'forgot-password', 'forgotf'],
                href: '#',
                innerText: 'forgot password'
            }]
        }, {
            type: 'button',
            id: 'loginBtn',
            className: ['form', 'button', 'login'],
            value: '#',
            innerText: 'login'
        }]

    };

    const register = {
        pageElement: {
            type: 'form',
            id: 'registrationForm',
            className: ['form', 'register'],
            action: '',
            method: 'POST'
        },
        innerPageElements: [{
                type: 'label',
                id: 'registrationLabel',
                className: ['form', 'name', 'h1', 'block'],
                for: 'registrationForm',
                innerText: 'registration'
            }, {
                type: 'div',
                className: ['form', 'container', 'block'],
                innerElement: [{
                    type: 'label',
                    id: 'usernameLabelRegistration',
                    className: ['form', 'block', 'name', 'composites'],
                    for: 'usernameRegistration',
                    innerText: 'username:'
                }, {
                    type: 'div',
                    className: ['form', 'image', 'registration', 'username', 'inline']
                }, {
                    type: 'input',
                    id: 'usernameRegistration',
                    className: ['inline', 'form', 'username', 'input', 'registration'],
                    value: 'username',
                    typeInput: 'text'
                }, {
                    type: 'p',
                    id: 'usernameRegistrationParagraph',
                    className: ['hidden', 'form', 'username', 'paragraph']
                }]
            }, {
                type: 'div',
                className: ['form', 'container', 'block'],
                innerElement: [{
                    type: 'label',
                    className: ['form', 'block', 'name', 'composites'],
                    for: 'passwordRegistration',
                    innerText: 'password:'
                }, {
                    type: 'div',
                    className: ['form', 'image', 'password', 'registration', 'inline']
                }, {
                    type: 'input',
                    id: 'passwordRegistration',
                    className: ['inline', 'form', 'password', 'input', 'registration'],
                    value: 'password',
                    typeInput: 'password'
                }, {
                    type: 'p',
                    id: 'passwordParagraphRegistration',
                    className: ['form', 'password', 'paragraph']
                }]
            }, {
                type: 'div',
                className: ['form', 'container', 'block'],
                innerElement: [{
                    type: 'label',
                    className: ['form', 'block', 'name', 'composites'],
                    for: 'repeatPasswordRegistration',
                    innerText: 'repeatpassword:'
                }, {
                    type: 'div',
                    className: ['form', 'image', 'password', 'registration', 'inline']
                }, {
                    type: 'input',
                    id: 'repeatPasswordRegistration',
                    className: ['inline', 'form', 'repeat-password', 'input', 'registration'],
                    value: 'repeat-password',
                    typeInput: 'password'
                }, {
                    type: 'p',
                    id: 'repeatPasswordParagraphRegistration',
                    className: ['form', 'repeat-password', 'paragraph']
                }]
            },

            {
                type: 'div',
                className: ['form', 'container', 'block'],
                innerElement: [{
                    type: 'label',
                    className: ['form', 'block', 'name', 'composites'],
                    for: 'emailRegistration',
                    innerText: 'email:'
                }, {
                    type: 'div',
                    className: ['form', 'image', 'email', 'registration', 'inline']
                }, {
                    type: 'input',
                    id: 'emailRegistration',
                    className: ['inline', 'form', 'email', 'input', 'registration'],
                    value: 'email',
                    typeInput: 'email'
                }, {
                    type: 'p',
                    id: 'emailParagraphRegistration',
                    className: ['form', 'email', 'paragraph']
                }]
            },

            {
                type: 'button',
                id: 'registrationBtn',
                className: ['form', 'button', 'registration'],
                value: '#',
                innerText: 'registration'
            }
        ]

    };

    const forgot = {
        pageElement: {
            type: 'form',
            id: 'forgotPassword',
            className: ['form', 'forgot'],
            action: '',
            method: 'POST'
        },
        innerPageElements: [{
                type: 'label',
                id: 'forgotPasswordLabel',
                className: ['form', 'name', 'h1', 'block'],
                for: 'forgotPassword',
                innerText: 'forgot password'
            }, {
                type: 'div',
                className: ['form', 'container', 'block'],
                innerElement: [{
                    type: 'label',
                    id: 'emailForgotPasswordLabel',
                    className: ['form', 'block', 'name', 'composites'],
                    for: 'emailForgotPasswordInput',
                    innerText: 'email:'
                }, {
                    type: 'div',
                    className: ['form', 'image', 'email', 'inline']
                }, {
                    type: 'input',
                    id: 'emailForgotPasswordInput',
                    className: ['inline', 'form', 'email', 'forgot-password', 'input'],
                    value: 'email',
                    typeInput: 'email'
                }, {
                    type: 'p',
                    id: 'emailParagraphforgotPassword',
                    className: ['hidden', 'form', 'email', 'forgot-password', 'paragraph']
                }]
            },

            {
                type: 'button',
                id: 'forgotPasswordBtn',
                className: ['form', 'button', 'forgot-password'],
                value: '#',
                innerText: 'reset'
            }
        ]

    };

    let $ELEMENTS = {loginf: login, registerf: register, forgotf: forgot}

    return {
        elements: $ELEMENTS
    };

})();
