import Phaser from 'phaser'

export default class InteractiveTextButton extends Phaser.GameObjects.Text {
    constructor(scene, x, y, text, style, customStyle) {
        super(scene, x, y, text, style)

        this.eventStyle = customStyle || {}
        this.colorHover = this.eventStyle.colorHover || '#ff0'
        this.backgroundColorHover = this.eventStyle.backgroundColorHover || '#ffffff'

        this.colorRest = this.eventStyle.colorRest || '#0f0'
        this.backgroundColorRest = this.eventStyle.backgroundColorRest || '#ffffff'

        this.colorActive = this.eventStyle.colorActive || '0ff'
        this.backgroundColorActive = this.eventStyle.backgroundColorActive ||'#ffffff'

        this.setInteractive({useHandCursor: true})
        .on('pointerover', () => this.listenOnHover() )
        .on('pointerout', () => this.listenOnRest() )
        .on('pointerdown', () => this.listenOnActive() )
        .on('pointerup', () => {
            this.listenOnHover();
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
        this.setColor(this.colorHover)
        this.setBackgroundColor(this.backgroundColorHover)
        
    }

    listenOnRest() {
        this.setColor(this.colorRest)
        this.setBackgroundColor(this.backgroundColorRest)
    }

    listenOnActive() {
        this.setColor(this.colorActive)
        this.setBackgroundColor(this.backgroundColorActive)
    }

    /**
     * Set text color when event active is triggered
     * @param {string} color 
     */
    setColorActive(color) {
        this.colorActive = color
        return this
    }

    /**
     * Change the background color of the text when the button is active
     * @param {string} color 
     */
    setBackgroundColorActive(color) {
        this.backgroundColorActive = color
        return this
    }

    /**
     * Change the color of the text when pointerout event is triggered
     * @param {string} color - color to be set
     */
    setColorRest(color) {
        this.colorRest = color
        return this
    }

    /**
     * Set the background color when rest
     * @param {*} color 
     */
    setBackgroundColorRest(color) {
        this.backgroundColorRest = color;
        return this
    }

    /**
     * Set color for all types of background upon interacting
     * @param {*} color - Background color to be displayed
     */
    setAllBackgroundColor(color) {
        this.backgroundColorActive = color;
        this.backgroundColorHover = color;
        this.backgroundColorRest = color;
        return this
    }

    /**
     * clear all background color
     */
    clearAllBackgroundColor() {
        this.setAllBackgroundColor('rgba(0, 0, 0, 0)')
        return this
    }
}