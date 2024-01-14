export class Account {
  constructor(
    public email: string | undefined,
    public username: string | undefined
  ) {}

  get user() {
    return { email: this.email, username: this.username };
  }
}
