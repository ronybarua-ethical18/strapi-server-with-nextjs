'use strict';

/**
 * `service-populate` middleware
 */

const populate = {
  service: {
    populate: {
      logo: {
        fields:["url","width","height"]
      },
      service: {
        populate:{
          icon: {
            fields:["url","width","height"]
          }
        }
      },
      button: {
        populate: '*'
      },
      img: {
        fields:["url","width","height"]
      },
      counter: {
        populate: '*'
      },
      leftTopIcon: {
        fields:["url","width","height"]
      },
      leftBottomIcon: {
        fields:["url","width","height"]
      },
      rightTopIcon: {
        fields:["url","width","height"]
      },
      rightTopBellIcon: {
        fields:["url","width","height"]
      },
      project: {
        populate: {
          img: {
            fields:["url","width","height"]
          }
        }
      },
      Contact:{
        populate:{
          leftIcon:{
            fields:["url","width","height"]
          },
          rightIcon:{
            fields:["url","width","height"]
          }
        }
      },
      leftIcon:{
        fields:["url", "width", "height"]
      },
      rightIcon:{
        fields:["url", "width", "height"]
      },
      subscribeBtn:true,
    }
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In service-populate middleware.');

    ctx.query = {
      ...ctx.query,
      populate,
    };
    await next();
  };
};
