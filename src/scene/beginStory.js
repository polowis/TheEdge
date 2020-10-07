import Phaser from 'phaser'

export default class beginStory extends Phaser.Scene{
    constructor() {
        super('beginStory')
    }

    preload() {
        this.load.image('bgbeginstory', '../../assets/background/storytelling.jpg')
    }

    create() {
        this.bg = this.add.tileSprite(0, 0, this.cameras.main.X, this.cameras.main.Y, 'bgbeginstory').setOrigin(0).setScale(0.8)
    }

    update() {
        
    }
}