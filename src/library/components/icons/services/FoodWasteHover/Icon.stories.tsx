import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Icon from './Icon';
import { IconProps } from '../Icon.types';
import { SBPadding } from '../../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Icons/Services/Food Waste Hover',
  component: Icon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<IconProps> = (args) => (
  <SBPadding>
    <Icon {...args} />
  </SBPadding>
);

export const ExampleIcon = Template.bind({});
ExampleIcon.args = {
  colourFill: '#111',
};
