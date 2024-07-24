import React from 'react';
import * as PageStructures from '../../structure/PageStructures';
import Heading from '../../components/Heading/Heading';
import SearchResultsList from '../../structure/SearchResultsList/SearchResultsList';
import Searchbar from '../../structure/Searchbar/Searchbar';
import Pagination from '../../components/Pagination/Pagination';
import { SignpostLinkProp } from '../../components/SignpostLinksList/SignpostLinksList.types';
import { noSearchResults, searchResultsWithServiceArea } from './../../structure/SearchResultsList/SearchResultsData';
import Tabs from '../../components/Tabs/Tabs';

export interface SearchResultsPageExampleProps {
  results: Array<SearchResultProps>;
}
interface SearchResultProps {
  /**
   * Search result title
   */
  title: string;
  /**
   * Link to page
   */
  link: string;
  /**
   * Summary of page
   */
  summary: string;
  /**
   * If it contains signposting links include them here
   */
  signpostLinksArray?: Array<SignpostLinkProp>;
  /**
   * If there is a service area tied to the result
   */
  service: string;
}

export const SearchResultsPageExample: React.FC<SearchResultsPageExampleProps> = ({ results }) => (
  <>
    <PageStructures.Header hideSearchBar />
    <PageStructures.MaxWidthContainer>
      <PageStructures.Breadcrumbs
        breadcrumbsArray={[
          {
            title: 'Home',
            url: '/',
          },
        ]}
      />
      <PageStructures.PageMain>
        <Heading level={1} text="Search results" />
        <Searchbar
          isLight={true}
          isLarge={true}
          searchTerm="council tax"
          submitInfo={{
            postTo: '/search',
            params: {
              type: 'search',
              searchTerm: 'council tax',
            },
          }}
        />

        <Tabs
          tabs={[
            {
              title: 'All results',
              onClick: () => {},
            },
            {
              title: 'Service results',
              onClick: () => {},
            },
            {
              title: 'News results',
              onClick: () => {},
            },
          ]}
          activeTab={1}
          hasTopMargin
        />

        {results ? <SearchResultsList {...searchResultsWithServiceArea} /> : <SearchResultsList {...noSearchResults} />}

        {results && (
          <Pagination
            currentPage={searchResultsWithServiceArea.pageNumber}
            totalResults={searchResultsWithServiceArea.totalResults}
          />
        )}
      </PageStructures.PageMain>
    </PageStructures.MaxWidthContainer>
    <PageStructures.Footer />
  </>
);
