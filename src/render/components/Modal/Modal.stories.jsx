
import { fn } from "@storybook/test";
import Modal from './Modal';

export const ActionsData = {
};

export default {
  component: Modal,
  title: 'Components/Modal',
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
