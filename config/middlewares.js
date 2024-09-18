module.exports = ({ env }) => [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:", "ws:", env("SUPABASE_API_URL", "")],
          "img-src": ["'self'", "data:", "blob:", "dl.airtable.com", "market-assets.strapi.io", env("SUPABASE_API_URL", ""), env("SUPABASE_URL", ""), "*"],
          "media-src": ["'self'", "data:", "blob:", "dl.airtable.com", "market-assets.strapi.io", env("SUPABASE_API_URL", ""), env("SUPABASE_URL", ""), "*"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      header: "*",
      origin: ["*"]
    }
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];