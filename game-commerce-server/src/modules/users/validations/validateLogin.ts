import ApiError from '../../../errors/ApiError';

const emailRFC = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateLogin = (email: string, password: string) => {
  switch (true) {
    case !email:
      return ApiError.unauthorized('Must inform email');
    case !password:
      return ApiError.unauthorized('Must inform password');
    case password.length < 5:
      return ApiError.unauthorized('Password must have at least 5 characters');
    case !emailRFC.test(email):
      return ApiError.unauthorized('Invalid email');
    default:
      return null;
  }
};

export default validateLogin;
