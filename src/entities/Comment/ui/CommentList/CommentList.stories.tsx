import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: '1',
      text: 'hello',
      user: { id: '1', username: 'Vanya' },
    },
    {
      id: '2',
      text: 'hello 2',
      user: { id: '2', username: 'Oleg' },
    },
  ],
};

export const Loding = Template.bind({});
Loding.args = {
  comments: [],
  isLoading: true,
};
