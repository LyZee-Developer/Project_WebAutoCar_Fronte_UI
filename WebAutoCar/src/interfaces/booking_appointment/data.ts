export interface Car{
    CreatedBy:string,
    CreatedDate:Date,
    Database:string,
    EnglishName:string,
    Id:number,
    Name:string,
    PathImage:string,
    RecordCount:number,
    Status:boolean,
    UpdatedBy:string,
    UpdatedDate:Date
}

export interface Service{
    CreatedBy:string,
    CreatedDate:Date,
    Database:string,
    EnglishName:string,
    Id:number,
    Name:string,
    RecordCount:number,
    Status:boolean,
    UpdatedBy:string,
    UpdatedDate:Date
}

export interface AppointmentData{
    FullName: string,
    Email:string,
    Phone : string,
    Phone1  : string,
    CarId : number,
    ServiceId: number,
    Year: number,
    Problem : string
}