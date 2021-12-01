import pkg from 'canvas'
import source from '../constants/global.js'

// const fs = require('fs')
// const { createCanvas, loadImage } = require('canvas')
const { createCanvas, loadImage } = pkg

// let keysForRandom = []
// const result = {}
// const keys = []
// const values = []

// function getFileName(s) {
//     return s.split('/')[2].split('.')[0]
// }

// function generate() {
//     for (const body of source.bodies) {
//         for (const nose of source.noses) {
//             for (const hair of source.hairs) {
//                 for (const face of source.faces) {
//                     for (const mouth of source.mouths) {
//                         for (const eye of source.eyes) {
//                             const bodyFileName = getFileName(body)
//                             const noseFileName = getFileName(nose)
//                             const hairFileName = getFileName(hair)
//                             const faceFileName = getFileName(face)
//                             const mouthFileName = getFileName(mouth)
//                             const eyeFileName = getFileName(eye)

//                             const bodyIndex = bodyFileName.split('_')[1]
//                             const noseIndex = noseFileName.split('_')[1]
//                             const hairIndex = hairFileName.split('_')[1]
//                             const faceIndex = faceFileName.split('_')[1]
//                             const mouthIndex = mouthFileName.split('_')[1]
//                             const eyeIndex = eyeFileName.split('_')[1]
//                             const keyTemp = bodyIndex
//                                 + noseIndex
//                                 + hairIndex
//                                 + faceIndex
//                                 + mouthIndex
//                                 + eyeIndex
//                             const valueTemp = [body, nose, hair, face, mouth, eye]
//                             keys.push(keyTemp)
//                             values.push(valueTemp)
//                         }
//                     }
//                 }
//             }
//         }
//     }

//     for (let i = 0; i < keys.length; i += 1) {
//         result[`${keys[i]}`] = values[i]
//     }

//     keysForRandom = [...keys]
// }

function random() {
    // generate()
    // const index = Math.floor(Math.random() * (keysForRandom.length - 0)) + 0
    // const model = result[keysForRandom[index]]
    // delete result[keysForRandom[index]]
    const bodyPath = source.bodies[Math.floor(Math.random() * source.bodies.length)]
    const eyePath = source.eyes[Math.floor(Math.random() * source.eyes.length)]
    const hairPath = source.hairs[Math.floor(Math.random() * source.hairs.length)]
    const nosePath = source.noses[Math.floor(Math.random() * source.noses.length)]
    const facePath = source.faces[Math.floor(Math.random() * source.faces.length)]
    const mouthPath = source.mouths[Math.floor(Math.random() * source.mouths.length)]

    const model = [bodyPath, nosePath, hairPath, facePath, mouthPath, eyePath]

    return model
}

async function createAvatar() {
    const canvasWidth = 361
    const canvasHeight = 361
    const canvasBackgroundColor = '#FFF'

    const bodyPosition = { x: 87, y: 270 }
    const hairPosition = { x: 87, y: 69 }
    const facePosition = { x: 123, y: 122 }
    const nosePosition = { x: 176, y: 184 }
    const mouthPosition = { x: 153, y: 212 }
    const eyePosition = { x: 148, y: 156 }

    const canvas = createCanvas(canvasWidth, canvasHeight)
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = canvasBackgroundColor
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)

    const model = random()

    const srcBody = model[0]
    const srcNose = model[1]
    const srcHair = model[2]
    const srcFace = model[3]
    const srcMouth = model[4]
    const srcEye = model[5]

    await loadImage(srcBody).then((image) => {
        ctx.drawImage(
            image,
            bodyPosition.x,
            bodyPosition.y,
            image.width,
            image.height,
        )
    })

    await loadImage(srcFace).then((image) => {
        ctx.drawImage(
            image,
            facePosition.x,
            facePosition.y,
            image.width,
            image.height,
        )
    })

    await loadImage(srcNose).then((image) => {
        ctx.drawImage(
            image,
            nosePosition.x,
            nosePosition.y,
            image.width,
            image.height,
        )
    })

    await loadImage(srcMouth).then((image) => {
        ctx.drawImage(
            image,
            mouthPosition.x,
            mouthPosition.y,
            image.width,
            image.height,
        )
    })

    await loadImage(srcHair).then((image) => {
        ctx.drawImage(
            image,
            hairPosition.x,
            hairPosition.y,
            image.width,
            image.height,
        )
    })

    await loadImage(srcEye).then((image) => {
        ctx.drawImage(
            image,
            eyePosition.x,
            eyePosition.y,
            image.width,
            image.height,
        )
    })

    return canvas.toDataURL()
}

// createAvatar().then((image) => console.log(image))

export default { createAvatar }
