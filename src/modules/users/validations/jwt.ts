import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET;

const generateToken = (email: string, password: string, role: string) => {
  const token = jwt.sign({
    email,
    password,
    role,
  }, jwtSecret);

  return token;
};

export default generateToken;
