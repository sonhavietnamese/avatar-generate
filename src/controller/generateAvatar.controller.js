const generateAvatar = (req, res) => {
    const welcomeMessage = 'Hello sonha!'
    res.status(200).send({
        message: welcomeMessage,
    })
}

export default { generateAvatar }
