import Phaser from 'phaser'
import NPC from '../../entity/npc'
import PF from 'pathfinding'
import Player from '../../entity/player'

export default class Hometown extends Phaser.Scene {
    constructor() {
        super('hometown')
        this.debug = false
    }
    preload() {
        this.loadTileset()
        this.load.tilemapTiledJSON('map', '../../../assets/tilemap/Town.json')
        this.load.spritesheet('player', '../../../assets/tilemap/tilesprite/citizen6.png', { frameWidth: 32, frameHeight: 32 })
        this.load.spritesheet('citizen1', '../../../assets/tilemap/tilesprite/citizen1.png', { frameWidth: 32, frameHeight: 32 })
        this.load.spritesheet('citizen2', '../../../assets/tilemap/tilesprite/citizen2.png', { frameWidth: 32, frameHeight: 32 })
        this.load.spritesheet('citizen4', '../../../assets/tilemap/tilesprite/citizen4.png', { frameWidth: 32, frameHeight: 32 })

    }

    create() {
        const map = this.make.tilemap({key: "map"})
        const tileset = map.addTilesetImage("country_tileset1", 'contry_tileset1')
        const tileset1 = map.addTilesetImage("country1", 'tileset1')
        const market = map.addTilesetImage("market", 'market')
        const modern1 = map.addTilesetImage("country_tileset2", 'country_tileset2')
        const tilehousea3 = map.addTilesetImage("tileset", 'tileset')
        const water = map.addTilesetImage("water_tileset", 'water_tileset')
        const future5 = map.addTilesetImage("futuristic_a5", 'futuristic_a5')
        const future4 = map.addTilesetImage("futuristic_a4", 'futuristic_a4')

        let all_tileset = [tileset, tileset1, market, modern1, tilehousea3, water, future4, future5]
        const lowerLayer = map.createDynamicLayer("Lower Layer", all_tileset, 0, 0)
        const WorldLayer = map.createDynamicLayer('World Layer', all_tileset, 0, 0)
        const UpperLayer = map.createDynamicLayer("Upper Layer", all_tileset, 0, 0)  
        const TopLayer = map.createDynamicLayer("Top Layer", all_tileset, 0, 0)  

        const camera = this.cameras.main;
        this.grid = []
        //console.log(lowerLayer.getTileAt(307, 199))
        //finder.setGrid(map.layers[0].data);
        this.walkableGrid = []

        
        for(let y = 0; y < map.height; y++){
            let col = [];
            for(let x = 0; x < map.width; x++) {
                this.walkableGrid.push({xLoc: x, yLoc: y});
                col.push(0);
            }
           
            this.grid.push(col);       
        }
        
        
        

        WorldLayer.forEachTile(tile => {
            if(tile.properties.collides) {
                this.grid[tile.y][tile.x] = 1
                this.walkableGrid.filter(grid => {
                    return grid.xLoc != tile.x && grid.yLoc != tile.y 
                })
                //this.walkableGrid[tile.y].splice(tile.x, 1)
            } 

        })



        const pf = new PF.Grid(this.grid)
        this.finder = new PF.AStarFinder()

        

        const spawnPoint = map.findObject("Object Layer 1",obj => obj.name == "Spawn point");
        this.player = new Player(this, spawnPoint.x, spawnPoint.y, 'player')
        this.player.loadPlayerAnimation()
        UpperLayer.setDepth(20)
        TopLayer.setDepth(30)
        camera.setZoom(1.2)

        this.npcs = []
        this.numberOfCitizen = 200

        this.loadNPCs(map)

        camera.startFollow(this.player)
        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        
       

        WorldLayer.setCollisionByProperty({collides: true})
       

        if(this.debug) {
            const debugGraphic = this.add.graphics();
            WorldLayer.renderDebug(debugGraphic, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
            faceColor: new Phaser.Display.Color(40, 39, 37, 255)
        })
        
        
        
        }
        
        this.physics.add.collider(this.player, WorldLayer)
        this.physics.add.collider(this.npcs, WorldLayer)
        this.physics.overlap(this.npcs, WorldLayer, () => {
            this.npcs.forEach(npc => {
                npc.body.setVelocity(0)
                npc.updateDestination()
            })
        })
        

        
    }

    update(time, delta) {
        //const prevVelocity = this.player.body.velocity.clone();
        this.player.move()
        this.npcs.forEach(npc => {
            npc.move()
        })

        
        
       
    }
    
    loadNPCs(map) {
        for(let citizen = 0; citizen <= this.numberOfCitizen; citizen++){
            let spawn = this.walkableGrid[Math.floor(Math.random() * this.walkableGrid.length)]
            const npcspritesheet = ['citizen1', 'citizen2', 'citizen4']
            let npc = new NPC(this, spawn.xLoc * 32, spawn.yLoc * 32, npcspritesheet[Math.floor(Math.random() * npcspritesheet.length)], this.grid, this.walkableGrid, this.finder, map)
            //console.log('generate npc at:', spawn.x, spawn.y)
            npc.generateAnimation()
            this.npcs.push(npc)
        }
    }


    loadTileset() {
        this.load.image('market', '../../../assets/tilemap/tilesprite/market.png')
        this.load.image('country_tileset2', '../../../assets/tilemap/tilesprite/country_tileset2.png')
        this.load.image('tileset', '../../../assets/tilemap/tilesprite/tilehousea3.png')
        this.load.image('contry_tileset1', '../../../assets/tilemap/tilesprite/tileset.png')
        this.load.image('tileset1', '../../../assets/tilemap/tilesprite/tileset1.png')
        this.load.image('water_tileset', '../../../assets/tilemap/tilesprite/[A]Water_pipo.png')
        this.load.image('futuristic_a4', '../../../assets/tilemap/tilesprite/futuristic_a4.png')
        this.load.image('futuristic_a5', '../../../assets/tilemap/tilesprite/futuristic_a5.png')
    }
    
    
    


}