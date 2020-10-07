import Phaser from 'phaser'
import InteractiveTextButton from '../components/InteractiveTextButton'
import Dialog from '../components/dialog'

export default class Intro extends Phaser.Scene{
    constructor() {
        super('intro')
    }

    preload() {
        this.load.image('introbg', '../../assets/background/lab.gif')
        
    }

    create() {
        this.bg = this.add.tileSprite(0, 0, 1280, 700, 'introbg').setOrigin(0).setScale(1.5)
        this.createRainEffect()
        let centerX = this.cameras.main.worldView.x + this.cameras.main.width / 2
        this.title = this.add.text(centerX - 40, 200, 'THE EDGE', {fontSize: 40, fill: "red"}).setOrigin(0)
        this.startButton = new InteractiveTextButton(this, centerX + 20, 250, 'Start', { fill: '#0f0'}).clearAllBackgroundColor()
        this.add.existing(this.startButton)
        this.aboutButton = new InteractiveTextButton(this, centerX - 12, 300, 'About The Edge', { fill: '#0f0'}, {}, () => this.aboutButtonAction()).clearAllBackgroundColor()
        this.add.existing(this.aboutButton)
       
        

    }

    update() {
        this.bg.tilePositionX += 0.05;
    }

    createRainEffect() {
        this.rain = this.add.particles('raindrop');
        this.rain.createEmitter({
            x: { min: 1, max: 1800 },
            y: 0,
            lifespan: 1400,
            speedY: { min: 200, max: 400 },
            gravityY: 100,
            gravityX: Phaser.Math.Between(100, 200),
            scale: { start: 0.1, end: 0.2 },
            quantity: 4,
            blendMode: 'ADD'
        });
    }

    aboutButtonAction() {
        this.dialog = new Dialog(this)
        this.dialog.setText("The Edge is an infectious disease simulation. Click anywhere on the screen to skip the dialog. Hope you will enjoy the game")
    }
}