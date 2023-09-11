import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Car, { carFeatures } from "../models/car";
import { Auth, CarInquiry, Categoryes, CarData, CarModel, carServices, carEngineCapacities, carDocument, carLoaction, addFAQS } from "../models/car"
import bcrypt from "bcrypt";
import  nodemailer from "nodemailer"
import   {format}  from "date-fns";



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
    const { userName, email, password, phoneNumber, address, city, locality, area, zipcode } = req.body;

    // Check if the email already exists in the database
    const existingUser = await collections.cars.findOne({ email });

    if (existingUser) {
      return res.status(409).send({ status: 409, message: "Email already exists. Please choose a different email." });
    }

    // If the email is unique, create a new Auth instance
    const newUser = new Auth(userName, email, password, phoneNumber, address, city, locality, area, zipcode);

    // Save the new user to the database
    const result = await collections.cars.insertOne(newUser);

    if (result) {
      return res.status(201).send({ status: 201, message: `Successfully created a new User with id ${result.insertedId}` });
    } else {
      return res.status(500).send({ status: 500, message: "Failed to create a new User." });
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
      return res.status(404).send({ status: 404, message: "User not found. Please check your email or sign up." });
    }

    // Compare the provided password with the hashed password from the database
    const passwordMatch = await bcrypt.compareSync(password, user.password);
    console.log(passwordMatch, "passwordMatchpasswordMatch")
    if (!passwordMatch) {
      return res.status(401).send({ status: 401, message: "Invalid password. Please check your password and try again." });
    }

    // At this point, the login is successful.
    return res.status(200).send({ status: 200, message: "Login successful!" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ status: 500, message: "Internal Server Error" });
  }
});

