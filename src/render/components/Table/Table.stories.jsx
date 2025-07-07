
import { fn } from "@storybook/test";
import Table from './Table';

export const ActionsData = {
};

export default {
  component: Table,
  title: 'Components/Table',
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
