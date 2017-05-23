const INFO_COMPONENTS = (function() {

    const info = {
        pageElement: {
            type: 'div',
            id: 'info',
            className: ['dbclick']
        },
        innerPageElements: [{
            type: 'div',
            className: ['info-div']
        }, {
            type: 'p',
            className: ['info-p']
        }, ]
    };

    const forUs = {
        pageElement: {
            type: 'div',
            id: 'forUs',
            className: ['dbclick']

        },
        innerPageElements: [{
            type: 'div',
            className: ['for-us-container', 'ani', 'flex-item'],
            innerElement: [{
                type: 'div',
                className: ['for-us-div', 'ani', 'picture', 'flex-item']
            }, {
                type: 'p',
                className: ['for-us-p', 'ani', 'name', 'flex-item'],
                innerText: 'Anna Mihailova'
            }, {
                type: 'p',
                className: ['for-us-p', 'ani', 'presentation', 'flex-item'],
                innerText: `My name is Anna Mihaylova and I am part of the developing team of THE TREASURE OF THE FRONTEND ISLAND.
                I am MSc (Hons) in printing arts, but recently concentrated in web developing, frontend learning and programming in languages: PHP, HTML and JavaScript.
                The SWIFTACADEMY gave me the chance to improve my knowledge in object oriented programming.
                I am creative and team player dedicated to work and innovative projects, looking for a job in program writing.
`
            }]
        }, {
            type: 'div',
            className: ['for-us-container', 'desi', 'flex-item'],
            innerElement: [{
                type: 'div',
                className: ['for-us-div', 'desi', 'picture', 'flex-item']
            }, {
                type: 'p',
                className: ['for-us-p', 'desi', 'name', 'flex-item'],
                innerText: 'Desislava Dimitrova'
            }, {
                type: 'p',
                className: ['for-us-p', 'desi', 'presentation', 'flex-item'],
                innerText: `Hey there, my name is Desislava Dimitrova. I'm so happy that i work on this project. It can train a lot of people in HTML,CSS and JS. Ho ho ho (have fun) and a bottle of rum!`
            }]
        }]
    };

    const $ELEMENTS = {info: info, forUs: forUs}

    const TYPES = ['info', 'forUs'];
    let mapP = `The three basic parts of the FRONTEND ISLAND are HTML, CSS and JavaScript.
    In order to take over the three parts of the Island each player should compete with three pirates.`;

    let flagP = `Each of the pirates is managing one of the basic parts of the Island and is keeping scroll with different questions with varying complexity.
    While answering, the player is training his knowledge in HTML, CSS and JavaScript..`;

    let bombP = `When you are using BOMB, it shows you one of the incorrect answers.`;
    let hookP = `When you are using HOOK, it shows you the correct answer.`;
    let pipeP = `When you are using PIPE, the question will be changed.`;
    let rulesP = `If the player is choosing NORMAL mode, he is answering questions no matter of the time. If the result is above 50%, he is passing the level.
    If the player is choosing SPEED mode, he is answering 5 questions for a certain time. If the result is above 50%, he is passing the level.
    If the player is choosing BATTLE mode, he is writing the answers of the questions for a certain time. If the result is above 50%, he is passing the level.`;
    let heartP = `When the game is starting the player is having three lifes. Each time when the pirate wins, one life is gone.`;
    let treasureP = `Each correct answer gives you a certain amount of coins depends on complexity of the question.`;



    const infoClasses = ['login', 'register', 'forgot', 'rules', 'play', 'wins', 'bomb', 'pipe', 'hook', 'normal', 'speed', 'battle', 'heart', 'treasure', 'player', 'treasure', 'map', 'flag'];
    const infoP = {map: mapP, flag:flagP, bomb:bombP, hook:hookP, pipe:pipeP, rules: rulesP, heart: heartP, treasure: treasureP};



    return {
        elements: $ELEMENTS,
        types: TYPES,
        infoClasses: infoClasses,
        infoP: infoP
    };

})();
