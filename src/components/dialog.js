import Phaser from 'phaser'
export default class Dialog {
    constructor(scene, opts) {
        if (!opts) opts = {};
        this.scene = scene;

        // set property of config
        this.borderThickness = opts.borderThickness || 3;
        this.borderColor = opts.borderColor || 0x907748;
        this.borderAlpha = opts.borderAlpha || 1;
        this.windowAlpha = opts.windowAlpha || 0.8;
        this.windowColor = opts.windowColor || 0x303030;
        this.windowHeight = opts.windowHeight || 150;
        this.padding = opts.padding || 32;
        this.closeBtnColor = opts.closeBtnColor || 'darkgoldenrod';
        this.dialogSpeed = opts.dialogSpeed || 3;

        this.eventCounter = 0;
        // if the dialog window is shown
        this.visible = true;
        // the current text in the window
        this.text;

        this.createWindow()
        
    }


    /**
     *  Gets the width of the game (based on the scene)
     */
    getGameWidth() {
        return this.scene.sys.game.config.width;
    }
       

    /**
     *  Gets the height of the game (based on the scene)
     */
    getGameHeight() {
        return this.scene.sys.game.config.height;
    }

    calculateWindowDimensions(width, height) {
        let x = this.padding;
        let y = height - this.windowHeight - this.padding;
        let rectWidth = width - (this.padding * 2);
        let rectHeight = this.windowHeight;
        return {
          x,
          y,
          rectWidth,
          rectHeight
        };
    }

    createInnerWindow(x, y, rectWidth, rectHeight) {
        this.graphics.fillStyle(this.windowColor, this.windowAlpha);
        this.graphics.fillRect(x + 1, y + 1, rectWidth - 1, rectHeight - 1);
    }
       
    createOuterWindow(x, y, rectWidth, rectHeight) {
        this.graphics.lineStyle(this.borderThickness, this.borderColor, this.borderAlpha);
        this.graphics.strokeRect(x, y, rectWidth, rectHeight);
    }

    createWindow() {
        let gameHeight = this.getGameHeight();
        let gameWidth = this.getGameWidth();
        let dimensions = this.calculateWindowDimensions(gameWidth, gameHeight);
        this.graphics = this.scene.add.graphics()
        this._createOuterWindow(dimensions.x, dimensions.y, dimensions.rectWidth, dimensions.rectHeight);
        this._createInnerWindow(dimensions.x, dimensions.y, dimensions.rectWidth, dimensions.rectHeight);
    }
}