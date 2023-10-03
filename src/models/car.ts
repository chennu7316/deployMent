import { type ObjectId } from "mongodb";
import bcrypt from "bcrypt";


export default class Car {
    constructor(public name: string, public price: number, public category: string, public id?: ObjectId) {}
}

export  class Auth{
    constructor(public firstName:string,public lastName:string, public email: string, public password: string,public phoneNumber: string,public address:string,public city:string,public locality:string,public area:string,public zipcode:string) {
        if (!this.isValidString(firstName)) {
            throw  Error(JSON.stringify({message:"Invalid username. Username must be a non-empty string."}));
        }
        if (!this.isValidString(lastName)) {
            throw  Error(JSON.stringify({message:"Invalid username. Username must be a non-empty string."}));
        }
        if (!this.isValidString(address)) {
            throw  Error(JSON.stringify({message:"Invalid address. address must be a non-empty string."}));
        }
        if (!this.isValidString(city)) {
            throw  Error(JSON.stringify({message:"Invalid city. city must be a non-empty string."}));
        }
        if (!this.isValidString(locality)) {
            throw  Error(JSON.stringify({message:"Invalid locality. locality must be a non-empty string."}));
        }
        if (!this.isValidString(area)) {
            throw  Error(JSON.stringify({message:"Invalid area.area must be a non-empty string."}));
        }
        if (!this.isValidString(zipcode)) {
            throw  Error(JSON.stringify({message:"Invalid zipcode.zipcode  must be a non-empty string."}));
        }

        if (!this.isValidPhoneNumber(phoneNumber)) {
            throw new Error(JSON.stringify({message:"Invalid phone number. Please provide a valid phone number as a number type."}));
        }

        if (!this.isValidEmail(email)) {
            throw new Error(JSON.stringify({message:"Invalid email address. Please provide a valid email address."}));
        }

        if (!this.isValidPassword(password)) {
            throw new Error(JSON.stringify({message:"Invalid password. Password must be at least 6 characters long."}));
        }
        this.password = this.hashPassword(password); // Encrypt the password before storing it in the object
        this.returnData()


    }

    private isValidString(userName: string): boolean {
        return typeof userName === 'string' && userName.trim().length > 0;
    }

    private isValidPhoneNumber(phoneNumber: string): boolean {
        return typeof phoneNumber === 'string';
    }

    private isValidEmail(email: string): boolean {
        // This is a basic email format check, but you can use a more robust email validation library if needed.
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        console.log(emailRegex.test(email),"emailRegex.test(email);emailRegex.test(email);")
        return emailRegex.test(email);
    }

    private isValidPassword(password: string): boolean {
        return password.length >= 6;
    }
    private hashPassword(password: string): string {
        const saltRounds = 10; // Number of salt rounds for bcrypt (a trade-off between security and speed)
        const hashedPassword = bcrypt.hashSync(password, saltRounds);
        return hashedPassword;
    }
    public returnData()
    {
        return  {
            firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password,phoneNumber:this.phoneNumber,address:this.address,city:this.city,locality:this.locality,area:this.area,zipcode:this.zipcode
        }
    }
}
export class CarInquiry{


    constructor(name:string,carName:string,startDate: Date,endDate:Date,pickUpLoc:string,dropLocation:string,phoneNumber:string,area:string,message:string,city:string,email:string,packages:string){
        return {
            carName:carName,startDate:startDate,endDate:endDate,pickUpLoc:pickUpLoc,dropLocation:dropLocation,phoneNumber:phoneNumber,area:area,message:message,city:city,name:name,email:email,packages:packages,
        }

    }
}
export class Categoryes{
    constructor(public name:string, public status:string,public slag:string,public createdDate:string,public updatedDate:string){
        if (!this.isValidString(name)) {
            throw  Error(JSON.stringify({message:"Invalid username. Username must be a non-empty string."}));
        }
        if (!this.isValidString(status)) {
            throw  Error(JSON.stringify({message:"Invalid username. Username must be a non-empty string."}));
        }
        this.returnData()

        

    }
    public returnData()
    {
        return {
            name:this.name,status:this.status,slag:this.slag,createdDate:this.createdDate,updatedDate:this.updatedDate
        }
    }
    private isValidString(userName: string): boolean {
        return typeof userName === 'string' && userName.trim().length > 0;
    }
    


}

    
export interface CarData {
    name:string,
    brand:string,
    model: string,
    category: string,
    year:string,
    image:ArrayBuffer,
    location:string,
    vehicleType:string,
    featuredCar:string,
    status: string,
    services:string[],
    description:string,
    actualPriceDaily:string,
    discountedPriceDaily:string,
    actualPriceWeekly:string,
    discountedPriceWeekly:string,
    actualPriceMonthly:string,
    discountedPriceMonthly:string,
    transmission:string,
    cruiseControl:string,
    engineCapacity:string,
    laggageBootCapacity:string,
    securityDeposit:string,
    cashType:string[],
    carFeatures:string[],
    unlimitedMileage:string,
    paiInsuranceDaily:string,
    paiInsuranceMonthly:string,
    freeCancellation:string,
    freeDelivery30DaysandAbove:string,
    CustomerSupport:string,
    scdwPerMonth:string,
    paymentType:string,
    engineSize:string,
    bluetooth:string,
    aux:string,
    seater:string,
    navigation:string,
    parkingSense:string,
    requirementsForUAEResidents:string[],
    requirementsForTourists:string[]












    
  
}


export interface CarModel {
    Name: string;
    Brand: string;
    Status?: string;
    slug?: string;
    CreatedDate: string;
    UpdatedDate: string;
  }



  export interface carFeatures {
    Title: string;
    Status?: string;
    CreatedDate: string;
    UpdatedDate: string;
  }

  export interface carServices {
    Title: string;
    Status?: string;
    CreatedDate: string;
    UpdatedDate: string;
  }


  export interface carEngineCapacities {
    Capacity: string;
    Status?: string;
    CreatedDate: string;
    UpdatedDate: string;
  }

  export interface carDocument {
    Title: string;
    Status?: string;
    CreatedDate: string;
    UpdatedDate: string;
  }

   export interface carLoaction{
    Name: string;
    Status?: string;
    CreatedDate: string;
    UpdatedDate: string;
   }

   export interface addFAQS{
    Question: string;
    Answer?: string;
    CreatedDate: string;
    UpdatedDate: string;
    Status:string;
   }
