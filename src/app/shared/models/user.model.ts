export class User {
  constructor(
    public email: string,
    public password: string,
    public confirmPassword: string,
    public id?: number
  ){}
}
