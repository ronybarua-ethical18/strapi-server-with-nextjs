"use strict";

/**
 * `landing-page-populate` middleware
 */

const populate = {
  PageContent: {
    populate: {
      button:true,
      heroIcon:{
        fields:["url", "width", "height"]
      },
      topRightIcon:{
        fields:["url", "width", "height"]
      },
      bottomLeftIcon:{
        fields:["url", "width", "height"]
      },
      heroLeftIcon:{
        fields:["url", "width", "height"]
      },
      heroBgEllipse:{
        fields:["url", "width", "height"]
      },
      heroRightIcon:{
        fields:["url", "width", "height"]
      },
      heroBottomIcon:{
        fields:["url", "width", "height"]
      },
      contentLeftIcon:{
        fields:["url", "width", "height"]
      },
      Service: {
        populate: {
          icon: {
            fields: ["url", "width", "height"],
          },
        },
      },
      TrustedCompany: {
        populate: {
          logo: {
            fields: ["url", "width", "height"],
          },
        },
      },
      Feature: {
        populate: {
          icon: {
            fields: ["url", "width", "height"],
          },
          featureImg: {
            fields: ["url", "width", "height"],
          },
        },
      },
      dotLineImg:{
        fields: ["url", "width", "height"],
      },
      mobileCircleImg:{
        fields: ["url", "width", "height"],
      },
      webCircleImg:{
        fields: ["url", "width", "height"],
      },
      arCircleImg:{
        fields: ["url", "width", "height"],
      },
      FeatureCategory: {
        populate: {
          icon: {
            fields: ["url", "width", "height"],
          },
          viewButton: {
            fields: ["title", "type", "url"],
          },
        },
      },
      subscribeBtn:true,
      leftIcon:{
        fields:["url", "width", "height"]
      },
      rightIcon:{
        fields:["url", "width", "height"]
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
