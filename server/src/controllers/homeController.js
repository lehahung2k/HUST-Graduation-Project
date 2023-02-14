const homeController = (req, res) => {
    return res.send('Hello, this is server!');
}

module.exports = {
    helloServer: homeController
}