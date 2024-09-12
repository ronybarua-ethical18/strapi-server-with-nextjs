import type { Schema, Attribute } from '@strapi/strapi';

export interface ServiceStatistics extends Schema.Component {
  collectionName: 'components_service_statistics';
  info: {
    displayName: 'statistics';
    icon: 'manyToMany';
    description: '';
  };
  attributes: {
    counter: Attribute.Component<'service.couter', true>;
    leftTopIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    leftBottomIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    rightTopIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    rightTopBellIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ServiceSingleProject extends Schema.Component {
  collectionName: 'components_service_single_projects';
  info: {
    displayName: 'project';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ServiceServices extends Schema.Component {
  collectionName: 'components_service_services';
  info: {
    displayName: 'services';
    icon: 'cog';
  };
  attributes: {
    service: Attribute.Component<'landing-page.service', true>;
  };
}

export interface ServiceServiceDescription extends Schema.Component {
  collectionName: 'components_service_service_descriptions';
  info: {
    displayName: 'serviceDescription';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'menu.menu-button', true>;
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ServiceProjects extends Schema.Component {
  collectionName: 'components_service_projects';
  info: {
    displayName: 'projects';
    icon: 'sun';
    description: '';
  };
  attributes: {
    project: Attribute.Component<'service.single-project', true>;
  };
}

export interface ServiceHeading extends Schema.Component {
  collectionName: 'components_service_headings';
  info: {
    displayName: 'heading';
    icon: 'television';
    description: '';
  };
  attributes: {
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ServiceCouter extends Schema.Component {
  collectionName: 'components_service_couters';
  info: {
    displayName: 'counter';
    icon: 'clock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    value: Attribute.Integer;
  };
}

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

export interface MenuLogoSection extends Schema.Component {
  collectionName: 'components_menu_logo_sections';
  info: {
    displayName: 'LogoSection';
    icon: 'picture';
  };
  attributes: {
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
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

export interface LandingPageTrustedCompanies extends Schema.Component {
  collectionName: 'components_landing_page_trusted_companies';
  info: {
    displayName: 'TrustedCompanies';
    icon: 'write';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    TrustedCompany: Attribute.Component<'landing-page.company', true>;
    bgImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LandingPageService extends Schema.Component {
  collectionName: 'components_landing_page_services';
  info: {
    displayName: 'Service';
    icon: 'command';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bgType: Attribute.Enumeration<
      ['purple', 'green', 'blue', 'tomato', 'violet']
    >;
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
    heroLeftIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heroRightIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heroBottomIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    contentLeftIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heroBgEllipse: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LandingPageFeature extends Schema.Component {
  collectionName: 'components_landing_page_features';
  info: {
    displayName: 'Feature';
    icon: 'strikeThrough';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mainTitle: Attribute.String;
    description: Attribute.Text;
    featureImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    type: Attribute.Enumeration<['mobile', 'web', 'vr']>;
  };
}

export interface LandingPageFeatureList extends Schema.Component {
  collectionName: 'components_landing_page_feature_lists';
  info: {
    displayName: 'FeatureList';
    icon: 'sun';
    description: '';
  };
  attributes: {
    Feature: Attribute.Component<'landing-page.feature', true>;
    dotLineImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mobileCircleImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    webCircleImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    arCircleImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    subTitle: Attribute.String;
  };
}

export interface LandingPageFeatureCategories extends Schema.Component {
  collectionName: 'components_landing_page_feature_categories';
  info: {
    displayName: 'FeatureCategories';
    icon: 'filter';
    description: '';
  };
  attributes: {
    FeatureCategory: Attribute.Component<'landing-page.category', true>;
  };
}

export interface LandingPageContact extends Schema.Component {
  collectionName: 'components_landing_page_contacts';
  info: {
    displayName: 'Contact';
    icon: 'thumbUp';
  };
  attributes: {
    title: Attribute.String;
    placeholder: Attribute.String;
    subscribeBtn: Attribute.Component<'menu.menu-button'>;
    leftIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    rightIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LandingPageCompany extends Schema.Component {
  collectionName: 'components_landing_page_companies';
  info: {
    displayName: 'TrustedCompany';
    icon: 'user';
    description: '';
  };
  attributes: {
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LandingPageCategory extends Schema.Component {
  collectionName: 'components_landing_page_categories';
  info: {
    displayName: 'FeatureCategory';
    icon: 'filter';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    viewButton: Attribute.Component<'menu.menu-button'>;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface FooterSocialLinksSection extends Schema.Component {
  collectionName: 'components_footer_social_links_sections';
  info: {
    displayName: 'SocialLinksSection';
    icon: 'link';
    description: '';
  };
  attributes: {
    SocialLink: Attribute.Component<'footer.link', true>;
  };
}

export interface FooterLogoSection extends Schema.Component {
  collectionName: 'components_footer_logo_sections';
  info: {
    displayName: 'LogoSection';
    icon: 'gift';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.Text;
    tag: Attribute.String;
  };
}

export interface FooterLink extends Schema.Component {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'SocialLink';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    title: Attribute.String;
  };
}

export interface FooterFooter extends Schema.Component {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'AboutSection';
    icon: 'headphone';
    description: '';
  };
  attributes: {
    AboutLink: Attribute.Component<'footer.about-link', true>;
    title: Attribute.String;
  };
}

export interface FooterContactSection extends Schema.Component {
  collectionName: 'components_footer_contact_sections';
  info: {
    displayName: 'ContactSection';
    icon: 'eye';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    phone: Attribute.String;
  };
}

export interface FooterAboutLink extends Schema.Component {
  collectionName: 'components_footer_about_links';
  info: {
    displayName: 'AboutLink';
    icon: 'link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface AboutTeam extends Schema.Component {
  collectionName: 'components_about_teams';
  info: {
    displayName: 'team';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    designation: Attribute.String;
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AboutTeamList extends Schema.Component {
  collectionName: 'components_about_team_lists';
  info: {
    displayName: 'TeamList';
    icon: 'cog';
    description: '';
  };
  attributes: {
    Team: Attribute.Component<'about.team', true>;
    title: Attribute.String;
  };
}

export interface AboutServicesWithTitle extends Schema.Component {
  collectionName: 'components_about_services_with_titles';
  info: {
    displayName: 'servicesWithTitle';
    icon: 'command';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    service: Attribute.Component<'about.service-list', true>;
    button: Attribute.Component<'menu.menu-button'>;
  };
}

export interface AboutServiceList extends Schema.Component {
  collectionName: 'components_about_service_lists';
  info: {
    displayName: 'serviceList';
    icon: 'star';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bgType: Attribute.Enumeration<
      ['blue', 'purple', 'green', 'tomato', 'violet']
    >;
  };
}

export interface AboutHeading extends Schema.Component {
  collectionName: 'components_about_headings';
  info: {
    displayName: 'heading';
    icon: 'check';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    subTitle2: Attribute.String;
    description: Attribute.Text;
    rightIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    leftIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bottomIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgOne: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgTwo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgThree: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgFour: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AboutDescription extends Schema.Component {
  collectionName: 'components_about_descriptions';
  info: {
    displayName: 'description';
    icon: 'code';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'service.statistics': ServiceStatistics;
      'service.single-project': ServiceSingleProject;
      'service.services': ServiceServices;
      'service.service-description': ServiceServiceDescription;
      'service.projects': ServiceProjects;
      'service.heading': ServiceHeading;
      'service.couter': ServiceCouter;
      'menu.menu-link': MenuMenuLink;
      'menu.menu-button': MenuMenuButton;
      'menu.logo-section': MenuLogoSection;
      'menu.link': MenuLink;
      'menu.dropdown': MenuDropdown;
      'landing-page.trusted-companies': LandingPageTrustedCompanies;
      'landing-page.service': LandingPageService;
      'landing-page.service-list': LandingPageServiceList;
      'landing-page.hero': LandingPageHero;
      'landing-page.feature': LandingPageFeature;
      'landing-page.feature-list': LandingPageFeatureList;
      'landing-page.feature-categories': LandingPageFeatureCategories;
      'landing-page.contact': LandingPageContact;
      'landing-page.company': LandingPageCompany;
      'landing-page.category': LandingPageCategory;
      'footer.social-links-section': FooterSocialLinksSection;
      'footer.logo-section': FooterLogoSection;
      'footer.link': FooterLink;
      'footer.footer': FooterFooter;
      'footer.contact-section': FooterContactSection;
      'footer.about-link': FooterAboutLink;
      'about.team': AboutTeam;
      'about.team-list': AboutTeamList;
      'about.services-with-title': AboutServicesWithTitle;
      'about.service-list': AboutServiceList;
      'about.heading': AboutHeading;
      'about.description': AboutDescription;
    }
  }
}
