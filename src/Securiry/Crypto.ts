import * as bcrypt from 'bcrypt-nodejs'

export class Crypto {
  public static bcryptHash(data: string): string {
    let salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(data, salt);
  }

  public static bcryptCompare(data: string, hash: string): boolean {
    return bcrypt.compareSync(data, hash);
  }  
}