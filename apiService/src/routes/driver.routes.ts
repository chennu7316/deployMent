import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import bcrypt from "bcrypt";
import  nodemailer from "nodemailer"
import {Auth, ContactInfo, Newlist} from "../models/driver"



export const driverRouters = express.Router();

driverRouters.use(express.json());



driverRouters.post("/signUp", async (req: Request, res: Response) => {
    try {
        const { userName,email, password ,phoneNumber,address,city,locality,area,zipcode} = req.body;

        // Check if the email already exists in the database
        const existingUser = await collections.driver.findOne({ email });

        if (existingUser) {
            return res.status(409).send({message:"Email already exists. Please choose a different email."});
        }

        // If the email is unique, create a new Auth instance
        const newUser = new Auth(userName,email, password, phoneNumber,address,city,locality,area,zipcode);

        // Save the new user to the database
        const result = await collections.driver.insertOne(newUser);
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


driverRouters.post("/login", async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Find the user with the provided email in the database
        const user = await collections.driver.findOne({ email });
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




driverRouters.post('/createNewlist', async (req: Request, res: Response) => {
    try {
  
      const carData: Newlist[] = req.body;
  
      // const carCollection = getDatabase().collection('cars'); // Replace with your collection name
  
      // Insert the car data into the collection
      const result = await collections.newList.insertOne(carData)
      
      if (result) {
        
        return res.status(201).send({ message: 'createNewList successfully.' });
      } else {
        return res.status(500).send({ message: 'Failed to createNewList.' });
      }
    } catch (error) {
      console.error(error);
      return res.status(400).send((error as Error).message);
    }
  });


  
driverRouters.post('/addContactInfo', async (req: Request, res: Response) => {
    try {
      const carData: ContactInfo = req.body;
  
      const result = await collections.contactInfo.insertOne(carData);
  
      if (result) {
        return res.status(201).send({ message: 'contactInfo added successfully.' });
      } else {
        return res.status(500).send({ message: 'Failed to addContactInfo' });
      }
    } catch (error) {
      console.error(error);
      return res.status(400).send((error as Error).message);
    }
  });
export default driverRouters;
