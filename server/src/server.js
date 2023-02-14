import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import router from './routes/router';
require('dotenv').config();

const app = express();

const port = process.env.PORT || 1103;

// config:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

viewEngine(app);
router(app);

app.listen(port, () => {
    console.log("Hello NodeJs");
});
