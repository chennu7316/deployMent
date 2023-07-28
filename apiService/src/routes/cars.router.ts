import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Car from "../models/car";

export const carsRouter = express.Router();

carsRouter.use(express.json());

carsRouter.get("/", async (_req: Request, res: Response) => {
    try {
    //    const cars = (await collections.cars.find({}).toArray()) as Car[];

        res.status(200).send("Welcome to the Car rental world!");
    } catch (error) {
        res.status(500).send("error");
    }
});
// carsRouter.get("/:id", async (req: Request, res: Response) => {
//     const id = req?.params?.id;

//     try {
        
//         const query = { _id: new ObjectId(id) };
//         const car = (await collections.cars.findOne(query)) as unknown as Car;

//         if (car) {
//             res.status(200).send(car);
//         }
//     } catch (error) {
//         res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
//     }
// });
// carsRouter.post("/", async (req: Request, res: Response) => {
//     try {
//         const newGame = req.body as Car;
//         const result = await collections.cars.insertOne(newGame);

//         result
//             ? res.status(201).send(`Successfully created a new game with id ${result.insertedId}`)
//             : res.status(500).send("Failed to create a new game.");
//     } catch (error) {
//         console.error(error);
//         res.status(400).send(error.message);
//     }
// });


// carsRouter.put("/:id", async (req: Request, res: Response) => {
//     const id = req?.params?.id;

//     try {
//         const updatedCar: Car = req.body as Car;
//         const query = { _id: new ObjectId(id) };
      
//         const result = await collections.cars.updateOne(query, { $set: updatedCar });

//         result
//             ? res.status(200).send(`Successfully updated car with id ${id}`)
//             : res.status(304).send(`Car with id: ${id} not updated`);
//     } catch (error) {
//         console.error(error.message);
//         res.status(400).send(error.message);
//     }
// });


// carsRouter.delete("/:id", async (req: Request, res: Response) => {
//     const id = req?.params?.id;

//     try {
//         const query = { _id: new ObjectId(id) };
//         const result = await collections.cars.deleteOne(query);

//         if (result && result.deletedCount) {
//             res.status(202).send(`Successfully removed game with id ${id}`);
//         } else if (!result) {
//             res.status(400).send(`Failed to remove game with id ${id}`);
//         } else if (!result.deletedCount) {
//             res.status(404).send(`Game with id ${id} does not exist`);
//         }
//     } catch (error) {
//         console.error(error.message);
//         res.status(400).send(error.message);
//     }
// });