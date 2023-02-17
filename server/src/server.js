import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import router from './routes/router';
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 1103;

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Test Swagger API',
            version: 'v1.0',
            description: 'API documentation using Swagger',
        },
    },
    apis: ['./controllers/*.js'],
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

viewEngine(app);
router(app);

app.listen(port, () => {
    console.log("Hello NodeJs");
    console.log("The server is in " + port);
});
