'use strict';

/**
 * main-menu router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::main-menu.main-menu',{
    config: {
      find: {
        middlewares: ["api::main-menu.main-menu-populate"],
      },
    },
  });
