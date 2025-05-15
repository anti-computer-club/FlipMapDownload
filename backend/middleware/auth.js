const { getAuth } = require('@clerk/clerk-sdk-node');

function requireAuth(req, res, next) {
  const auth = getAuth(req);

  if (!auth || !auth.userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  req.userId = auth.userId;
  next();
}

module.exports = requireAuth;
