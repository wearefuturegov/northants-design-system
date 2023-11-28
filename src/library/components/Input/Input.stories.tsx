import React from 'react';
import Input from './Input';
import { InputProps } from './Input.types';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/Input',
  component: Input,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<InputProps> = (args) => (
  <SBPadding>
    <Input {...args} />
  </SBPadding>
);

export const Example = Template.bind({});
Example.args = {};
