import Phaser from 'phaser'

export default class Hometown extends Phaser.Scene {
    constructor() {
        super('hometown')
    }
    preload() {
        this.load.image('market', '../../../assets/tilemap/tilesprire/market.png')
        this.load.image('country_tileset2', '../../../assets/tilemap/tilesprire/country_tileset2.png')
        this.load.image('tileset', '../../../assets/tilemap/tilesprire/tilehousea3.png')
        this.load.image('contry_tileset1', '../../../assets/tilemap/tilesprire/tileset.png')
        this.load.image('tileset1', '../../../assets/tilemap/tilesprire/tileset1.png')
        this.load.image('water_tileset', '../../../assets/tilemap/tilesprire/[A]Water_pipo.png')
        this.load.tilemapTiledJSON('map', '../../../assets/tilemap/town.json')
        this.load.spritesheet('player', '../../../assets/tilemap/tilesprire/citizen6.png', { frameWidth: 32, frameHeight: 32 })

    }

    create() {
        const map = this.make.tilemap({key: "map"})
        const tileset = map.addTilesetImage("country_tileset1", 'contry_tileset1')
        const tileset1 = map.addTilesetImage("country1", 'tileset1')
        const market = map.addTilesetImage("market", 'market')
        const modern1 = map.addTilesetImage("country_tileset2", 'country_tileset2')
        const tilehousea3 = map.addTilesetImage("tileset", 'tileset')
        const water = map.addTilesetImage("water_tileset", 'water_tileset')
        this.loadPlayerAnimation()

        let all_tileset = [tileset, tileset1, market, modern1, tilehousea3, water]
        const lowerLayer = map.createDynamicLayer("Lower Layer", all_tileset, 0, 0)
        const WorldLayer = map.createDynamicLayer('World Layer', all_tileset, 0, 0)
        const UpperLayer = map.createDynamicLayer("Upper Layer", all_tileset, 0, 0)  
        const TopLayer = map.createDynamicLayer("Top Layer", all_tileset, 0, 0)  

        const camera = this.cameras.main;
        const spawnPoint = map.findObject("Object Layer 1",obj => obj.name == "Spawn point");
        this.player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, 'player')
        UpperLayer.setDepth(20)
        TopLayer.setDepth(30)
        
        
        

        
        /*
        this.controls = new Phaser.Cameras.Controls.FixedKeyControl({
            camera: camera,
            left: this.cursor.left,
            right: this.cursor.right,
            up: this.cursor.up,
            down: this.cursor.down,
            speed: 1
        })*/
        camera.startFollow(this.player)
        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels)

        WorldLayer.setCollisionByProperty({collides: true})
        const debugGraphic = this.add.graphics();
        WorldLayer.renderDebug(debugGraphic, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
            faceColor: new Phaser.Display.Color(40, 39, 37, 255)
        })

        this.physics.add.collider(this.player, WorldLayer)
        

        
    }

    update(time, delta) {
        //const prevVelocity = this.player.body.velocity.clone();
        this.player.body.setVelocity(0);

        const cursor = this.input.keyboard.createCursorKeys();
        // Horizontal movement
        if (cursor.left.isDown) {
            this.player.body.velocity.x = -100;
            
        } else if (cursor.right.isDown) {
            this.player.body.velocity.x = 100;
           
        }

        // Vertical movement
        if (cursor.up.isDown) {
            this.player.body.velocity.y = -100;
            
        } else if (cursor.down.isDown) {
            this.player.body.velocity.y = 100;
            
        }

        if (cursor.left.isDown) {
            this.player.anims.play("playerLeft", true);
          } else if (cursor.right.isDown) {
            this.player.anims.play("playerRight", true);
          } else if (cursor.up.isDown) {
            this.player.anims.play("playerBack", true);
          } else if (cursor.down.isDown) {
            this.player.anims.play("playerFront", true);
          } else {
            this.player.anims.stop();
          }

        // Normalize and scale the velocity so that player can't move faster along a diagonal
        this.player.body.velocity.normalize().scale(100);
    }

    loadTileset(name) {
        return '../../../assets/tilesprire' + name
    }

    createLayers(tileset) {
        this.map.createDynamicLayer("Lower Layer", tileset, 0, 0)
        this.map.createDynamicLayer('World Layer', tileset, 0, 0)
        this.map.createDynamicLayer("Upper Layer", tileset, 0, 0)  
        this.map.createDynamicLayer("Top Layer", tileset, 0, 0)    
    }

    loadPlayerAnimation() {
        this.animateFront()
        this.animateLeft()
        this.animateRight()
        this.animateBack()
    }

    animateFront() {
        this.anims.create({
            key: 'playerFront',
            frames: this.anims.generateFrameNumbers('player', {frames: [0, 1, 2]}),
            frameRate: 10,
           
        })
    }

    animateBack() {
        this.anims.create({
            key: 'playerBack',
            frames: this.anims.generateFrameNumbers('player', {frames:[9, 10, 11] }),
            frameRate: 10,
            
        })
    }

    animateLeft() {
        this.anims.create({
            key: 'playerLeft',
            frames: this.anims.generateFrameNumbers('player', {frames: [3, 4, 5]}),
            frameRate: 10,
            
        })
    }

    animateRight() {
        this.anims.create({
            key: 'playerRight',
            frames: this.anims.generateFrameNumbers('player', {frames: [6, 7, 8]}),
            frameRate: 10,
            
        })
    }


}