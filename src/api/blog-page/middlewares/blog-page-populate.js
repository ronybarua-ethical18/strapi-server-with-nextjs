"use strict";

/**
 * `blog-page-populate` middleware
 */

const imgFields = ["url", "width", "height"];

const populate = {
  blog: {
    populate: {
      input: {
        populate: {
          icon: {
            fields: imgFields,
          },
        },
      },
      tag: true,
      img: {
        fields: imgFields,
      },

      author: {
        populate: {
          image: {
            fields: imgFields,
          },
        },
      },
      blog: {
        populate: {
          authorImg: {
            fields: imgFields,
          },
          img: {
            fields: imgFields,
          },
        },
      },
      leftIcon: {
        fields: imgFields,
      },
      rightIcon: {
        fields: imgFields,
      },
      subscribeBtn: true,
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In blog-page-populate middleware.");

    ctx.query = {
      ...ctx.query,
      populate,
    };

    await next();
  };
};
