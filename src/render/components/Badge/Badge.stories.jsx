
import { fn } from "@storybook/test";
import Badge from './Badge';

export const ActionsData = {
};

export default {
  component: Badge,
  title: 'Components/Badge',
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
