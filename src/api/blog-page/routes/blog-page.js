'use strict';

/**
 * blog-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::blog-page.blog-page',{
    config: {
      find: {
        middlewares: ["api::blog-page.blog-page-populate"],
      },
    },
  });
