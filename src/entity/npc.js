import Character from './character'


const name = ['Alice', 'Bob', 'Charlie', 'Delta', 
            'George', 'Foxxy', 'James', 'Bravo', 
            'Alpha', 'Alexandra', 'Julia', 'Python', 
            'Star', 'David', 'Articus', 'August', 'April',
            'Noland', 'Echo', 'Kiara', 'Foxtrot', 'Scralet',
            'Whiskey', 'Sierra', 'Papa', 'Victor', 'Mike', 'Tango',
            'Romeo', 'Aria', 'Cecilia', 'Cecilion', 'Charlotte', 'Anabella',
            'Grock', 'Rebecca', 'Hylos', 'Tesla', 'Woolies', 'Coles'
        ]
const charlist = ['char1', 'char2', 'char3', 'char4', 'char5', 'char6', 'char7', 'char8']
const npcspritesheet = ['citizen1', 'citizen2']
const npc = {
    "citizen1" :{
        "char1": {
            front: [0, 1, 2],
            left: [12, 13, 14],
            right: [24, 25, 26],
            back: [36, 37, 38]
        },

        "char2": {
            front: [3, 4, 5],
            left: [15, 16, 17],
            right: [27, 28, 29],
            back: [39, 40, 41]
        },
        "char3": {
            front: [6, 7, 8],
            left: [18, 19, 20],
            right: [30, 31, 32],
            back: [42, 43, 44],
        },

        "char4": {
            front: [9, 10, 11],
            left: [21, 22, 23],
            right: [33, 34, 35],
            back: [45, 46, 47]
        },
        "char5": {
            front: [48, 49, 50],
            left: [60, 61,62],
            right: [72, 73, 74],
            back: [84, 85, 86]
        },
        "char6": {
            front: [51, 52, 53],
            left: [63, 64, 65],
            right: [75, 76, 77],
            back: [87, 88, 89]
        },
        "char7": {
            front: [54, 55, 56],
            left: [66, 67, 68],
            right: [78, 79, 80],
            back: [90, 91, 92]
        },
        "char8": {
            front: [57, 58, 59],
            left: [69, 70, 71],
            right: [81, 82, 83],
            back: [93, 94, 95]
        }
    }, 
    "citizen2" :{
        "char1": {
            front: [0, 1, 2],
            left: [12, 13, 14],
            right: [24, 25, 26],
            back: [36, 37, 38]
        },

        "char2": {
            front: [3, 4, 5],
            left: [15, 16, 17],
            right: [27, 28, 29],
            back: [39, 40, 41]
        },
        "char3": {
            front: [6, 7, 8],
            left: [18, 19, 20],
            right: [30, 31, 32],
            back: [42, 43, 44],
        },

        "char4": {
            front: [9, 10, 11],
            left: [21, 22, 23],
            right: [33, 34, 35],
            back: [45, 46, 47]
        },
        "char5": {
            front: [48, 49, 50],
            left: [60, 61,62],
            right: [72, 73, 74],
            back: [84, 85, 86]
        },
        "char6": {
            front: [51, 52, 53],
            left: [63, 64, 65],
            right: [75, 76, 77],
            back: [87, 88, 89]
        },
        "char7": {
            front: [54, 55, 56],
            left: [66, 67, 68],
            right: [78, 79, 80],
            back: [90, 91, 92]
        },
        "char8": {
            front: [57, 58, 59],
            left: [69, 70, 71],
            right: [81, 82, 83],
            back: [93, 94, 95]
        }
    }, 
    "citizen4" :{
        "char1": {
            front: [0, 1, 2],
            left: [12, 13, 14],
            right: [24, 25, 26],
            back: [36, 37, 38]
        },

        "char2": {
            front: [3, 4, 5],
            left: [15, 16, 17],
            right: [27, 28, 29],
            back: [39, 40, 41]
        },
        "char3": {
            front: [6, 7, 8],
            left: [18, 19, 20],
            right: [30, 31, 32],
            back: [42, 43, 44],
        },

        "char4": {
            front: [9, 10, 11],
            left: [21, 22, 23],
            right: [33, 34, 35],
            back: [45, 46, 47]
        },
        "char5": {
            front: [48, 49, 50],
            left: [60, 61,62],
            right: [72, 73, 74],
            back: [84, 85, 86]
        },
        "char6": {
            front: [51, 52, 53],
            left: [63, 64, 65],
            right: [75, 76, 77],
            back: [87, 88, 89]
        },
        "char7": {
            front: [54, 55, 56],
            left: [66, 67, 68],
            right: [78, 79, 80],
            back: [90, 91, 92]
        },
        "char8": {
            front: [57, 58, 59],
            left: [69, 70, 71],
            right: [81, 82, 83],
            back: [93, 94, 95]
        }
    }
}
export default class NPC extends Character {
    constructor(scene, x, y, key, mapGrid, walkableGrid, finder, map) {
        super(scene, x, y, key)
        this.name = name[Math.floor(Math.random() * name.length)]
        this.spritesheetName = key
        this.spriteNumber = charlist[Math.floor(Math.random() * charlist.length)]
        this.speed = 60
        this.dir = Math.floor(Math.random() * 2*Math.PI );
        //this.rotation = Math.floor(Math.random() * 2*Math.PI );
        this.heading = {
            x: 0,
            y: 0
        };
        this.currentHeading = {
            x: 0,
            y: 0
          }
        this.movementStack = []
        this.map = map;
        this.finder = finder;
        this.walkableGrid = walkableGrid;
        this.updateDestination()
        
        
    }

