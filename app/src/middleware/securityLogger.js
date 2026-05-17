function securityLogger(req, res, next) {
  const start = Date.now();

  res.on("finish", () => {
    const log = {
      timestamp: new Date().toISOString(),
      correlationId: req.correlationId,
      method: req.method,
      path: req.originalUrl,
      statusCode: res.statusCode,
      userAgent: req.headers["user-agent"] || "unknown",
      sourceIp: req.ip,
      userId: req.user?.id || null,
      role: req.user?.role || null,
      durationMs: Date.now() - start
    };

    console.log(JSON.stringify(log));
  });

  next();
}

module.exports = securityLogger;