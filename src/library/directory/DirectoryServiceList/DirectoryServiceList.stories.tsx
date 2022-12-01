import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import DirectoryServiceList from './DirectoryServiceList';
import { DirectoryServiceListProps } from './DirectoryServiceList.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { ExampleService } from '../DirectoryService/DirectoryService.storydata';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';
import { ExampleDirectoryCategories, ExampleFacilities } from './DirectoryServiceList.storydata';
import { DirectoryShortListProvider } from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';

export default {
  title: 'Library/Directory/Directory Service List',
  component: DirectoryServiceList,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<DirectoryServiceListProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <DirectoryShortListProvider>
          <DirectoryServiceList {...args} />
        </DirectoryShortListProvider>
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleDirectoryServiceList = Template.bind({});
ExampleDirectoryServiceList.args = {
  services: [
    { ...ExampleService, ...{ id: 'abc123' } },
    { ...ExampleService, ...{ id: 'abc124' } },
    { ...ExampleService, ...{ id: 'abc125' } },
    { ...ExampleService, ...{ id: 'abc126' } },
    { ...ExampleService, ...{ id: 'abc127' } },
  ],
  totalResults: 156,
  searchTerm: 'council',
  searchPostcode: 'NN1 1ED',
  categories: ExampleDirectoryCategories,
  pageNumber: 2,
  perPage: 5,
  directoryPath: '/directory',
  shortListPath: '/directory/short-list',
  customTaxonomyFilters: ['facilities', 'language'],
};

export const DirectoryServiceNoResults = Template.bind({});
DirectoryServiceNoResults.args = {
  services: [],
  totalResults: 0,
  categories: ExampleDirectoryCategories,
  pageNumber: 1,
  perPage: 5,
  directoryPath: '/directory',
  shortListPath: '/directory/short-list',
  customTaxonomyFilters: ['facilities', 'language'],
};
