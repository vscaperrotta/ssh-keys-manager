
import { fn } from "@storybook/test";
import Card from './Card';

export const ActionsData = {
};

export default {
  component: Card,
  title: 'Components/Card',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
  parameters: {
    docs: {
      description: {
        component: 'Another description, overriding the comments'
      }
    }
  }
};

export const Default = {
  args: {
  },
};
