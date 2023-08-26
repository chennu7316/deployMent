import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';

export const collections: { cars?: mongoDB.Collection,carInquiry?: mongoDB.Collection,carCategory?: mongoDB.Collection,carBrands?: mongoDB.Collection,carData?:mongoDB.Collection,carModel?:mongoDB.Collection,carFeatures?:mongoDB.Collection,addCarServices?:mongoDB.Collection,addCarEngineCapacities?:mongoDB.Collection,addCarDocument?:mongoDB.Collection,addCarLoaction?:mongoDB.Collection,addFAQS?:mongoDB.Collection,driver?:mongoDB.Collection,newList?:mongoDB.Collection,contactInfo?:mongoDB.Collection} = {};
export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING,
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const carsCollection: mongoDB.Collection = db.collection(
    process.env.CAR_COLLECTION_NAME,
  );
  const driverCollections: mongoDB.Collection = db.collection(
    process.env.DRIVER_COLLECTION_NAME,
  );
  const newLists: mongoDB.Collection = db.collection(
    process.env.NEW_LIST,
  );
  const carsInquiry: mongoDB.Collection = db.collection(
    process.env.CAR_INQUIRY,
  );
  const carCategory: mongoDB.Collection=db.collection(
    process.env.CAR_CATEGORYES,
  );
  const carBrand: mongoDB.Collection=db.collection(
    process.env.CAR_CATEGORYES,
  );
  
   const carData:mongoDB.Collection=db.collection(
    process.env.CAR_DATA,

   )
   const carModel:mongoDB.Collection=db.collection(
    process.env.CAR_MODEL,

   )

  const carFeatures:mongoDB.Collection=db.collection(
    process.env.CAR_FEATURES,
  )

  const addCarServices:mongoDB.Collection=db.collection(
    process.env.CAR_SERVICES
  )

    const addCarEngineCapacities:mongoDB.Collection=db.collection(
    process.env.CAR_ENGINE
  )
    const addCarDocument:mongoDB.Collection=db.collection(
    process.env.CAR_DOCUMENT
  )
    const addCarLoaction:mongoDB.Collection=db.collection(
    process.env.CAR_LOCATION
  )
  const addFAQS:mongoDB.Collection=db.collection(
    process.env.CAR_FAQS
  )

  const contactInfo:mongoDB.Collection=db.collection(
    process.env.CONTACT_INFO
  )

  collections.cars = carsCollection;
  collections.driver=driverCollections;
  collections.carInquiry=carsInquiry;
  collections.carCategory=carCategory;
  collections.carBrands=carBrand;
  collections.carData=carData;
  collections.carModel=carModel;
  collections.carFeatures=carFeatures
  collections.addCarServices=addCarServices
  collections.addCarEngineCapacities=addCarEngineCapacities;
  collections.addCarDocument=addCarDocument;
  collections.addCarLoaction=addCarLoaction;
  collections.addFAQS=addFAQS
  collections.newList=newLists
  collections.contactInfo=contactInfo
  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${carsCollection.collectionName}`,
  );
}
