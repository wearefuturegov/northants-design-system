import React from 'react';
import Input from './Input';
import { InputProps } from './Input.types';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

export default {
  title: 'Library/Components/Input',
  component: Input,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<InputProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <Input {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const Example = Template.bind({});
Example.args = {
  name: 'exampleInput',
  placeholder: 'Enter some text',
  id: 'ExampleTextarea',
};

export const ExampleWithDefaultValue = Template.bind({});
ExampleWithDefaultValue.args = {
  name: 'exampleInput',
  placeholder: 'Enter some text',
  id: 'ExampleTextarea',
  defaultValue: 'Some default text',
};

export const ExampleFullWidth = Template.bind({});
ExampleFullWidth.args = {
  name: 'exampleInput',
  placeholder: 'Enter some text',
  id: 'ExampleTextarea',
  isFullWidth: true,
};

export const ExampleHasError = Template.bind({});
ExampleHasError.args = {
  name: 'exampleInput',
  placeholder: 'Enter some text',
  id: 'ExampleTextarea',
  isErrored: true,
  errorText: 'The field example textarea is required.',
  isFullWidth: true,
};
