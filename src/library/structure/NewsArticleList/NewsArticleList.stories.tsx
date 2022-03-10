import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import NewsArticleList from './NewsArticleList';
import { NewsArticleListProps } from './NewsArticleList.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { newsArticleData } from './NewsArticleData';

export default {
  title: 'Library/Components/News Article List',
  component: NewsArticleList,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<NewsArticleListProps> = (args) => (
  <SBPadding>
    <NewsArticleList {...args} />
  </SBPadding>
);

export const ExampleNewsArticleList = Template.bind({});
ExampleNewsArticleList.args = {
  results: newsArticleData.results,
  sortBy: null,
};

export const ExampleNoNewsArticleList = Template.bind({});
ExampleNoNewsArticleList.args = {
  results: [],
  sortBy: null,
};
