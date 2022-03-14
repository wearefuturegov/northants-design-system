import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import HeadingWithIcon from '../../components/HeadingWithIcon/HeadingWithIcon';
import Heading from '../../components/Heading/Heading';
import SectionLinksMobileContents from '../../structure/SectionLinksMobileContents/SectionLinksMobileContents';
import { ServiceLandingPageExampleProps } from './ServiceLandingPageExample.types';
import Summary from '../../structure/Summary/Summary';

export const ServiceLandingPageExample: React.FunctionComponent<ServiceLandingPageExampleProps> = ({
  title,
  heroImage,
  breadcrumbsArray,
  sections,
  bodyText,
  footerLinksArray,
  topServices,
  summary,
  showSummary = false,
  serviceAlert,
  icon,
}) => (
  <>
    <PageStructures.Header />
    {heroImage ? (
      <>
        <PageStructures.HeroImage
          headline={heroImage.headline ? heroImage.headline : title}
          content={heroImage.content}
          callToActionText={heroImage.callToActionText}
          callToActionURL={heroImage.callToActionURL}
          imageLarge={heroImage.imageLarge}
          imageSmall={heroImage.imageSmall}
          imageAltText={heroImage.imageAltText}
          backgroundBox={heroImage.backgroundBox}
          showBreadcrumb={heroImage.showBreadcrumb}
          breadcrumbsArray={breadcrumbsArray}
        />

        {serviceAlert?.alertType && (
          <PageStructures.MaxWidthContainer noPadding>
            <PageStructures.AlertBannerService {...serviceAlert} hasTopSpacing>
              {serviceAlert.children}
            </PageStructures.AlertBannerService>
          </PageStructures.MaxWidthContainer>
        )}
      </>
    ) : (
      <PageStructures.MaxWidthContainer noPadding>
        <PageStructures.Breadcrumbs breadcrumbsArray={breadcrumbsArray} hasMargin />
        {serviceAlert?.alertType && (
          <PageStructures.AlertBannerService {...serviceAlert}>
            {serviceAlert.children}
          </PageStructures.AlertBannerService>
        )}

        {icon ? <HeadingWithIcon icon={icon} level={1} text={title} /> : <Heading text={title} />}
      </PageStructures.MaxWidthContainer>
    )}

    {topServices && (
      <PageStructures.FullWidthContainer hasBackground={true} hasPadding={true}>
        <PageStructures.MaxWidthContainer noBackground={true} noPadding={true}>
          <PageStructures.ServicesLinksList {...topServices} />
        </PageStructures.MaxWidthContainer>
      </PageStructures.FullWidthContainer>
    )}

    <PageStructures.MaxWidthContainer>
      <PageStructures.PageMain>
        {showSummary && summary?.trim() && (
          <Summary>
            <p>{summary}</p>
          </Summary>
        )}

        <p>{bodyText ? bodyText : 'Any introductory text and slices for the landing page goes here.'}</p>

        {sections.length > 1 ? (
          <SectionLinksMobileContents
            sectionLinksArray={sections.map((section) => ({ id: section.sectionSlug, title: section.sectionTitle }))}
          />
        ) : (
          ''
        )}
        {sections.map((section) => (
          <PageStructures.SectionLinks displayTitle={sections.length > 1} {...section} key={section.sectionSlug} />
        ))}
      </PageStructures.PageMain>
    </PageStructures.MaxWidthContainer>
    <PageStructures.Footer footerLinksArray={footerLinksArray} />
  </>
);
