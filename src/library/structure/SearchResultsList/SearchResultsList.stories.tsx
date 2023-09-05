import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import SearchResultsList from './SearchResultsList';
import { SearchResultsListProps } from './SearchResultsList.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { searchResults, noSearchResults, searchResultsWithServiceArea } from './SearchResultsData';

export default {
  title: 'Library/Structure/Search Results List',
  component: SearchResultsList,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<SearchResultsListProps> = (args) => (
  <SBPadding>
    <SearchResultsList {...args} />
  </SBPadding>
);

export const ExampleSearchResultsList = Template.bind({});
ExampleSearchResultsList.args = searchResults;

export const ExampleNoSearchResultsList = Template.bind({});
ExampleNoSearchResultsList.args = noSearchResults;

export const ExampleSearchResultsListWithServiceArea = Template.bind({});
ExampleSearchResultsListWithServiceArea.args = searchResultsWithServiceArea;
