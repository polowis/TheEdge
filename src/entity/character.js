import Phaser from 'phaser'

export default class Character extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key, displayName) {
        super(scene, x, y, key)
        this.scene = scene
        this.scene.add.existing(this)
        this.scene.physics.world.enableBody(this, 0)
        this.displayName = this.scene.add.text((this.x - this.width * 1.4), (this.y - (this.height / 2) - 10), this.displayName, {fontSize: '10px'});
    }

    showDisplayName() {
        this.displayName.x = this.x - (this.displayName.width / 2);
        this.displayName.y = this.y - (this.height / 2) - 10;
    }
}