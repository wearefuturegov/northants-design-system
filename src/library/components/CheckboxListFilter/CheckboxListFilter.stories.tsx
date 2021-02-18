
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import CheckboxListFilter from "./CheckboxListFilter";
import { CheckboxListFilterProps } from "./CheckboxListFilter.types";
import { SBPadding } from '../../../../.storybook/SBPadding';
import { articleOptions } from "./CheckboxListFilterData"

export default {
    title: 'Library/Components/CheckboxListFilter',
    component: CheckboxListFilter
};

const Template: Story<CheckboxListFilterProps> = (args) => <SBPadding><CheckboxListFilter {...args} /></SBPadding>;

export const ExampleCheckboxListFilter = Template.bind({});    
ExampleCheckboxListFilter.args = {
  options: articleOptions
};

