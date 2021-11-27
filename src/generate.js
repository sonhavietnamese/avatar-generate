const backgrounds = ['BG_1', 'BG_2', 'BG_3', 'BG_4', 'BG_5']
const noses = ['NOSE_1', 'NOSE_2', 'NOSE_3']
const hairs = ['HAIR_1', 'HAIR_2', 'HAIR_3', 'HAIR_4']

const start = parseInt('111', 10)
const end = parseInt(`${backgrounds.length}${noses.length}${hairs.length}`, 10)

for (let index = start; index < end; index += 1) {
    index += 1
}
