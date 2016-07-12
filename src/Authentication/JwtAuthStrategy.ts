import * as passportJwt from 'passport-jwt';



export class JwtStrategy extends passportJwt.Strategy {
  constructor(options?: any, verify?: passportJwt.VerifyCallback) {
    options = options || <passportJwt.StrategyOptions>{};
    verify = verify || JwtStrategy.verifyToken;

    let extractJwt: any = passportJwt.ExtractJwt;
    let defaultExtractor = extractJwt.fromExtractors([
      passportJwt.ExtractJwt.fromHeader('authorization'),
      passportJwt.ExtractJwt.fromUrlQueryParameter('access_token'),
      passportJwt.ExtractJwt.fromUrlQueryParameter('api_key'),
      passportJwt.ExtractJwt.fromBodyField('access_token'),
      passportJwt.ExtractJwt.fromAuthHeader()
    ]);

    options.jwtFromRequest = options.jwtFromRequest || defaultExtractor;

    super(options, verify);
  }


  static verifyToken(payload: any, done: Function) {
    if (!payload || !payload.username) {
      console.log(payload);
      
      return done('Invalid Token');
    }
    done(null, payload.username, payload);
  }


}