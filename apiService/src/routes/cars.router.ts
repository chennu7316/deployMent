import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Car from "../models/car";
import {Auth,CarInquiry} from "../models/car"
import bcrypt from "bcrypt";
import  nodemailer from "nodemailer"


export const carsRouter = express.Router();

carsRouter.use(express.json());

// carsRouter.get("/", async (_req: Request, res: Response) => {
//     try {
//     //    const cars = (await collections.cars.find({}).toArray()) as Car[];


//         res.status(200).send("Welcome to the Car rental world!");
//     } catch (error) {
//         res.status(500).send("error");
//     }
// });
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
carsRouter.post("/signUp", async (req: Request, res: Response) => {
    try {
        const { userName,email, password ,phoneNumber,address,city,locality,area,zipcode} = req.body;

        // Check if the email already exists in the database
        const existingUser = await collections.cars.findOne({ email });

        if (existingUser) {
            return res.status(409).send({message:"Email already exists. Please choose a different email."});
        }

        // If the email is unique, create a new Auth instance
        const newUser = new Auth(userName,email, password, phoneNumber,address,city,locality,area,zipcode);

        // Save the new user to the database
        const result = await collections.cars.insertOne(newUser);
        console.log(result)

        if (result) {
            return res.status(201).send({message:`Successfully created a new User with id ${result.insertedId}`});
        } else {
            return res.status(500).send({message:"Failed to create a new User."});
        }
    } catch (error) {
        console.error(error);
        return res.status(400).send((error as Error).message); // Respond with the error message from the validation
    }
});


carsRouter.post("/login", async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Find the user with the provided email in the database
        const user = await collections.cars.findOne({ email });
        console.log(user)
        if (!user) {
            return res.status(404).send({message:"User not found. Please check your email or sign up."});
        }

        // Compare the provided password with the hashed password from the database
        const passwordMatch = await bcrypt.compareSync(password, user.password);
        console.log(passwordMatch,"passwordMatchpasswordMatch")
        if (!passwordMatch) {
            return res.status(401).send({message:"Invalid password. Please check your password and try again."});
        }

        // At this point, the login is successful.
        return res.status(200).send({message:"Login successful!"});
    } catch (error) {
        console.error(error);
        return res.status(500).send({message:"Internal Server Error"});
    }
});
carsRouter.post("/createInquiry", async (req: Request, res: Response) => {
    try {
        const { carName, startDate,endDate,pickUpLoc,dropLocation,phoneNumber,area} = req.body;

        // Find the user with the provided email in the database
      
         const inquiry=new CarInquiry(carName, startDate,endDate,pickUpLoc,dropLocation,phoneNumber,area)
        // Compare the provided password with the hashed password from the database
        console.log(inquiry)
        const result = await collections.carInquiry.insertOne(inquiry)

        if (result) {
            const transporter = nodemailer.createTransport({
                service: `gmail`,
                auth: {
                  user: 'ganesh527@@sasi.ac.in',
                  pass: 'Chennu7316',
                },
              });
              const mailOptions = {
                  from: 'jhansimannidi@gmail.com',
                  to: 'jhansimannidi@gmail.com',
                  subject: 'INQUIRY Successfully  CREATED',
                  text: `Hi inquiry is created here is the details carName:${carName} startDate:${startDate} endDate:${endDate} pichUpLoc:${pickUpLoc} dropLoc:${dropLocation} phoneNumber:${phoneNumber} area:${area}`,
                };
                transporter.sendMail(mailOptions, (error, info) => {
                  if (error) {
                    console.error('Error sending email:', error);
                  } else {
                    console.log('Email sent:', info.response);
                  }
                });
            return res.status(201).send({message:`Successfully created a inquiry  and sent email `});
        } else {
            return res.status(500).send({message:"Failed to create a inquiry."});
        }
        
    } catch (error) {
        console.error(error);
        return res.status(500).send({message:"Internal Server Error"});
    }
});

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