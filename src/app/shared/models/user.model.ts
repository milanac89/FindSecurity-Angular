export class User {
  constructor(
    public email: string,
    public password: string,
    public confirmPass: string,
    public id?: number
  ){}
}
