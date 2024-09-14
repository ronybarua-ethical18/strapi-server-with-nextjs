"use strict";

/**
 * `contact-us-populate` middleware
 */

const populate = {
  contactPage: {
    populate: {
      icon: {
        fields: ["url", "width", "height"],
      },
      mapImg: {
        fields: ["url", "width", "height"],
      },
      dotImg: {
        fields: ["url", "width", "height"],
      },
      input:true
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In contact-us-populate middleware.");

    ctx.query = {
      ...ctx.query,
      populate,
    };

    await next();
  };
};
