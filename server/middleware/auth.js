import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'prepamp-dev-secret';

export function authenticateToken(req, res, next) {
  const header = req.headers['authorization'];
  const token = header && header.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token requis' });

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(403).json({ error: 'Token invalide' });
  }
}

export function optionalAuth(req, _res, next) {
  const header = req.headers['authorization'];
  const token = header && header.split(' ')[1];
  if (token) {
    try {
      req.user = jwt.verify(token, JWT_SECRET);
    } catch { /* ignore */ }
  }
  next();
}
