export class Signup {
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public id?: string;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    id?: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.id = id;
  }
}
