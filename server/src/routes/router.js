import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

const apiRoutes = (app) => {
    router.get("/", homeController.helloServer);
    router.get("/api/hello-world", (req, res) => {
        return res.send("This is API");
    });

    return app.use("/", router);
}

module.exports = apiRoutes;
