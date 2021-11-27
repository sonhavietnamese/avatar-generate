let keysForRandom = []
const result = {}
const keys = []
const values = []

function generate() {
    const backgrounds = ['BG_1', 'BG_2', 'BG_3']
    const noses = ['NOSE_1', 'NOSE_2', 'NOSE_3']
    const hairs = ['HAIR_1', 'HAIR_2', 'HAIR_3']

    for (const background of backgrounds) {
        for (const nose of noses) {
            for (const hair of hairs) {
                const backgroundIndex = background.split('_')[1]
                const noseIndex = nose.split('_')[1]
                const hairIndex = hair.split('_')[1]
                const keyTemp = backgroundIndex + noseIndex + hairIndex
                const valueTemp = [background, nose, hair]
                keys.push(keyTemp)
                values.push(valueTemp)
            }
        }
    }

    for (let i = 0; i < keys.length; i += 1) {
        result[`${keys[i]}`] = values[i]
    }

    keysForRandom = [...keys]
}

function random() {
    generate()
    const index = Math.floor(Math.random() * (keysForRandom.length - 0)) + 0
    const model = result[keysForRandom[index]]
    delete result[keysForRandom[index]]
    return model
}

console.log(random())
console.log(result)
