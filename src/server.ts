import express from "express";
import { connectToDatabase } from "./services/database.service"
import { carsRouter } from "./routes/cars.router";
import {  driverRouters} from "./routes/driver.routes";
const cors=require('cors')
import * as dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from "./swagger.json";
dotenv.config()
const port = process.env.PORT
const bodyParser = require('body-parser');

const app= express();
// eslint-disable-next-line 

const corsOptions = {
    origin: '*', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  
  app.use(cors(corsOptions));


app.use(bodyParser.json({ limit: '10mb' })); // Adjust the limit as needed
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
connectToDatabase()
    .then(() => {
        app.use("/user", carsRouter);
        app.use("/driver",driverRouters);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });