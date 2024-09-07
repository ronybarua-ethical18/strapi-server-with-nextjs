"use strict";

/**
 * `landing-page-populate` middleware
 */

const populate = {
  PageContent: {
    populate: {
      button:true,
      heroIcon:{
        fields:["url"]
      },
      topRightIcon:{
        fields:["url"]
      },
      bottomLeftIcon:{
        fields:["url"]
      },
      HeroLeftIcon:{
        fields:["url"]
      },
      HerorightIcon:{
        fields:["url"]
      },
      heroBottomIcon:{
        fields:["url"]
      },
      Service: {
        populate: {
          icon: {
            fields: ["url"],
          },
        },
      },
      TrustedCompany: {
        populate: {
          logo: {
            fields: ["url"],
          },
        },
      },
      Feature: {
        populate: {
          icon: {
            fields: ["url"],
          },
        },
      },
      FeatureCategory: {
        populate: {
          icon: {
            fields: ["url"],
          },
          viewButton: {
            fields: ["title", "type", "url"],
          },
        },
      },
      subscribeBtn:true,
      leftIcon:{
        fields:["url"]
      },
      rightIcon:{
        fields:["url"]
      },
      
    },
  },
};



module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In landing-page-populate middleware.");

    // Merge the custom populate with any existing query parameters
    ctx.query = {
      ...ctx.query,
      populate,
    };

    await next();
  };
};
