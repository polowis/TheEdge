import Phaser from 'phaser'
import Character from './character.js'

// 12 width 0-11


export default class Player extends Character{
    constructor(scene, x, y, key) {
        super(scene, x, y, key, 'You')
        
    }


    loadPlayerAnimation() {
        this.animateFront()
        this.animateLeft()
        this.animateRight()
        this.animateBack()
    }

    animateFront() {
        this.scene.anims.create({
            key: 'playerFront',
            frames: this.scene.anims.generateFrameNumbers('player', {frames: [0, 1, 2]}),
            frameRate: 10,
           
        })
    }

    animateBack() {
        this.scene.anims.create({
            key: 'playerBack',
            frames: this.scene.anims.generateFrameNumbers('player', {frames:[9, 10, 11] }),
            frameRate: 10,
            
        })
    }

    animateLeft() {
        this.scene.anims.create({
            key: 'playerLeft',
            frames: this.scene.anims.generateFrameNumbers('player', {frames: [3, 4, 5]}),
            frameRate: 10,
            
        })
    }

    animateRight() {
        this.scene.anims.create({
            key: 'playerRight',
            frames: this.scene.anims.generateFrameNumbers('player', {frames: [6, 7, 8]}),
            frameRate: 10,
            
        })
    }

    move() {
        this.showDisplayName()
        this.body.setVelocity(0)
        const cursor = this.scene.input.keyboard.createCursorKeys();
        // Horizontal movement
        if (cursor.left.isDown) {
            this.body.velocity.x = -100;
            
        } else if (cursor.right.isDown) {
            this.body.velocity.x = 100;
           
        }

        // Vertical movement
        if (cursor.up.isDown) {
            this.body.velocity.y = -100;
            
        } else if (cursor.down.isDown) {
            this.body.velocity.y = 100;
            
        }

        if (cursor.left.isDown) {
            this.anims.play("playerLeft", true);
          } else if (cursor.right.isDown) {
            this.anims.play("playerRight", true);
          } else if (cursor.up.isDown) {
            this.anims.play("playerBack", true);
          } else if (cursor.down.isDown) {
            this.anims.play("playerFront", true);
          } else {
            this.anims.stop();
          }

        // Normalize and scale the velocity so that player can't move faster along a diagonal
        this.body.velocity.normalize().scale(100);
    }

    


}