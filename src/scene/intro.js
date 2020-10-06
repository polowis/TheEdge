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
        this.rain = this.add.particles('raindrop');
        this.rain.createEmitter({
            x: { min: 1, max: 1800 },
            y: 0,
            lifespan: 1200,
            speedY: { min: 200, max: 400 },
            gravityY: 100,
            gravityX: Phaser.Math.Between(100, 200),
            scale: { start: 0.1, end: 0.2 },
            quantity: 4,
            blendMode: 'ADD'
        });

        
    }

    update() {
        this.bg.tilePositionX += 0.05;
    }
}