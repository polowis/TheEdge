import Phaser from 'phaser'

// 12 width 0-11
tilesetChar = {
    char1: {
        front: [0, 1, 2],
        left: [12, 13, 14],
        right: [24, 25, 26],
        back: [36, 37, 38]

    }
}

export default class Player extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, key) {
        super(scene, x, y, key)
        this.scene = scene
        this.scene = scene
        this.scene.add.existing(this)
    }

    


}