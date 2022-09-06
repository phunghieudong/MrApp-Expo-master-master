export type TermOfMedicalData = {

    Title:string;
    Content: string;
    TypeId: number;
    HospitalId:number;
    HospitalName: string;
    RowNumber: number;
    Id: number;
    Created: Date;
    CreatedBy: string;
    Updated: Date | null;
    UpdatedBy: string | null;
    Deleted: boolean;
    Active: boolean;
}


