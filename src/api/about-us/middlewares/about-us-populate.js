"use strict";

/**
 * `about-us-populate` middleware
 */

const imgFields = ["url", "width", "height"]

const populate = {
  about: {
    populate: {
      rightIcon: {
        fields: imgFields,
      },
      leftIcon: {
        fields: imgFields,
      },
      bottomIcon: {
        fields: imgFields,
      },
      imgOne: {
        fields: imgFields,
      },
      imgTwo: {
        fields: imgFields,
      },
      imgThree: {
        fields: imgFields,
      },
      imgFour: {
        fields: imgFields,
      },
      service: {
        populate: {
          icon: {
            fields: imgFields,
          },
        },
      },
      Team: {
        populate: {
          img: {
            fields: imgFields,
          },
        },
      },
      Contact:{
        populate:{
          leftIcon:{
            fields:imgFields
          },
          rightIcon:{
            fields:imgFields
          }
        }
      }
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In about-us-populate middleware.");

    ctx.query = {
      ...ctx.query,
      populate,
    };

    await next();
  };
};
