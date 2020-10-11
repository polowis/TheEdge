import Phaser from 'phaser'
export default class DayNight {
    constructor(scene, dayLength) {
        this.scene = scene
        this.dayLength = dayLength
    }

    tweenTint(layer, startColor, endColor, duration) {


        this.scene.tweens.add({
            targets: this.scene,
            tweenStep: 100,
            onupdate: () => {
                let color = Phaser.Display.Color.Interpolate.ColorWithColor(startColor, endColor, 100, 1);
                let colorInt = Phaser.Display.Color.GetColor(color.r, color.g, color.b);
                layer.forEachTile(tile => {
                    tile.tint = colorInt;
                })
            },
            duration: duration,
            yoyo: false// Return to first tint
        })

        
        }
}