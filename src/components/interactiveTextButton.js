import Phaser from 'phaser'

export default class InteractiveTextButton extends Phaser.GameObjects.Text {
    constructor(scene, x, y, text, style, eventStyle) {
        super(scene, x, y, text, style)

        this.colorHover = eventStyle.colorHover || '#ff0'
        this.backgroundColorHover = eventStyle.backgroundColorHover || '#ffffff'

        this.colorRest = eventStyle.colorRest || '#0f0'
        this.backgroundColorRest = eventStyle.backgroundColorRest || '#ffffff'

        this.colorActive = eventStyle.colorActive || '0ff'
        this.backgroundColorActive = eventStyle.backgroundColorActive ||'#ffffff'

        this.setInteractive({useHandCursor: true})
        .on('pointerover', () => this.listenOnHover() )
        .on('pointerout', () => this.listenOnRest() )
        .on('pointerdown', () => this.listenOnActive() )
        .on('pointerup', () => {
            this.listenOnHover();
            callback();
          });
    }

    addColor(color) {
        this.setColor(color)
        return this
    }

    addBackgroundColor(color) {
        this.setBackgroundColor(color)
        return this
    }

    listenOnHover() {
        this.setColor('#ff0')
        this.setBackgroundColor('#ffffff')
        
    }

    listenOnRest() {
        this.setColor('#0f0')
        this.setBackgroundColor('#ffffff')
    }

    listenOnActive() {
        this.setColor('#0ff')
        this.setBackgroundColor('#ffffff')
    }

    /**
     * 
     * @param {string} color 
     */
    setColorActive(color) {
        this.colorActive = color
    }

    /**
     * Change the background color of the text when the button is active
     * @param {string} color 
     */
    setBackgroundColorActive(color) {
        this.backgroundColorActive = color
    }

    /**
     * Change the color of the text when pointerout event is triggered
     * @param {string} color - color to be set
     */
    setColorRest(color) {
        this.colorRest = color
    }

    /**
     * 
     * @param {*} color 
     */
    setBackgroundColorRest(color) {
        this.backgroundColorRest = color
    }
}