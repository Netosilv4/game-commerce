import jwt from 'jsonwebtoken';

const JWT_SECRET = 'alou';

const generateToken = (email: string, password: string, role: string) => {
  const token = jwt.sign({
    email,
    password,
    role,
  }, JWT_SECRET);

  return token;
};

export default generateToken;
