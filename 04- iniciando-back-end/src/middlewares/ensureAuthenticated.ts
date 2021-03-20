import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import auth from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new Error('JWT token is missing');
  }

  const [, token] = authorization.split(' ');

  try {
    const { secret } = auth.jtw;
    const decoded = verify(token, secret);

    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new Error('JWT invalid token');
  }
}
