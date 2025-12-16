export interface HeaderData{
    code:string,
    title:string,
    titleEnglish:string
}
export interface InfoOwner{
    CreatedBy:string,
    CreatedDate: Date,
    Database: string,
    Description: string,
    Email: string,
    EnglishName: string,
    FaceboolURL: string,
    Id: number,
    InURL: string,
    InstagramURL: string,
    Name: string,
    PathImage: string,
    Phone: string,
    Phone1: string,
    RecordCount: number,
    TelegramURL: string,
    UpdatedBy: string,
    UpdatedDate: Date,
    WorkingInfo: string,
    YoutubeURL: string,
}
export interface IServiceData{
    CreatedBy: string,
    CreatedDate: Date,
    Database: string,
    Description: string,
    DescriptionEnglish: string,
    Id: number,
    RecordCount: number,
    Status: boolean,
    SubTitle: string,
    SubTitleEnglish: string,
    Title: string,
    TitleEnglish: string,
    Type: string,
    UpdatedBy: string,
    UpdatedDate: Date
}
export interface IServiceDetail{
    CreatedBy: string,
    CreatedDate: Date,
    Database: string,
    Description: string,
    DescriptionEnglish: string,
    Id: number,
    PathImage: string,
    RecordCount: number,
    Status: boolean,
    Title: string,
    TitleEnglish: string,
    UpdatedBy: string,
    UpdatedDate: Date
}