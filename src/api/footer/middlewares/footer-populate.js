'use strict';

/**
 * `footer-populate` middleware
 */

const populate = {
  Footer: {
    populate: {
      logo:{
        fields:["url", "width", "height"]
      },
      AboutLink:true,
      SocialLink:true
      
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In footer-populate middleware.');
    ctx.query = {
      ...ctx.query,
      populate,
    };
    await next();
  };
};
