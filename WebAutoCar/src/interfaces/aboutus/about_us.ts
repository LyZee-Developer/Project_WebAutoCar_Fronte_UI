export interface AboutUs {
    createdBy:string,
    createdDate:string,
    database:string,
    description:string,
    descriptionEnglish:string,
    id:string,
    recordCount:string,
    status:string,
    subTitle:string,
    subTitleEnglish:string,
    title:string,
    titleEnglish:string,
    type:string,
    updatedBy:string,
    updatedDate:string
}

export interface AboutUsDetail {
    createdBy:string
    createdDate:Date
    database:string
    description:string
    descriptionEnglish:string
    id:number
    pathImage:string
    recordCount:number
    status:string
    title:string
    titleEnglish:string
    updatedBy:string
    updatedDate:Date
}