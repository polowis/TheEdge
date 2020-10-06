import Phaser from 'phaser'

export default class Intro extends Phaser.Scene{
    constructor() {
        super('intro')
    }

    preload() {
        this.load.image('introbg', '../../assets/background/intro.gif')
        
    }

    create() {
        this.bg = this.add.tileSprite(0, 0, 1280, 700, 'introbg').setOrigin(0)
        this.createRainEffect()
        this.title = this.add.text(this.cameras.main.worldView.x + this.cameras.main.width / 2, 200, 'THE EDGE', {fontSize: 30, fill: "red"}).setOrigin(0)
        
    }

    update() {
        this.bg.tilePositionX += 0.05;
    }

    createRainEffect() {
        this.rain = this.add.particles('raindrop');
        this.rain.createEmitter({
            x: { min: 1, max: 1800 },
            y: 0,
            lifespan: 1300,
            speedY: { min: 200, max: 400 },
            gravityY: 100,
            gravityX: Phaser.Math.Between(100, 200),
            scale: { start: 0.1, end: 0.2 },
            quantity: 4,
            blendMode: 'ADD'
        });
    }
}