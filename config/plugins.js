module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET')
    }
  },
  upload: {
    config: {
      sizeLimit: 100000, // Move sizeLimit here
      providerOptions: {
        // Remove sizeLimit from here
      },
    },
  },
});