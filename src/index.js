;(async () => {
    const fs = require('fs')
    const { createCanvas, loadImage } = require('canvas')

    const canvasWidth = 361
    const canvasHeight = 361
    const canvasBackgroundColor = '#FF0000'

    const bodyPosition = { x: 87, y: 270 }
    const hairPosition = { x: 87, y: 69 }
    const facePosition = { x: 123, y: 122 }
    const nosePosition = { x: 176, y: 184 }
    const mouthPosition = { x: 148, y: 212 }

    const canvas = createCanvas(canvasWidth, canvasHeight)
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = canvasBackgroundColor
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)

    await loadImage('images/body.png').then((image) => {
        ctx.drawImage(
            image,
            bodyPosition.x,
            bodyPosition.y,
            image.width,
            image.height,
        )
    })

    await loadImage('images/hair.png').then((image) => {
        ctx.drawImage(
            image,
            hairPosition.x,
            hairPosition.y,
            image.width,
            image.height,
        )
    })

    await loadImage('images/face.png').then((image) => {
        ctx.drawImage(
            image,
            facePosition.x,
            facePosition.y,
            image.width,
            image.height,
        )
    })

    await loadImage('images/nose.png').then((image) => {
        ctx.drawImage(
            image,
            nosePosition.x,
            nosePosition.y,
            image.width,
            image.height,
        )
    })

    await loadImage('images/mouth.png').then((image) => {
        ctx.drawImage(
            image,
            mouthPosition.x,
            mouthPosition.y,
            image.width,
            image.height,
        )
    })

    const imageBuffer = canvas.toDataURL()
    fs.writeFileSync('./canvas.png', imageBuffer)
    console.log(imageBuffer)
})()
