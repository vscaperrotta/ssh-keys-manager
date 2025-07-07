
import { fn } from "@storybook/test";
import SearchBar from './SearchBar';

export const ActionsData = {
};

export default {
  component: SearchBar,
  title: 'Components/SearchBar',
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
