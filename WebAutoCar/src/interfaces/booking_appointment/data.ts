export interface Car{
    createdBy:string,
    createdDate:Date,
    database:string,
    englishName:string,
    id:number,
    name:string,
    pathImage:string,
    recordCount:number,
    status:boolean,
    updatedBy:string,
    updatedDate:Date
}

export interface Service{
    createdBy:string,
    createdDate:Date,
    database:string,
    englishName:string,
    id:number,
    name:string,
    recordCount:number,
    status:boolean,
    updatedBy:string,
    updatedDate:Date
}

export interface AppointmentData{
    fullName: string,
    email:string,
    phone : string,
    phone1  : string,
    carId : number,
    serviceId: number,
    year: number,
    problem : string
}