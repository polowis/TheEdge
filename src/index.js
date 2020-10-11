import Phaser from 'phaser'
import Intro from './scene/intro'
import beginStory from './scene/beginStory'
import Hometown from './scene/map/hometown'

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 0 }
        },
    },
    pixelArt: true,
    input: {
      activePointers: 3, // 2 is default for mouse + pointer, +1 is required for dual touch
    },
    scene: [Hometown]
}
const game = new Phaser.Game(config)