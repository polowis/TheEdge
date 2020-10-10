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
        this.load.image('modern1', '../../../assets/tilemap/tilesprire/modern1.png')
        this.load.tilemapTiledJSON('map', '../../../assets/tilemap/town.json')

    }

    create() {
        const map = this.make.tilemap({key: "map"})
        const tileset = map.addTilesetImage("country_tileset1", 'contry_tileset1')
        const tileset1 = map.addTilesetImage("country1", 'tileset1')
        const market = map.addTilesetImage("market", 'market')
        const modern1 = map.addTilesetImage("country_tileset2", 'country_tileset2')
        const tilehousea3 = map.addTilesetImage("tileset", 'tileset')
        const water = map.addTilesetImage("water_tileset", 'water_tileset')

        let all_tileset = [tileset, tileset1, market, modern1, tilehousea3, water]
        const lowerLayer = map.createDynamicLayer("Lower Layer", all_tileset, 0, 0)
        const WorldLayer = map.createDynamicLayer('World Layer', all_tileset, 0, 0)
        const UpperLayer = map.createDynamicLayer("Upper Layer", all_tileset, 0, 0)  
        const TopLayer = map.createDynamicLayer("Top Layer", all_tileset, 0, 0)  

        const camera = this.cameras.main;

        const cursor = this.input.keyboard.createCursorKeys();
        this.controls = new Phaser.Cameras.Controls.FixedKeyControl({
            camera: camera,
            left: cursor.left,
            right: cursor.right,
            up: cursor.up,
            down: cursor.down,
            speed: 1
        })

        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels)

        WorldLayer.setCollisionByProperty({collides: true})
        const debugGraphic = this.add.graphics();
        WorldLayer.renderDebug(debugGraphic, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
            faceColor: new Phaser.Display.Color(40, 39, 37, 255)
        })
    }

    update(time, delta) {
        this.controls.update(delta)
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


}