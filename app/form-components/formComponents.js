const FORM_COMPONENTS = (function() {

    const login = {
        pageElement: {
            type: 'section',
            id: 'login',
            className: ['flex-item', 'login']
        },
        innerPageElements: [{
            type: 'div',
            className: ['relative'],
            innerElement: [{
                type: 'div',
                id: 'map'
            }, {
                type: 'div',
                className: ['parrot']
            }, {
                type: 'div',
                className: ['dodo']
            }, {
                type: 'div',
                className: ['shark']
            }, {
                type: 'div',
                id: 'formLogin',
                className: ['flex-item', 'div-form'],
                innerFormElement: ''
            }]
        }],

    };

    const register = {
        pageElement: {
            type: 'section',
            id: 'register',
            className: ['flex-item', 'register']
        },
        innerPageElements: [{
            type: 'div',
            className: ['relative'],
            innerElement: [{
                type: 'div',
                id: 'map'
            }, {
                type: 'div',
                className: ['parrot']
            }, {
                type: 'div',
                className: ['dodo']
            }, {
                type: 'div',
                className: ['shark']
            }, {
                type: 'div',
                id: 'formRegistration',
                className: ['flex-item', 'div-form'],
                innerFormElement: ''
            }]
        }]

    };

    const forgot = {
        pageElement: {
            type: 'section',
            id: 'forgot',
            className: ['flex-item', 'forgot']
        },
        innerPageElements: [{
            type: 'div',
            className: ['relative'],
            innerElement: [{
                type: 'div',
                id: 'map'
            }, {
                type: 'div',
                className: ['parrot']
            }, {
                type: 'div',
                className: ['dodo']
            }, {
                type: 'div',
                className: ['shark']
            }, {
                type: 'div',
                id: 'forgotPasswordForm',
                className: ['flex-item', 'div-form'],
                innerFormElement: ''
            }]
        }]

    };

    const $ELEMENTS = {loginf: login, registerf: register, forgotf: forgot};

    const TYPES = ['loginf', 'registerf', 'forgotf'];

    return {
        elements: $ELEMENTS,
        types: TYPES
    };

})();
