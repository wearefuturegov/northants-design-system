import { AlertBannerServiceProps } from '../../structure/AlertBannerService/AlertBannerService.types';
import { BreadcrumbProp } from '../../structure/Breadcrumbs/Breadcrumbs.types';
import { FooterLinkProp } from '../../structure/Footer/Footer.types';
import { HeroImageProps } from '../../structure/HeroImage/HeroImage.types';
import { ServicesLinksListProps } from '../../structure/ServicesLinksList/ServicesLinksList.types';

export interface PromotionPageExampleProps {
  /**
   * The Service landing page title
   */
  title: string;

  /**
   * Hero image banner definition
   */
  heroImage?: HeroImageProps;

  /**
   * Body text below service links
   */
  bodyText?: string;

  /**
   * Array of breadcrumbs
   */
  breadcrumbsArray: Array<BreadcrumbProp>;

  /**
   * Array of Footer links
   */
  footerLinksArray: FooterLinkProp[];

  /**
   * Top services to highlight below the heading or hero image
   */
  topServices?: ServicesLinksListProps;

  /**
   * Summary text describing the page
   */
  summary?: string;

  /**
   * Should the summary be displayed
   */
  showSummary?: Boolean;

  /**
   * Optional heading icon
   */
  icon?: string;
}
