export interface Portfolio{
    createdBy: string,
    createdDate: string,
    database: string,
    id: string,
    images: Image[],
    recordCount: string,
    updatedBy: string,
    updatedDate: string,
}

export interface Image{
    hostUrl: string,
    id: string,
    name: string,
    pathImage: string,
    refId: string,
    size: string,
    type: string,
    typeImage: string,
}