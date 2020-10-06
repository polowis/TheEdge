import Phaser from 'phaser'

export default class TextButton extends Phaser.GameObjects.Text {
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

    setColorActive(color) {
        this.colorActive = color
    }
}