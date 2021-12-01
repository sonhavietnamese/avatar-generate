import common from '../utils/common.js'

const generateAvatar = (req, res) => {
    common.createAvatar().then((image) => res.status(200).send({
        message: image,
    }))
}

export default { generateAvatar }
