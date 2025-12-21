export interface IServiceData{
    createdBy: string,
    createdDate: Date,
    database: string,
    description: string,
    descriptionEnglish: string,
    id: number,
    recordCount: number,
    status: boolean,
    subTitle: string,
    subTitleEnglish: string,
    title: string,
    titleEnglish: string,
    type: string,
    updatedBy: string,
    updatedDate: Date
}
export interface IServiceDetail{
    createdBy: string,
    createdDate: Date,
    database: string,
    description: string,
    descriptionEnglish: string,
    id: number,
    pathImage: string,
    recordCount: number,
    status: boolean,
    title: string,
    titleEnglish: string,
    updatedBy: string,
    updatedDate: Date
}