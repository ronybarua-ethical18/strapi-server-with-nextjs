import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'MenuLink';
    icon: 'link';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface MenuMenuButton extends Schema.Component {
  collectionName: 'components_menu_menu_buttons';
  info: {
    displayName: 'MenuButton';
    icon: 'cursor';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    type: Attribute.Enumeration<['blue', 'white', 'black']>;
  };
}

export interface MenuLink extends Schema.Component {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'link';
    icon: 'link';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MenuDropdown extends Schema.Component {
  collectionName: 'components_menu_dropdowns';
  info: {
    displayName: 'Dropdown';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    sections: Attribute.Relation<
      'menu.dropdown',
      'oneToMany',
      'api::section.section'
    >;
  };
}

export interface LandingPageService extends Schema.Component {
  collectionName: 'components_landing_page_services';
  info: {
    displayName: 'Service';
    icon: 'command';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LandingPageServiceList extends Schema.Component {
  collectionName: 'components_landing_page_service_lists';
  info: {
    displayName: 'ServiceList';
    icon: 'filter';
    description: '';
  };
  attributes: {
    Service: Attribute.Component<'landing-page.service', true>;
  };
}

export interface LandingPageHero extends Schema.Component {
  collectionName: 'components_landing_page_heroes';
  info: {
    displayName: 'Hero';
    icon: 'eye';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.Text;
    button: Attribute.Component<'menu.menu-button', true>;
    heroIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    topRightIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bottomLeftIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    HeroLeftIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    HerorightIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heroBottomIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.menu-link': MenuMenuLink;
      'menu.menu-button': MenuMenuButton;
      'menu.link': MenuLink;
      'menu.dropdown': MenuDropdown;
      'landing-page.service': LandingPageService;
      'landing-page.service-list': LandingPageServiceList;
      'landing-page.hero': LandingPageHero;
    }
  }
}
