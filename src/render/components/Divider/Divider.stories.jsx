
import { fn } from "@storybook/test";
import Divider from './Divider';

export const ActionsData = {
};

export default {
  component: Divider,
  title: 'Components/Divider',
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
