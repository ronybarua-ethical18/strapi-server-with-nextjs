"use strict";

/**
 * `main-menu-populate` middleware
 */

// const populate = [
//   'MainMenuItems',
//   'MainMenuItems.sections',
//   'MainMenuItems.sections.links',
//   'MainMenuItems.sections.links.icon',
// ];

const populate = {
  MainMenuItems: {
    populate: {
      sections: {
        populate: {
          links: {
            populate: {
              icon: {
                fields: ["url"],
              },
            },
          },
        },
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In main-menu-populate middleware.");

    // Merge the custom populate with any existing query parameters
    ctx.query = {
      ...ctx.query,
      populate,
    };

    await next();
  };
};
