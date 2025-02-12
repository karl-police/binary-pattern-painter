import * as PixiJS from "pixi.js";

var app = new PixiJS.Application();

const amount = 5;
const size = 90;

let isCanvasMouseDown = false;

let currentX = 0
let currentY = 0

export var config = {
    drawColor: "white"
}


class PreviewPixel {
    /**
     * @type {PixiJS.Graphics}
     */
    rect = undefined;

    constructor() {
        this.rect = new PixiJS.Graphics()
    }
    

    clearGraphics() {
        this.rect.clear()
    }

    setPixelPos(x, y) {
        this.clearGraphics()

        this.rect.rect(
            x*size,y*size,
            size, size
        )
        this.rect.fill({color:"white", alpha: 0.5})
        this.rect.tint = "0x77bbff"
    }

    getRect() {
        return this.rect
    }
}
var previewPixel = new PreviewPixel()


class TestPixel {
    rect = undefined;
    text = undefined;

    constructor(x, y) {
        this.rect = new PixiJS.Graphics()
        this.text = new PixiJS.Text({
            text: "N/A",
            style: {
                fontFamily: "Monospace",
                fontSize: 30,
            },
        })

        let rect = this.rect
        let text = this.text

        rect.rect(
            x*size,y*size,
            size,size
        )
        rect.fill({color:"white"})
        rect.tint = "gray"

        text.text = "0.5"

        text.x = (x*size) + (size/2)
        text.y = (y*size) + (size/2)
        text.anchor.set(0.5, 0.5)
        
        rect.eventMode = "static"
        //rect.cursor = "pointer"
    
        rect.addEventListener("mousemove", () => {
            currentX = x
            currentY = y
            previewPixel.setPixelPos(currentX, currentY)

            if (isCanvasMouseDown) {
                this.drawOnRect()
            }
        })
        rect.addEventListener("mousedown", () => {
            this.drawOnRect()
        })
        rect.addEventListener("touchstart", () => {
            this.drawOnRect()
        })
    }

    drawOnRect() {
        this.rect.tint = config.drawColor
    }

    getRect() {
        return this.rect
    }

    appendToHTML(stage) {
        stage.addChild(this.getRect())
        //stage.addChild(this.text)
    }
}


async function main() {
    /*// Add font files to the bundle
    PixiJS.Assets.addBundle('fonts', [
        { alias: 'Micro 5', src: "https://fonts.gstatic.com/s/micro5/v2/H4cnBX2MkcfEngTr4n0a7YO5.woff2" },
    ]);

    // Load the font bundle
    await PixiJS.Assets.loadBundle('fonts');*/
    
    await app.init({
        width: amount * size,
        height: amount * size,
    })

    app.canvas.addEventListener("mousedown", () => { isCanvasMouseDown = true; })
    app.canvas.addEventListener("mouseup", () => { isCanvasMouseDown = false; })
    app.canvas.addEventListener("mouseleave", () => { 
        isCanvasMouseDown = false; 
        previewPixel.clearGraphics();
    })


    for (let i=0; i<amount; i++) {
        for (let j=0; j<amount; j++) {
            (new TestPixel(i,j)).appendToHTML(app.stage)
        }
    }

    app.stage.addChild(previewPixel.getRect())
}

class PixiJS_BinaryPatternEditor {
    /**
     * 
     * @param {HTMLElement} elem 
     */
    static initFor_HTMLElement(elem) {
        main().then(() => {
            elem.style.imageRendering = "pixelated"

            elem.appendChild(app.canvas);
        })
    }
}


export default PixiJS_BinaryPatternEditor;