const CREATORS = (function() {
    let pageElements = ['type', 'id', 'className', 'src', 'innerText', 'innerElement', 'innerPageElements', 'pageElement'];
    let formElements = ['href', 'for', 'value', 'typeInput'];

    function deleteAllElements (main) {
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
    };

    function deleteElementID (main, elementID) {
        while (main.querySelector(`#${elementID}`)) {
            main.removeChild(main.querySelector(`#${elementID}`));
        }
    };
    function deleteTextNode (elementID) {
        while (elementID.firstChild) {
            elementID.removeChild(elementID.firstChild);
        }
    };

    function createCanvas (main, elementID) {
        deleteElementID(main, elementID);
        let $element = document.createElement('canvas');
        $element.setAttribute("id", elementID);
        $element.setAttribute('width', '800');
        $element.setAttribute('height', '360');
        main.appendChild($element);
    };

    function createElement (type) {
        let element = document.createElement(type);
        return element;
    };

    function addTextNode (element, text) {
        deleteTextNode(element)
        let textNode = document.createTextNode(text);
        element.appendChild(textNode);
        return element;
    }

    function addId (element, idName) {
        element.setAttribute(pageElements[1], idName);
        return element;
    }

    function addClass (element, className) {
        if (Array.isArray(className)) {

            for (var variable in className) {
                element.classList.add(className[variable]);
            }

        } else {
            element.classList.add(className);
        }

        return element;
    }

    function addSrc (element, src) {
        element.src = src;

        return element;
    }

    function addHref (element, href) {
        element.href = href;

        return element;
    }

    function addFor (element, htmlFor) {
        element.htmlFor = htmlFor;

        return element;
    }

    function addValue (element, value) {
        element.setAttribute("value", value);

        return element;
    }

    function addType (element, type) {
        element.setAttribute("type", type);

        return element;
    }

    function appendElement (element, parentElement) {
        if (Array.isArray(element)) {
            for (var variable of element) {
                parentElement.appendChild(variable);
            }

            return parentElement;
        }

        return parentElement.appendChild(element);
    }

    function createSection (main, element, elementID) {
        let $section;
        if (elementID) {
            $section = main.querySelector(`#${elementID}`);
        }

        if ($section) {
            deleteElementID(main, elementID);
        }
        let section = createElement (element[pageElements[0]]);


        if (typeof elementID !== "undefined"){
            section = addId(section, elementID);
        }


        if (element[pageElements[1]]) {
            section = addId(section, element[pageElements[1]]);
        }

        if (element[pageElements[2]]) {
            section = addClass(section, element[pageElements[2]]);
        }

        return section;
    };

    function createElementOfSection (main, element, elementID) {
        let $section = createSection(main, element, elementID);

        for (let item in element) {

            if (item === pageElements[3]) {
                $section = addSrc ($section, element[item]);
            }

            if (item === pageElements[4]) {
                $section = addTextNode ($section, element[item]);
            }
            if (item === formElements[0]) {
                $section = addHref ($section, element[item]);
            }

            if (item === formElements[1]) {
                $section = addFor ($section, element[item]);
            }
            if (item === formElements[2]) {
                $section = addValue ($section, element[item]);
            }

            if (item === formElements[3]) {
                $section = addType ($section, element[item]);
            }
        }
        return $section;

    };

    function innerElements (main, arr) {
        let childElement;
        let childElements = [];
        for (let i of arr) {
            childElement = createElementOfSection(main, i);
            childElements.push(childElement);
        }
        return childElements;
    };

    function createSectionWithElements (main, elementID, element) {
        let el, parentElement, childElement, section;
        let arr = element[pageElements[6]];
        let elements = [];
        let childElements = [];

        section = createSection(main, element[pageElements[7]], elementID);

        for (let variable in arr) {
            el = createElementOfSection(main, arr[variable]);
            elements.push(el);

            for (let item in arr[variable]) {
                if (item === pageElements[5]) {
                    childElements = innerElements(main, arr[variable][item]);
                    appendElement(childElements, elements[variable]);
                    appendElement(elements[variable], section);
                    childElements = [];
                }

                appendElement(elements[variable], section);
            }
        }

        appendElement(section, main);

    };

    function hideElement (main, element) {
        let $element = main.querySelector(`#${element}`);
        if($element){
            $element.classList.add('hidden');
        }
    };

    function displayElement (main, element) {
        let $element = main.querySelector(`#${element}`);
        if($element){
            $element.classList.remove('hidden');
        }
    };


    return {
        createCanvas: createCanvas,
        deleteAllElements: deleteAllElements,
        deleteElementID: deleteElementID,
        createElement: createElement,
        addId: addId,
        addClass: addClass,
        addSrc: addSrc,
        addTextNode: addTextNode,
        appendElement: appendElement,
        createSection: createSection,
        innerElements: innerElements,
        createSectionWithElements: createSectionWithElements,
        hideElement: hideElement,
        displayElement: displayElement
    };
})();