carsRouter.post("/createInquiry", async (req: Request, res: Response) => {
    try {
        const { carName, startDate,endDate,pickUpLoc,dropLocation,phoneNumber,area,email} = req.body;

        // Find the user with the provided email in the database
      
         const inquiry=new CarInquiry(carName, startDate,endDate,pickUpLoc,dropLocation,phoneNumber,area)
        // Compare the provided password with the hashed password from the database
        inquiry["email"]=email
        console.log(inquiry)
        const result = await collections.carInquiry.insertOne(inquiry)

        if (result) {
            const transporter = nodemailer.createTransport({
                service: `gmail`,
                auth: {
                  user: ' ',
                  pass: ' ',
                },
              });
              const mailOptions = {
                  from: ' ',
                  to: email,
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

      return res.status(201).send({ status: 201, message: `Successfully created a inquiry  and sent email ` });
    } else {
      return res.status(500).send({ status: 500, message: "Failed to create a inquiry." });
    }

  } catch (error) {
    console.error(error);
    return res.status(500).send({ status: 500, message: "Internal Server Error" });
  }
});
carsRouter.get("/getInquiry/:id", async (req: Request, res: Response) => {
  try {
    console.log(req.params.id); // Corrected statement
    const objectId = new ObjectId(req.params.id); // Convert to ObjectId
    console.log(objectId); // Log the converted ObjectId

    const result = await collections.carInquiry.findOne({ _id: objectId })
    if (result) {
      return res.status(201).send({ status: 201, message: "data get scussfully", data: result || {} });
    }

    else {
      return res.status(400).send({ status: 201, message: "No data found", data: result });

    }

  } catch (error) {
    console.error(error);
    return res.status(500).send({ status: 500, message: "Internal server Error" });
  }
});
carsRouter.delete("/deleteInquiry/:id", async (req: Request, res: Response) => {
  try {
    console.log(req.params.id); // Corrected statement
    const objectId = new ObjectId(req.params.id); // Convert to ObjectId
    console.log(objectId); // Log the converted ObjectId

    const result = await collections.carInquiry.deleteOne({ _id: objectId })
    return res.status(201).send({ status: 201, message: `Delete Inquiry is done with ${req.params.id}` });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ status: 500, message: "Internal Server Error" });
  }
});
carsRouter.put("/updateInquiry", async (req: Request, res: Response) => {
  try {
    const { carName, startDate, endDate, pickUpLoc, dropLocation, phoneNumber, area, _id } = req.body;
    console.log(req.params.id); // Corrected statement
    const objectId = new ObjectId(_id); // Convert to ObjectId
    console.log(objectId); // Log the converted ObjectId

    const result = await collections.carInquiry.updateOne({ _id: objectId }, { $set: { carName: carName, startDate: startDate, endDate: endDate, pickUpLoc: pickUpLoc, dropLocation: dropLocation, phoneNumber: phoneNumber, area: area } })
    return res.status(201).send({ status: 201, message: `Delete Inquiry is done with ${req.params.id}` });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ status: 500, message: "Internal Server Error" });
  }
});
carsRouter.get("/getInquirys", async (req: Request, res: Response) => {
  try {

    // Find the user with the provided email in the database

    // Compare the provided password with the hashed password from the database
    const result = await collections.carInquiry.find().toArray()

    if (result) {
      return res.status(201).send({ status: 201, message: "getInquirys sucessfully", data: result });
    }
    else {
      return res.status(400).send({ status: 201, message: "No data found", data: result });

    }


  } catch (error) {
    console.error(error);
    return res.status(500).send({ status: 500, message: "Internal Server Error" });
  }
});
carsRouter.post("/createCategory", async (req: Request, res: Response) => {
  try {
    let { name, status, slag, createdDate, updatedDate } = req.body;


        // If the email is unique, create a new Auth instance
        const date = new Date(); // Note: Months are zero-based (8 represents September)

         const formattedDate = format(date, 'dd/MM/yyyy');
        createdDate=formattedDate
        updatedDate=formattedDate

    // If the email is unique, create a new Auth instance
    const newCategory = new Categoryes(name, status, slag, createdDate, updatedDate);

    // Save the new user to the database
    const result = await collections.carCategory.insertOne(newCategory);

    if (result) {
      return res.status(201).send({ status: 201, message: `Successfully created a new Category with id ${result.insertedId}` });
    } else {
      return res.status(500).send({ status: 500, message: "Failed to create a new Category." });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).send((error as Error).message); // Respond with the error message from the validation
  }
});
carsRouter.get("/getAllCategoryes", async (req: Request, res: Response) => {
  try {

        // Save the new user to the database
        const result = await collections.carCategory.find({}).toArray()
        if(result) 
        {
            return res.status(201).send({status:201,message:"getAllCategoryes sucessfully",data:result});
       } 
    else {
      return res.status(400).send({ status: 201, message: "No data found", data: result });

    }
  } catch (error) {
    console.error(error);
    return res.status(400).send((error as Error).message); // Respond with the error message from the validation
  }
});
carsRouter.post("/createBrand", async (req: Request, res: Response) => {
    try {
      let  { name,status,slag,createdDate,updatedDate} = req.body;
        const date = new Date(); // Note: Months are zero-based (8 represents September)

        let  formattedDate = format(date, 'dd/MM/yyyy');
      createdDate=formattedDate
      updatedDate=formattedDate




    // If the email is unique, create a new Auth instance
    const newBrand = new Categoryes(name, status, slag, createdDate, updatedDate);

    // Save the new user to the database
    const result = await collections.carBrands.insertOne(newBrand);

    if (result) {
      return res.status(201).send({ status: 201, message: `Successfully created a new Brand with id ${result.insertedId}` });
    } else {
      return res.status(500).send({ status: 500, message: "Failed to create a new Brand." });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).send((error as Error).message); // Respond with the error message from the validation
  }
});
carsRouter.get("/getAllBrands", async (req: Request, res: Response) => {
  try {


    // Save the new user to the database
    const result = await collections.carBrands.find({}).toArray()
    if (result) {
      return res.status(201).send({ status: 201, message: "getAllBrands sucessfully", data: result });
    }
    else {
      return res.status(400).send({ status: 400, message: "No data found", data: {} });
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
      return res.status(404).send({ status: 404, message: "User not found. Please check your email or sign up." });
    }

    // Compare the provided password with the hashed password from the database
    const passwordMatch = await bcrypt.compareSync(password, user.password);
    console.log(passwordMatch, "passwordMatchpasswordMatch")
    if (!passwordMatch) {
      return res.status(401).send({ status: 401, message: "Invalid password. Please check your password and try again." });
    }

    // At this point, the login is successful.
    return res.status(200).send({ status: 200, message: "Login successful!" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ status: 500, message: "Internal Server Error" });
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



carsRouter.post('/createNewCar', async (req: Request, res: Response) => {
  try {

    const carData: CarData[] = req.body;

    // const carCollection = getDatabase().collection('cars'); // Replace with your collection name

    // Insert the car data into the collection
    const result = await collections.carData.insertOne(carData)

    if (result) {

      return res.status(201).send({ status: 201, message: 'createNewCar successfully.' });
    } else {
      return res.status(500).send({ status: 500, message: 'Failed to add car data.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).send((error as Error).message);
  }
});




carsRouter.post('/addCarModel', async (req: Request, res: Response) => {
  try {
    const carData: CarModel = req.body;

    // Validate the required fields
    if (!carData.Name || !carData.Brand || !carData.CreatedDate || !carData.UpdatedDate) {
      return res.status(400).send({ status: 400, message: 'Required fields are missing.' });
    }

    // Get a reference to the 'cars' collection
    // const carCollection = getCollection('cars'); // Adjust the collection name as needed

    // Insert the car data into the collection
    const date = new Date(); // Note: Months are zero-based (8 represents September)

    const formattedDate = format(date, 'dd/MM/yyyy');
    carData.CreatedDate=formattedDate
    carData.UpdatedDate=formattedDate
    const result = await collections.carModel.insertOne(carData);

    if (result) {
      return res.status(201).send({ status: 201, message: 'Car Model added successfully.' });
    } else {
      return res.status(500).send({ status: 500, message: 'Failed to add car data.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).send((error as Error).message);
  }
});
carsRouter.get('/getCarModel/:id', async (req: Request, res: Response) => {
  try {
    console.log(req.params.id); // Corrected statement
    const objectId = new ObjectId(req.params.id); // Convert to ObjectId
    console.log(objectId); // Log the converted ObjectId

    const result = await collections.carModel.findOne({ _id: objectId })
    if (result) {
      return res.status(201).send({ status: 201, message: "getCarModel sucessfully", data: result })
    }
    else {
      return res.status(400).send({ status: 201, message: "No data found", data: result })

    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ status: 500, message: "Internal server Error" });
  }

});
carsRouter.put('/updateCarModel', async (req: Request, res: Response) => {
  //try {
  //   const carData: CarModel = req.body;

  //   // Validate the required fields
  //   if (!carData.Name || !carData.Brand || !carData.CreatedDate || !carData.UpdatedDate) {
  //     return res.status(400).send({ message: 'Required fields are missing.' });
  //   }

  //   // Get a reference to the 'cars' collection
  //   // const carCollection = getCollection('cars'); // Adjust the collection name as needed

  //   // Insert the car data into the collection
  //   const result = await collections.carModel.insertOne(carData);

  //   if (result) {
  //     return res.status(201).send({ message: 'Car Model added successfully.' });
  //   } else {
  //     return res.status(500).send({ message: 'Failed to add car data.' });
  //   }

  // } catch (error) {
  //   console.error(error);
  //   return res.status(400).send((error as Error).message);
  // }
  try {
    const { Name, Brand, CreatedDate, UpdatedDate, _id } = req.body;
    console.log(req.params.id); // Corrected statement
    const objectId = new ObjectId(_id); // Convert to ObjectId
    console.log(objectId); // Log the converted ObjectId

    const result = await collections.carModel.updateOne({ _id: objectId }, { $set: { Name: Name, Brand: Brand, CreatedDate: CreatedDate, UpdatedDate: UpdatedDate } })
    return res.status(201).send({ status: 201, message: `update carModel is done with ${req.params.id}` });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ status: 500, message: "Internal Server Error" });
  }
});

carsRouter.delete('/deleteCarModel/:id', async (req: Request, res: Response) => {
  try {
    console.log(req.params.id); // Corrected statement
    const objectId = new ObjectId(req.params.id); // Convert to ObjectId
    console.log(objectId); // Log the converted ObjectId

    const result = await collections.carModel.deleteOne({ _id: objectId })
    return res.status(201).send({ status: 201, message: `Delete carModel is done with ${req.params.id}` });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ status: 500, message: "Internal Server Error" });
  }

});



carsRouter.get("/getAllCarModel", async (req: Request, res: Response) => {
  try {

    const test = await collections.carModel.find({}).toArray()
    if (test) {
      return res.status(201).send({ status: 201, message: "getAllCarModel sucessfully", data: test }
      )
    }
    else {
      res.status(400).send({ status: 400, message: 'No data found.', data: {} })
    }

  }
  catch (err) {
    return res.status(400).send((err as Error).message);

  }
})




carsRouter.post('/createCarFeatures', async (req: Request, res: Response) => {
    try {
      const data: carFeatures = req.body;
  
      if (!data.Title || !data.CreatedDate || !data.UpdatedDate) {
        return res.status(400).send({ message: 'Required fields are missing.' });
      }
      const date = new Date(); // Note: Months are zero-based (8 represents September)

      const formattedDate = format(date, 'dd/MM/yyyy');
      data.CreatedDate=formattedDate
      data.UpdatedDate=formattedDate
      const result = await collections.carFeatures.insertOne(data);
    if (result) {
      return res.status(201).send({ status: 201, message: 'CarFeatures added successfully.' });
    } else {
      return res.status(500).send({ status: 500, message: 'Failed to add data.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).send((error as Error).message);
  }
});


carsRouter.get("/getAllCarFeatures", async (req: Request, res: Response) => {

  const result = await collections.carFeatures.find({}).toArray()

  if (result) {
    return res.status(200).send({ status: 200, message: "getAllCarFeatures sucessfully", data: result }
    )

  }
  else {
    return res.status(400).send({ status: 400, message: "No data found", data: {} })
  }

})



carsRouter.post('/createCarServices', async (req: Request, res: Response) => {
  try {
    const data: carServices = req.body;

    if (!data.Title || !data.CreatedDate || !data.UpdatedDate) {
      return res.status(400).send({ status: 400, message: 'Required fields are missing.' });
    }
    const result = await collections.addCarServices.insertOne(data);

    if (result) {
      return res.status(201).send({ status: 201, message: 'CarServices added successfully.' });
    } else {
      return res.status(500).send({ status: 500, message: 'Failed to add CarServices.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).send((error as Error).message);
  }
});


carsRouter.get("/getAllCarServices", async (req: Request, res: Response) => {

  const result = await collections.addCarServices.find({}).toArray()

  if (result) {
    return res.status(200).send({ status: 200, message: "getAllCarServices sucessfully", data: result }
    )

  }
  else {
    return res.status(400).send({
      status: 400, message: "No data found",data:result})
    }
  
    })


carsRouter.post('/createcarEngineCapacities', async (req: Request, res: Response) => {
  try {
    const data: carEngineCapacities = req.body;

    if (!data.Capacity || !data.CreatedDate) {
      return res.status(400).send({ status: 400, message: 'Required fields are missing.' });
    }
    const result = await collections.addCarEngineCapacities.insertOne(data);

    if (result) {
      return res.status(201).send({ status: 201, message: 'carEngineCapacities added successfully.' });
    } else {
      return res.status(500).send({ status: 500, message: 'Failed to add carEngineCapacities.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).send((error as Error).message);
  }
});


carsRouter.get("/getAllcarEngineCapacities", async (req: Request, res: Response) => {

  const result = await collections.addCarEngineCapacities.find({}).toArray()

  if (result) {
    return res.status(200).send({ status: 200, message: "getAllcarEngineCapacities sucessfully", data: result }
    )

  }
  else {
    return res.status(400).send({ status: 400, message: "No data found", data: {} })
  }

})



carsRouter.post('/createcarDocument', async (req: Request, res: Response) => {
  try {
    const data: carDocument = req.body;

    if (!data.Title || !data.CreatedDate || !data.UpdatedDate) {
      return res.status(400).send({ status: 400, message: 'Required fields are missing.' });
    }
    const result = await collections.addCarDocument.insertOne(data);

    if (result) {
      return res.status(201).send({ status: 201, message: 'carDocument added successfully.' });
    } else {
      return res.status(500).send({ status: 500, message: 'Failed to add carDocument.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).send((error as Error).message);
  }
});


carsRouter.get("/getAllcarDocument", async (req: Request, res: Response) => {

  const result = await collections.addCarDocument.find({}).toArray()

  if (result) {
    return res.status(200).send({ status: 200, message: "getAllcarDocument sucessfully", data: result }
    )

  }
  else {
    return res.status(400).send({ status: 400, message: "No data found", data: {} })
  }

})



carsRouter.post('/createcarLoaction', async (req: Request, res: Response) => {
  try {
    const data: carLoaction = req.body;

    if (!data.Name || !data.CreatedDate || !data.UpdatedDate) {
      return res.status(400).send({ status: 400, message: 'Required fields are missing.' });
    }
    const result = await collections.addCarLoaction.insertOne(data);

    if (result) {
      return res.status(201).send({ status: 201, message: 'carLoaction added successfully.' });
    } else {
      return res.status(500).send({ status: 500, message: 'Failed to add carLoaction.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).send((error as Error).message);
  }
});


carsRouter.get("/getAllcarLoaction", async (req: Request, res: Response) => {

  const result = await collections.addCarLoaction.find({}).toArray()

  if (result) {
    return res.status(200).send({ status: 200, message: "getAllcarLoaction sucessfully", data: result }
    )

  }
  else {
    return res.status(400).send({ status: 400, message: "No data found", data: {} })
  }

})

carsRouter.post('/createFAQS', async (req: Request, res: Response) => {
  try {
    const data: addFAQS = req.body;

    if (!data.Question || !data.Answer || !data.CreatedDate || !data.UpdatedDate) {
      return res.status(400).send({ status: 400, message: 'Required fields are missing.' });
    }
    const result = await collections.addFAQS.insertOne(data);

    if (result) {
      return res.status(201).send({ status: 201, message: 'createFAQS added successfully.' });
    } else {
      return res.status(500).send({ status: 500, message: 'Failed to add createFAQS.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).send((error as Error).message);
  }
});

carsRouter.get("/getAllFAQS", async (req: Request, res: Response) => {

  const result = await collections.addFAQS.find({}).toArray()

  if (result) {
    return res.status(200).send({ status: 200, message: "getAllFAQS sucessfully", data: result }
    )
  }
  else {
    return res.status(400).send({ status: 400, message: "No data Found", data: {} })
  }

})
carsRouter.get("/dashBoard", async (req: Request, res: Response) => {

  const cars = await collections.carData.count()
  const Categoryes = await collections.carCategory.count()
  const brands = await collections.carBrands.count()
  const enquiryes = await collections.carInquiry.count()
  const contactInquires = await collections.contactInfo.count()
  const location = await collections.addCarLoaction.count()
  const result = {
    totalCars: cars,
    totalCategoryes: Categoryes,
    totalBrands: brands,
    totalEnquiryes: enquiryes,
    totalContactInquires: contactInquires,
    totalLocation: location
  }

  if (result) {
    return res.status(200).send({ status: 200, message: "getdashBoard sucessfully", data: result }
    )
  }
  else {
    return res.status(400).send({ status: 400, message: " getdashBoard data is not avaible", data: {} })
  }

})



export default carsRouter;
