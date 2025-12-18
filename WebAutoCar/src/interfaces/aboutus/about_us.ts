export interface AboutUs {
    CreatedBy:string,
    CreatedDate:string,
    Database:string,
    Description:string,
    DescriptionEnglish:string,
    Id:string,
    RecordCount:string,
    Status:string,
    SubTitle:string,
    SubTitleEnglish:string,
    Title:string,
    TitleEnglish:string,
    Type:string,
    UpdatedBy:string,
    UpdatedDate:string
}

export interface AboutUsDetail {
    CreatedBy:string
    CreatedDate:Date
    Database:string
    Description:string
    DescriptionEnglish:string
    Id:number
    PathImage:string
    RecordCount:number
    Status:string
    Title:string
    TitleEnglish:string
    UpdatedBy:string
    UpdatedDate:Date
}