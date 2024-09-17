module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),  // Use 0.0.0.0 to accept connections from outside
  port: env.int('PORT', process.env.PORT || 1337),  // Use Render's PORT env var
  app: {
    keys: env.array('APP_KEYS'),
  },
});
