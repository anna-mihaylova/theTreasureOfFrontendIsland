const PAGE_ABSTRACT = (function(game, object) {

    function PageAbstract(game, object) {
        VERIFICATIONS.isGameInstanceOfConstructorGame(game);
        VERIFICATIONS.isAbstractClass(this);


        let _$main = game.getMain();
        let _$page = '';
        let _$elements = [];
        let _$childElements = [];


        this.getMain = function() {
            return _$main;
        }

        this.getPage = function() {
            return _$page;
        }

        this.setPage = function(value) {
            _$page = value;
        }

        this.getElements = function() {
            return _$elements;
        }

        this.setElements = function(value) {
            _$elements.push(value);
        }

        this.removeElements = function() {
            _$elements = [];
        }

        this.getChildElements = function() {
            return _$childElements;
        }

        this.setChildElements = function(val) {
            _$childElements.push(val);
        }

        this.removeChildElements = function() {
            _$childElements = [];
        }

    }

    PageAbstract.prototype.deletePage = function(arr) {
        while (this.getMain().querySelector(`#${arr['id']}`)) {
            this.getMain().removeChild(this.getMain().querySelector(`#${arr['id']}`));
        }
    };

    PageAbstract.prototype.createPage = function(arr) {
        let $page = this.getMain().querySelector(`#${arr['id']}`);

        if ($page) {
            this.deletePage(arr);
        }

        let page = this.createElementOfPage(arr['type']);

        if (arr['id']) {
            page = this.addId(page, arr['id']);
        }

        if (arr['className']) {
            page = this.addClass(page, arr['className']);
        }

        this.setPage(page);
    };

    PageAbstract.prototype.createElementOfPage = function(type) {
        let element = document.createElement(type);

        return element;
    };

    PageAbstract.prototype.addId = function(element, idName) {
        element.setAttribute("id", idName);

        return element;
    };

    PageAbstract.prototype.addClass = function(element, className) {
        if (Array.isArray(className)) {

            for (var variable in className) {
                element.classList.add(className[variable]);
            }

        } else {
            element.classList.add(className);
        }

        return element;
    };

    PageAbstract.prototype.addSrc = function(element, src) {
        element.src = src;
        return element;
    };

    PageAbstract.prototype.addTextNode = function(element, text) {
        let textNode = document.createTextNode(text);
        element.appendChild(textNode);
        return element;
    };

    PageAbstract.prototype.appendToMain = function() {
        this.appendElement(this.getPage(), this.getMain());
    };

    PageAbstract.prototype.createPageElement = function(variable) {
        let element;

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

            if (item === 'src') {
                element = this.addSrc(element, variable[item]);
            }

            if (item === 'innerText') {
                element = this.addTextNode(element, variable[item]);
            }

        }

        return element;
    };

    PageAbstract.prototype.createAllPage = function(arr, arr1) {
        let element, parentElement, childElement;

        this.createPage(arr);

        for (let variable in arr1) {

            element = this.createPageElement(arr1[variable]);
            this.setElements(element);

            for (let item in arr1[variable]) {

                if (item === 'innerElement') {
                    this.innerElements(arr1[variable][item]);
                    this.appendElement(this.getChildElements(), this.getElements()[variable])
                    this.appendElement(this.getElements()[variable], this.getPage())
                    this.removeChildElements()
                }

                this.appendElement(this.getElements()[variable], this.getPage());
            }
        }

        this.appendToMain();
    };

    PageAbstract.prototype.createChildElement = function(childElement) {
        this.setChildElement(childElement);
    };

    PageAbstract.prototype.appendElement = function(element, parentElement) {
        if (Array.isArray(element)) {
            for (var variable of element) {
                parentElement.appendChild(variable);
            }

            return parentElement;
        }

        return parentElement.appendChild(element);
    };

    PageAbstract.prototype.innerElements = function(arr) {
        for (let i of arr) {
            childElement = this.createPageElement(i);
            this.setChildElements(childElement);
        }
    };

    return PageAbstract;

}());
