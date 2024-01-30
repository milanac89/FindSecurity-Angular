export class Information {
  constructor(
    public name: string,
    public surname: string,
    public fatherName: string,
    public sex: string,
    public birthDate: any,
    public regionName: string,
    public workRegionName: string,
    public phone: number,
    public mail: string,
    public driverLicense: boolean,
    public specialty: string,
    public experienceYears: number,
    public employmentType: string,
    public workSchedule: string,
    public pay: number,
    public comment: string,
    public id?: number
  ){}
}
