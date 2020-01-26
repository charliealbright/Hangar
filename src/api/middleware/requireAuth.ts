import { Handler } from 'express';
import logger from '../../logger';

const adminSecret = process.env.ADMIN_SECRET;

export const requireAuth = (redirect = false): Handler => (req, res, next): void => {
  if (req.signedCookies?.authed === 'yes' || req.headers.authorization === adminSecret) {
    next();
  } else if (redirect) {
    const redirectString = req.path === '/' ? '' : `?redirect=${req.path}`;
    res.redirect(`/login${redirectString}`);
  } else {
    res.sendStatus(401);
    logger.error(
      `Unauthorized request has been made to ${req.originalUrl} from ${req.ip} with authorization: ${
        req.headers.authorization
      }. Request Body: ${JSON.stringify(req.body, null, 2)}`,
    );
  }
};
