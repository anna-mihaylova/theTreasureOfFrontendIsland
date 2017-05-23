const CANVAS_ELEMENT = (function(game, context, obj, drawFunction) {

    function CanvasElement(game, context, obj, drawFunction) {
        // Utils.isGameInstanceOfConstructorGame(game);
        //
        // if (!Utils.isCorrectTypeId(CANVAS_ELEMENTS.elements, obj['name'])){
        //     throw new Error(ERRORS.typeError);
        // }
        
        if (drawFunction !== 'pause' && drawFunction !== 'remove' && (!obj[drawFunction])) {
            throw new Error(ERRORS.functionError);
        }

        let _$canvas = context;
        let _$context = context.getContext("2d");
        let _obj = obj;
        let _src = _obj['pirateSrc'];
        let _pirateX = _obj['pirateX'];
        let _pirateY = _obj['pirateY'];
        let _start = '';
        let _drawTimer;
        let _drawFunction = drawFunction;
        let _objFunction = _obj[drawFunction];
        let _imagee = '';

        this.getCanvas = function() {
            return _$canvas;
        }

        this.getContext = function() {
            return _$context;
        }

        this.getObject = function() {
            return _obj;
        }

        this.getDrawFunction = function() {
            return _drawFunction;
        }

        this.setDrawFunction = function(value) {
            _drawFunction = value;
        }

        this.getObjectFunction = function() {
            return _objFunction;
        }

        this.setObjectFunction = function(value) {
            _objFunction = value;
        }

        this.getSrc = function() {
            return _src;
        }

        this.getStart = function() {
            return _start;
        }

        this.setStart = function(startPosition) {
            _start = startPosition;
        }

        this.getPirateX = function() {
            return _pirateX;
        }

        this.setPirateX = function(value) {
            _pirateX = value;
        }

        this.getPirateY = function() {
            return _pirateY;
        }

        this.setPirateY = function(value) {
            _pirateY = value;
        }

        this.getDrawTimer = function() {
            return _drawTimer;
        }

        this.setDrawTimer = function(timer) {
            _drawTimer = timer;
        }

        this.getImageSrc = function() {
            return _imagee;
        }

        this.setImageSrc = function(value) {
            _imagee = value;
        }

        this.whatObject();
    }

    CanvasElement.prototype.getImage = function() {
        let image = new Image();
        image.src = this.getSrc();
        this.setImageSrc(image);
    };

    CanvasElement.prototype.whatObject = function() {
        this.getImage();
        if (this.getDrawFunction() === 'remove') {
            return this.remove();
        }

        if (this.getDrawFunction() === 'pause') {
            this.setDrawFunction('draw');
            this.setPirateX(this.getObjectFunction()['pirateX']);
            this.setPirateY(this.getObjectFunction()['pirateY']);
            this.setObjectFunction(this.getObject()[this.getDrawFunction()]);
        }

        this.setStart(this.getObjectFunction()['pirateSpriteXStart']);

        if (this.getObjectFunction()['pirateX']) {
            this.setPirateX(this.getObjectFunction()['pirateX']);
        }

        if (this.getObjectFunction()['pirateY']) {
            this.setPirateY(this.getObjectFunction()['pirateY']);
        }


        if (this.getDrawFunction() === 'draw' || this.getDrawFunction() === 'draw2') {
            return this.drawFirst();
        }
        clearInterval(this.getDrawTimer());

        return this.draw();
    };

    CanvasElement.prototype.draw = function() {
        let self = this;

        self.getImageSrc().onload = function() {
            self.setDrawTimer(window.setInterval(function() {
                self.getContext().clearRect(0, 0, self.getCanvas().width, self.getCanvas().height);
                self.getContext().drawImage(self.getImageSrc(), self.getStart(), self.getObjectFunction()['pirateSpriteYStart'], self.getObjectFunction()['pirateWidth'], self.getObjectFunction()['pirateHeight'], self.getPirateX(), self.getPirateY(), self.getObjectFunction()['imageWidth'], self.getObjectFunction()['imageHeight']);

                if (self.getObjectFunction()['toPirateX']) {
                    self.toX();
                }

                if (self.getObjectFunction()['toPirateY']) {
                    self.toY();
                }

                if (self.getStart() >= +self.getObjectFunction()['pirateEnd']) {
                    self.setStart(self.getObjectFunction()['pirateSpriteXStart']);

                } else {
                    let step = ((self.getStart() * 1) + (self.getObjectFunction()['pirateStep'] * 1));
                    self.setStart(step);
                }

            }, self.getObjectFunction()['pirateSpeed']));
        };
    };


    CanvasElement.prototype.toX = function() {
        if (+this.getObjectFunction()['toPirateX'] === +this.getPirateX()) {
            return this.drawQuestionSart();
        }

        if (+this.getObjectFunction()['toPirateX'] > +this.getPirateX()) {
            this.toXRight();
        }
        if (+this.getObjectFunction()['toPirateX'] < +this.getPirateX()) {
            this.toXLeft();
        }
    };

    CanvasElement.prototype.toXRight = function() {
        this.setPirateX((this.getPirateX() * 1) + 5);

        if (this.getPirateX() >= +this.getObjectFunction()['toPirateX']) {
            this.setPirateX(this.getObjectFunction()['toPirateX']);
        }
    };

    CanvasElement.prototype.toXLeft = function() {
        this.setPirateX((this.getPirateX() * 1) - 5);

        if (this.getPirateX() <= +this.getObjectFunction()['toPirateX']) {
            this.setPirateX(this.getObjectFunction()['toPirateX']);
        }
    };

    CanvasElement.prototype.toY = function() {
        if (+this.getObjectFunction()['toPirateY'] === +this.getPirateY()) {
            return this.drawQuestionSart();
        }

        if (+this.getObjectFunction()['toPirateY'] > +this.getPirateY()) {
            this.toYUp();
        }

        if (+this.getObjectFunction()['toPirateY'] < +this.getPirateY()) {
            this.toYDown();
        }
    };

    CanvasElement.prototype.toYUp = function() {
        this.setPirateY((this.getPirateY() * 1) + 5);
        if (this.getPirateY() >= +this.getObjectFunction()['toPirateY']) {
            this.setPirateY(this.getObjectFunction()['toPirateY'])
        }
    };

    CanvasElement.prototype.toYDown = function() {
        this.setPirateY((this.getPirateY() * 1) - 5);

        if (this.getPirateY() <= +this.getObjectFunction()['toPirateY']) {
            this.setPirateY(this.getObjectFunction()['toPirateY']);
        }
    };

    CanvasElement.prototype.drawQuestionSart = function() {
        clearInterval(this.getDrawTimer());

        let obj;
        obj = this.getObject()['question'];

        if (this.getDrawFunction() === 'walkToSecond' && this.getObject()['question2']) {
            obj = this.getObject()['question2'];
        }

        if ((this.getDrawFunction() === 'walkToThird' || this.getDrawFunction() === 'go') && this.getObject()['question3']) {
            obj = this.getObject()['question3'];
        }
        this.setObjectFunction(obj)
        this.drawFirst();
    };

    CanvasElement.prototype.remove = function() {
        clearInterval(this.getDrawTimer());
        this.getContext().clearRect(0, 0, this.getCanvas().width, this.getCanvas().height);
    };

    CanvasElement.prototype.drawFirst = function() {
        let self = this;
        let image = new Image();
        image.src = this.getSrc();
        clearInterval(this.getDrawTimer());

        image.onload = function() {
            self.getContext().clearRect(0, 0, self.getCanvas().width, self.getCanvas().height);
            self.getContext().drawImage(image, self.getObjectFunction()['pirateSpriteXStart'], self.getObjectFunction()['pirateSpriteYStart'], self.getObjectFunction()['pirateWidth'], self.getObjectFunction()['pirateHeight'], self.getPirateX(), self.getPirateY(), self.getObjectFunction()['imageWidth'], self.getObjectFunction()['imageHeight']);
        };

    };

    return{
        create: function(game, context, obj, drawFunction){
            return new CanvasElement (game, context, obj, drawFunction);
        }
    }

}());
