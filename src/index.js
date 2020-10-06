import Phaser from 'phaser'

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
    pixelArt: true,
    input: {
      activePointers: 3, // 2 is default for mouse + pointer, +1 is required for dual touch
    },
    scene: []
}
const game = new Phaser.Game(config)