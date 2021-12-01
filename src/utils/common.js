// const fs = require('fs')
// const { createCanvas, loadImage } = require('canvas')

// let keysForRandom = []
// const result = {}
// const keys = []
// const values = []

// function generate() {
//     const backgrounds = ['BG_1', 'BG_2', 'BG_3']
//     const noses = ['NOSE_1', 'NOSE_2', 'NOSE_3']
//     const hairs = ['HAIR_1', 'HAIR_2', 'HAIR_3']

//     for (const background of backgrounds) {
//         for (const nose of noses) {
//             for (const hair of hairs) {
//                 const backgroundIndex = background.split('_')[1]
//                 const noseIndex = nose.split('_')[1]
//                 const hairIndex = hair.split('_')[1]
//                 const keyTemp = backgroundIndex + noseIndex + hairIndex
//                 const valueTemp = [background, nose, hair]
//                 keys.push(keyTemp)
//                 values.push(valueTemp)
//             }
//         }
//     }

//     for (let i = 0; i < keys.length; i += 1) {
//         result[`${keys[i]}`] = values[i]
//     }

//     keysForRandom = [...keys]
// }

// function random() {
//     generate()
//     const index = Math.floor(Math.random() * (keysForRandom.length - 0)) + 0
//     const model = result[keysForRandom[index]]
//     delete result[keysForRandom[index]]
//     return model
// }

// async function createAvatar() {
//     const canvasWidth = 361
//     const canvasHeight = 361
//     const canvasBackgroundColor = '#FF0000'

//     const bodyPosition = { x: 87, y: 270 }
//     const hairPosition = { x: 87, y: 69 }
//     const facePosition = { x: 123, y: 122 }
//     const nosePosition = { x: 176, y: 184 }
//     const mouthPosition = { x: 148, y: 212 }

//     const canvas = createCanvas(canvasWidth, canvasHeight)
//     const ctx = canvas.getContext('2d')

//     ctx.fillStyle = canvasBackgroundColor
//     ctx.fillRect(0, 0, canvasWidth, canvasHeight)

//     await loadImage('assets/body/body.png').then((image) => {
//         ctx.drawImage(
//             image,
//             bodyPosition.x,
//             bodyPosition.y,
//             image.width,
//             image.height,
//         )
//     })

//     await loadImage('assets/hair/hair.png').then((image) => {
//         ctx.drawImage(
//             image,
//             hairPosition.x,
//             hairPosition.y,
//             image.width,
//             image.height,
//         )
//     })

//     await loadImage('assets/face/face.png').then((image) => {
//         ctx.drawImage(
//             image,
//             facePosition.x,
//             facePosition.y,
//             image.width,
//             image.height,
//         )
//     })

//     await loadImage('assets/nose/nose.png').then((image) => {
//         ctx.drawImage(
//             image,
//             nosePosition.x,
//             nosePosition.y,
//             image.width,
//             image.height,
//         )
//     })

//     await loadImage('assets/mouth/mouth.png').then((image) => {
//         ctx.drawImage(
//             image,
//             mouthPosition.x,
//             mouthPosition.y,
//             image.width,
//             image.height,
//         )
//     })

//     const imageBuffer = canvas.toDataURL()
//     fs.writeFileSync('./canvas.png', imageBuffer)
// }
