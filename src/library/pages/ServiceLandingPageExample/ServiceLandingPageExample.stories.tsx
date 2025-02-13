import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { StoryFn, Meta } from '@storybook/react';
import { ServiceLandingPageExample } from './ServiceLandingPageExample';
import { ServiceLandingPageExampleProps } from './ServiceLandingPageExample.types';
import {
  HeroImageExampleMicroSiteData,
  HeroImageExampleBoxedWithBreadcrumbData,
} from '../../structure/HeroImage/HeroImage.storydata';
import {
  threeTopServicesData,
  sixTopServicesData,
  sections,
  breadcrumbs,
  micrositeBreadcrumbs,
  footerLinks,
  serviceAlert,
  promoHeroImageData,
  promoTopServicesData,
  promoBodyText,
} from './ServiceLandingPageExample.storydata';

export default {
  title: 'Page Examples/Service Landing Page Examples',
  component: ServiceLandingPageExample,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
} as Meta;

const Template: StoryFn<ServiceLandingPageExampleProps> = (args) => <ServiceLandingPageExample {...args} />;

export const BinCollectionExample = Template.bind({});
BinCollectionExample.args = {
  title: 'Bin collection, recycling and waste',
  icon: 'bins',
  breadcrumbsArray: breadcrumbs,
  sections,
  footerLinksArray: footerLinks,
};

export const OneSectionExample = Template.bind({});
OneSectionExample.args = {
  title: 'Bin collection, recycling and waste',
  icon: 'bins',
  breadcrumbsArray: breadcrumbs,
  sections: sections.slice(0, 1),
  footerLinksArray: footerLinks,
};

export const TopServicesExample = Template.bind({});
TopServicesExample.args = {
  title: 'Bin collection, recycling and waste',
  icon: 'bins',
  breadcrumbsArray: breadcrumbs,
  sections: sections.slice(0, 1),
  footerLinksArray: footerLinks,
  topServices: threeTopServicesData,
};

export const TopServicesWithAlert = Template.bind({});
TopServicesWithAlert.args = {
  title: 'Bin collection, recycling and waste',
  icon: 'bins',
  breadcrumbsArray: breadcrumbs,
  sections: sections.slice(0, 1),
  footerLinksArray: footerLinks,
  topServices: threeTopServicesData,
  serviceAlert,
};

export const SixTopServicesExample = Template.bind({});
SixTopServicesExample.args = {
  title: 'Bin collection, recycling and waste',
  icon: 'bins',
  breadcrumbsArray: breadcrumbs,
  sections: sections.slice(0, 1),
  footerLinksArray: footerLinks,
  topServices: sixTopServicesData,
};

export const MicroSiteExample = Template.bind({});
MicroSiteExample.args = {
  title: 'Northamptonshire Country Parks',
  heroImage: HeroImageExampleMicroSiteData, // empty headline in this overriden by title above
  breadcrumbsArray: null,
  bodyText: ' ',
  sections: sections.slice(0, 1),
  footerLinksArray: footerLinks,
  summary:
    'Explore, discover and enjoy Northamptonshire Country Parks. Woodland walks, reservoir views, play areas, cafes, each country park has its own unique character.',
  showSummary: true,
};

export const MicroSiteWithTopServicesExample = Template.bind({});
MicroSiteWithTopServicesExample.args = {
  title: 'Northamptonshire Country Parks',
  heroImage: HeroImageExampleMicroSiteData, // empty headline in this overriden by title above
  breadcrumbsArray: null,
  bodyText: ' ',
  sections: sections.slice(0, 1),
  footerLinksArray: footerLinks,
  topServices: threeTopServicesData,
  summary:
    'Explore, discover and enjoy Northamptonshire Country Parks. Woodland walks, reservoir views, play areas, cafes, each country park has its own unique character.',
  showSummary: true,
};

export const MicroSiteBoxedExample = Template.bind({});
MicroSiteBoxedExample.args = {
  title: 'Northamptonshire Country Parks',
  heroImage: HeroImageExampleBoxedWithBreadcrumbData, // empty headline in this overriden by title above
  breadcrumbsArray: micrositeBreadcrumbs,
  bodyText: ' ',
  sections: sections.slice(0, 1),
  footerLinksArray: footerLinks,
  summary:
    'Explore, discover and enjoy Northamptonshire Country Parks. Woodland walks, reservoir views, play areas, cafes, each country park has its own unique character.',
  showSummary: true,
};

export const ExampleWithServiceAlert = Template.bind({});
ExampleWithServiceAlert.args = {
  title: 'Bin collection, recycling and waste',
  icon: 'bins',
  breadcrumbsArray: breadcrumbs,
  sections,
  footerLinksArray: footerLinks,
  serviceAlert,
};

export const MicroSiteWithAlertExample = Template.bind({});
MicroSiteWithAlertExample.args = {
  title: 'Northamptonshire Country Parks',
  heroImage: HeroImageExampleMicroSiteData, // empty headline in this overriden by title above
  breadcrumbsArray: null,
  bodyText: ' ',
  sections: sections.slice(0, 1),
  footerLinksArray: footerLinks,
  summary:
    'Explore, discover and enjoy Northamptonshire Country Parks. Woodland walks, reservoir views, play areas, cafes, each country park has its own unique character.',
  showSummary: true,
  serviceAlert,
};

export const PromoPageExample = Template.bind({});
PromoPageExample.args = {
  title: 'Sustainable West Northants',
  heroImage: promoHeroImageData,
  breadcrumbsArray: null,
  bodyText: promoBodyText,
  sections: [],
  footerLinksArray: footerLinks,
  topServices: promoTopServicesData,
  summary:
    'Sustainability is all about living in a way that protects our natural resources and opportunities for future generations.',
  showSummary: true,
};
