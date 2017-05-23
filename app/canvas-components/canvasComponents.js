const CANVAS_COMPONENTS = (function() {

    const piratShip = {
        name: 'shipPiratCanvas',
        pirateSrc: './assets/img/ship/pirate-ship-sprite.png',
        pirateX: '100',
        pirateY: '150',
        draw: {
            imageHeight: '70',
            imageWidth: '70',
            pirateHeight: '80',
            pirateWidth: '59',
            pirateSpriteXStart: '23',
            pirateSpriteYStart: '158',
            pirateStep: '62.9',
            pirateSpeed: '1000',
            pirateEnd: '400',
            pirateY: '180',
            pirateX: '320'
        },

        // onPlace: {
        //     imageHeight: '70',
        //     imageWidth: '70',
        //     pirateHeight: '81',
        //     pirateWidth: '53',
        //     pirateSpriteXStart: '111',
        //     pirateSpriteYStart: '4',
        //     pirateStep: '36',
        //     pirateSpeed: '1000',
        //     pirateX: '420',
        //     toPirateX: '380',
        //     pirateEnd: '164'
        // },

        walkToFirst: {
            imageHeight: '70',
            imageWidth: '70',
            pirateHeight: '81',
            pirateWidth: '53',
            pirateSpriteXStart: '22',
            pirateSpriteYStart: '300',
            pirateStep: '63.3',
            pirateSpeed: '500',
            pirateEnd: '400',
            pirateX: '100',
            pirateY: '150',
            toPirateY: '180'
        },

        walkToSecond: {
            imageHeight: '70',
            imageWidth: '70',
            pirateHeight: '80',
            pirateWidth: '59',
            pirateSpriteXStart: '23',
            pirateSpriteYStart: '158',
            pirateStep: '62.9',
            pirateSpeed: '300',
            pirateEnd: '400',
            pirateY: '180',
            pirateX: '100',
            toPirateX: '320'
        },

        question: {
            imageHeight: '70',
            imageWidth: '70',
            pirateHeight: '81',
            pirateWidth: '53',
            pirateSpriteXStart: '22',
            pirateSpriteYStart: '300',
            pirateStep: '63.3',
            pirateSpeed: '2000',
            pirateEnd: '400',
            pirateX: '100',
            pirateY: '180'
        },

        question2: {
            imageHeight: '70',
            imageWidth: '70',
            pirateHeight: '80',
            pirateWidth: '59',
            pirateSpriteXStart: '23',
            pirateSpriteYStart: '158',
            pirateStep: '62.9',
            pirateSpeed: '1000',
            pirateEnd: '400',
            pirateY: '180',
            pirateX: '320'
        }
    };

    const player = {
        name: 'playerCanvas',
        pirateSrc: './assets/img/pirates/pirates_sprites/4.png',
        pirateX: '350',
        pirateY: '170',
        draw: {
            imageHeight: '50',
            imageWidth: '50',
            pirateHeight: '120',
            pirateWidth: '90',
            pirateSpriteXStart: '626',
            pirateSpriteYStart: '256',
            pirateStep: '90',
            pirateSpeed: '600',
            pirateEnd: '630',
            pirateX: '350',
            pirateY: '170'
        },
        draw2: {
            imageHeight: '50',
            imageWidth: '50',
            pirateHeight: '120',
            pirateWidth: '90',
            pirateSpriteXStart: '0',
            pirateSpriteYStart: '0',
            pirateStep: '90',
            pirateSpeed: '600',
            pirateEnd: '30',
            pirateY: '40',
            pirateX: '300'
        },

        walkToFirst: {
            imageHeight: '50',
            imageWidth: '50',
            pirateHeight: '120',
            pirateWidth: '103',
            pirateSpriteXStart: '0',
            pirateSpriteYStart: '0',
            pirateStep: '103',
            pirateSpeed: '400',
            pirateEnd: '580',
            toPirateY: '150',
            pirateX: '350',
            pirateY: '170'

        },

        walkToSecond: {
            imageHeight: '50',
            imageWidth: '50',
            pirateHeight: '120',
            pirateWidth: '103',
            pirateSpriteXStart: '0',
            pirateSpriteYStart: '0',
            pirateStep: '103',
            pirateSpeed: '300',
            pirateEnd: '600',
            pirateX: '330',
            pirateY: '150',
            toPirateY: '110'
        },

        walkToThird: {
            imageHeight: '50',
            imageWidth: '50',
            pirateHeight: '120',
            pirateWidth: '103',
            pirateSpriteXStart: '0',
            pirateSpriteYStart: '0',
            pirateStep: '103',
            pirateSpeed: '400',
            pirateEnd: '600',
            toPirateY: '50',
            pirateX: '300',
            pirateY: '100'
        },

        question: {
            imageHeight: '50',
            imageWidth: '50',
            pirateHeight: '120',
            pirateWidth: '90',
            pirateSpriteXStart: '626',
            pirateSpriteYStart: '256',
            pirateStep: '90',
            pirateSpeed: '600',
            pirateEnd: '630',
            pirateX: '330',
            pirateY: '110'
        },

        question2: {
            imageHeight: '50',
            imageWidth: '50',
            pirateHeight: '120',
            pirateWidth: '90',
            pirateSpriteXStart: '20',
            pirateSpriteYStart: '507',
            pirateStep: '90',
            pirateSpeed: '600',
            pirateEnd: '30'
        },

        question3: {
            imageHeight: '50',
            imageWidth: '50',
            pirateHeight: '120',
            pirateWidth: '90',
            pirateSpriteXStart: '0',
            pirateSpriteYStart: '0',
            pirateStep: '90',
            pirateSpeed: '600',
            pirateEnd: '30',
            pirateY: '50',
            pirateX: '300'
        },
        go: {
            imageHeight: '50',
            imageWidth: '50',
            pirateHeight: '120',
            pirateWidth: '103',
            pirateSpriteXStart: '0',
            pirateSpriteYStart: '0',
            pirateStep: '103',
            pirateSpeed: '500',
            pirateEnd: '600',
            pirateY: '60',
            pirateX: '270',
            toPirateY: '10',
        },
        end: {
            imageHeight: '50',
            imageWidth: '50',
            pirateHeight: '120',
            pirateWidth: '103',
            pirateSpriteXStart: '0',
            pirateSpriteYStart: '0',
            pirateStep: '103',
            pirateSpeed: '500',
            pirateEnd: '600',
            pirateY: '80',
            pirateX: '340',
            toPirateY: '170',
        },
    };

    const firstPirat = {
        name: 'firstPiratCanvas',
        pirateSrc: './assets/img/pirates/pirates_sprites/pirates.png',
        pirateX: '430',
        pirateY: '150',
        draw: {
            imageHeight: '50',
            imageWidth: '40',
            pirateHeight: '40',
            pirateWidth: '30',
            pirateSpriteXStart: '48',
            pirateSpriteYStart: '7',
            pirateStep: '30',
            pirateSpeed: '400',
            pirateEnd: '50',
            pirateX: '430',
            pirateY: '150'
        },

        fight: {
            imageHeight: '110',
            imageWidth: '110',
            pirateHeight: '85',
            pirateWidth: '88',
            pirateSpriteXStart: '338',
            pirateSpriteYStart: '174',
            pirateStep: '88',
            pirateSpeed: '600',
            pirateEnd: '500',
            pirateY: '120',
            pirateX: '330'
        },

        walkToFirst: {
            imageHeight: '50',
            imageWidth: '40',
            pirateHeight: '40',
            pirateWidth: '28',
            pirateSpriteXStart: '20',
            pirateSpriteYStart: '5',
            pirateStep: '28',
            pirateSpeed: '250',
            pirateEnd: '40',
            toPirateX: '390',
            pirateX: '430',
            pirateY: '150'
        },

        onPlace: {
            imageHeight: '50',
            imageWidth: '40',
            pirateHeight: '43',
            pirateWidth: '36',
            pirateSpriteXStart: '111',
            pirateSpriteYStart: '4',
            pirateStep: '36',
            pirateSpeed: '1000',
            pirateX: '430',
            pirateY: '150',
            // toPirateX: '380',
            pirateEnd: '164'
        },

        question: {
            imageHeight: '50',
            imageWidth: '40',
            pirateHeight: '40',
            pirateWidth: '30',
            pirateSpriteXStart: '48',
            pirateSpriteYStart: '7',
            pirateStep: '30',
            pirateSpeed: '600',
            pirateEnd: '50',
            pirateX: '390',
            pirateY: '150'
        }
    };

    const secondPirate = {
        name: 'secondPiratCanvas',
        pirateSrc: './assets/img/pirates/pirates_sprites/pirates.png',
        pirateX: '260',
        pirateY: '100',
        draw: {
            imageHeight: '50',
            imageWidth: '50',
            pirateHeight: '40',
            pirateWidth: '40',
            pirateSpriteXStart: '0',
            pirateSpriteYStart: '126',
            pirateStep: '40',
            pirateEnd: '45',
            pirateX: '260',
            pirateY: '100'
        },

        fight: {
            imageHeight: '110',
            imageWidth: '110',
            pirateHeight: '85',
            pirateWidth: '88',
            pirateSpriteXStart: '338',
            pirateSpriteYStart: '174',
            pirateStep: '88',
            pirateSpeed: '600',
            pirateEnd: '500',
            pirateX: '260',
            pirateY: '80'
        },

        walkToFirst: {
            imageHeight: '60',
            imageWidth: '60',
            pirateHeight: '40',
            pirateWidth: '66',
            pirateSpriteXStart: '8',
            pirateSpriteYStart: '168',
            pirateStep: '66',
            pirateSpeed: '400',
            pirateEnd: '70',
            toPirateX: '290',
            pirateX: '260',
            pirateY: '100'
        },

        onPlace: {
            imageHeight: '50',
            imageWidth: '60',
            pirateHeight: '40',
            pirateWidth: '53',
            pirateSpriteXStart: '77',
            pirateSpriteYStart: '128',
            pirateStep: '53',
            pirateSpeed: '800',
            pirateEnd: '120',
            pirateX: '220',
            pirateY: '100'
                // toPirateX: '260'
        },

        question: {
            imageHeight: '50',
            imageWidth: '50',
            pirateHeight: '35',
            pirateWidth: '40',
            pirateSpriteXStart: '40',
            pirateSpriteYStart: '126',
            pirateStep: '40',
            pirateSpeed: '600',
            pirateEnd: '50',
            pirateX: '290',
            pirateY: '100'
        }
    };

    const thirdPirate = {
        name: 'thirdPiratCanvas',
        pirateSrc: './assets/img/pirates/pirates_sprites/pirates.png',
        pirateX: '300',
        pirateY: '50',
        draw: {
            imageHeight: '70',
            imageWidth: '70',
            pirateHeight: '60',
            pirateWidth: '50',
            pirateSpriteXStart: '178',
            pirateSpriteYStart: '260',
            pirateStep: '50',
            pirateEnd: '200',
            pirateX: '300',
            pirateY: '50'
        },

        fight: {
            imageHeight: '110',
            imageWidth: '110',
            pirateHeight: '85',
            pirateWidth: '88',
            pirateSpriteXStart: '338',
            pirateSpriteYStart: '174',
            pirateStep: '88',
            pirateSpeed: '600',
            pirateEnd: '500',
            pirateY: '30',
            pirateX: '300'
        },

        onPlace: {
            imageHeight: '70',
            imageWidth: '70',
            pirateHeight: '60',
            pirateWidth: '47',
            pirateSpriteXStart: '175',
            pirateSpriteYStart: '260',
            pirateStep: '47',
            pirateSpeed: '700',
            pirateEnd: '230',
            pirateY: '0',
            pirateX: '300',
            // toPirateY: '30',
        },

        walkToFirst: {
            imageHeight: '70',
            imageWidth: '70',
            pirateHeight: '60',
            pirateWidth: '60',
            pirateSpriteXStart: '315',
            pirateSpriteYStart: '257',
            pirateStep: '62',
            pirateSpeed: '400',
            pirateEnd: '400',
            toPirateY: '0',
            pirateX: '300',
            pirateY: '50'
        },

        walkToSecond: {
            imageHeight: '70',
            imageWidth: '70',
            pirateHeight: '60',
            pirateWidth: '59',
            pirateSpriteXStart: '373',
            pirateSpriteYStart: '110',
            pirateStep: '62',
            pirateSpeed: '400',
            pirateEnd: '483',
            toPirateY: '0',
            pirateX: '300',
            pirateY: '50'
        },

        walkToThird: {
            imageHeight: '70',
            imageWidth: '70',
            pirateHeight: '60',
            pirateWidth: '59',
            pirateSpriteXStart: '320',
            pirateSpriteYStart: '315',
            pirateStep: '59',
            pirateSpeed: '400',
            pirateEnd: '430',
            toPirateY: '0',
            pirateX: '300',
            pirateY: '50'
        },

        end: {
            imageHeight: '70',
            imageWidth: '70',
            pirateHeight: '60',
            pirateWidth: '59',
            pirateSpriteXStart: '318.5',
            pirateSpriteYStart: '49',
            pirateStep: '59',
            pirateSpeed: '600',
            pirateEnd: '483',
            toPirateY: '10',
            pirateY: '0',
            pirateX: '300',
            pirateY: '50'
        },

        go: {
            imageHeight: '70',
            imageWidth: '70',
            pirateHeight: '60',
            pirateWidth: '50',
            pirateSpriteXStart: '272',
            pirateSpriteYStart: '112',
            pirateStep: '50',
            pirateSpeed: '400',
            pirateEnd: '300',
            toPirateY: '10',
            pirateY: '0',
            pirateX: '300',
            pirateY: '30'
        },

        question: {
            imageHeight: '70',
            imageWidth: '70',
            pirateHeight: '60',
            pirateWidth: '50',
            pirateSpriteXStart: '178',
            pirateSpriteYStart: '260',
            pirateStep: '50',
            pirateEnd: '200',
            pirateX: '300',
            pirateY: '0'
        }
    };

    const $ELEMENTS = {piratShip: piratShip, player: player, firstPirat: firstPirat, secondPirate: secondPirate, thirdPirate: thirdPirate}

    const TYPES = ['piratShip', 'player', 'firstPirat', 'secondPirate', 'thirdPirate', 'canvasFunction', 'functionMapCreator'];

    const FUNCTIONS = ['draw', 'walkToFirst', 'walkToSecond', 'question', 'question2', 'onPlace', 'walkToThird', 'question3', 'fight', 'go', 'end', 'battle', 'battle1', 'battle2', 'remove', 'draw2'];

    const MAP_FUNCTIONS = ['start', 'toFirstPirate', 'toSecondPirate', 'toThirdPirateHtml', 'toThirdPirateCss', 'toThirdPirateJs', 'win', 'lose', 'delete'];

    return {
        elements: $ELEMENTS,
        types: TYPES,
        functions: FUNCTIONS,
        mapFunctions: MAP_FUNCTIONS,

    };
})();
