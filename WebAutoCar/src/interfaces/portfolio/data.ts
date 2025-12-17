export interface Portfolio{
    CreatedBy: string,
    CreatedDate: string,
    Database: string,
    Id: string,
    Images: Image[],
    RecordCount: string,
    UpdatedBy: string,
    UpdatedDate: string,
}

export interface Image{
    HostUrl: string,
    Id: string,
    Name: string,
    PathImage: string,
    RefId: string,
    Size: string,
    Type: string,
    TypeImage: string,
}