    setMap(map) {
        this.map = map
        return this
    }

    move() {
        if(Math.floor(Math.random() * 20) === 0)
            this.updateDestination();
            

        let coord;
        if(coord = this.movementStack.pop()) {
            this.scene.physics.moveTo(this, coord.x, coord.y, this.speed);
            var dx = coord.x - this.x;
            var dy = coord.y - this.y;
            this.dir = Math.atan2(dy, dx);
        } else {
            this.scene.physics.moveTo(this, this.heading.x, this.heading.y, this.speed);
            let dx = this.heading.x - this.x;
            let dy = this.heading.y - this.y;
            // Rotate the NPC toward the new heading
            this.dir = Math.atan2(dy, dx);
        }
        
        if(this.body.velocity.x > 0) {
            this.anims.play(this.spriteNumber+this.name+'Right', true)
        } 
        if(this.body.velocity.x < 0) {
            this.anims.play(this.spriteNumber+this.name+'Left', true)
        }

        
        
       
        
    }

    lerp(first, second, fraction) {
        let dx = first.x + (second.x - first.x) * fraction;
        let dy = first.y + (second.y - first.y) * fraction;
        return {
            x: dx,
            y: dy
        }
    }

    moveToDirection(path) {
        let tweens = [];
        for(let i = 0; i < path.length-1; i++){
            let ex = path[i+1].x;
            let ey = path[i+1].y;
            tweens.push({
                targets: this,
                x: {value: ex*this.map.width, duration: 200},
                y: {value: ey*this.map.height, duration: 200}
            });
        }

        this.scene.tweens.timeline(
            {
             tweens: tweens
            }
        )
    }

    updateDestination() {
        const ANGLE = 90 * (Math.PI / 180);  // Constraint in radians
        const DIST = 400; // move within 400 pixels
        let offset = (Math.floor(Math.random() * ANGLE-  ANGLE/2))
        // Get a random point within the constraint angle at DIST length away
        this.currentHeading.x = this.x + Math.cos(this.dir) * DIST;
        this.currentHeading.y = this.y + Math.sin(this.dir) * DIST;
        let newX = this.x + Math.cos(this.dir + offset) * DIST;
        let newY = this.y + Math.sin(this.dir + offset) * DIST;
        let offsetX = (Math.floor(this.x / 32) + Math.floor(Math.random()  * DIST))
        let offsetY = (Math.floor(this.y / 32) + Math.floor(Math.random() * DIST))
        
        //console.log(offsetY, offsetX)
        //let dest = this.walkableGrid[offsetY][offsetX]
    
        //let path = this.finder.findPath(Math.floor(this.x / 32), Math.floor(this.y / 32), offsetX, offsetY)
        //console.log(path)

        // set the new heading for the NPC
        //let sanitised = filterObject(newX, newY)
        let sanitised = this.sanitiseHeading(newX, newY)
        this.heading = {
                x: sanitised.x,
                y: sanitised.y
        }
        for(let i = 1; i <= 60; i++){
            this.movementStack.push(this.lerp(this.heading, this.currentHeading, i/60));
        }
            

    }

    sanitiseHeading(x, y) {
        let returner = {
            x : (x < 0 || x > this.map.widthInPixels - 1)? x *= -1: x,
            y : (y < 0 || y > this.map.heightInPixels - 1)? y *= -1: y
          }
          return returner;
    }

    newUpdateDestination() {
        let DIST = 12
        console.log('npc pos: ', this.y / 32, this.x / 32)
        let offsetX = (Math.floor(this.x / 32) + Math.floor(Math.random()  * DIST))
        let offsetY = (Math.floor(this.y / 32) + Math.floor(Math.random() * DIST))
        
        console.log(offsetY, offsetX)
        let dest = this.map[offsetY][offsetX]
        this.heading = {
            x: dest.Xloc * 32,
            y: dest.Yloc * 32
        }
    }

    getPath() {

    }

    generateAnimation() {
        this.frontAnimation()
        this.backAnimation()
        this.leftAnimation()
        this.rightAnimation()
    }

    frontAnimation() {
        this.scene.anims.create({
            key: this.spriteNumber + this.name + "Front",
            frames: this.scene.anims.generateFrameNumbers(this.spritesheetName, {frames: npc[this.spritesheetName][this.spriteNumber].front}),
            frameRate: 10
        })
    }

    leftAnimation() {
        this.scene.anims.create({
            key: this.spriteNumber + this.name + "Left",
            frames: this.scene.anims.generateFrameNumbers(this.spritesheetName, {frames: npc[this.spritesheetName][this.spriteNumber].left}),
            frameRate: 10
        })
    }

    rightAnimation() {
        this.scene.anims.create({
            key: this.spriteNumber + this.name + "Right",
            frames: this.scene.anims.generateFrameNumbers(this.spritesheetName, {frames: npc[this.spritesheetName][this.spriteNumber].right}),
            frameRate: 10
        })
    }

    backAnimation() {
        this.scene.anims.create({
            key: this.spriteNumber + this.name + "Back",
            frames: this.scene.anims.generateFrameNumbers(this.spritesheetName, {frames: npc[this.spritesheetName][this.spriteNumber].back}),
            frameRate: 10
        })
    }

}