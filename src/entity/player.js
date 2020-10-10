import Phaser from 'phaser'

export default class Player extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, key) {
        super(scene, x, y, key)
        this.scene = scene
        this.scene = scene
        this.scene.add.existing(this)
    }
}