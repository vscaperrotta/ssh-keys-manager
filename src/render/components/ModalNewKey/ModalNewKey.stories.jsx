
import { fn } from "@storybook/test";
import ModalNewKey from './ModalNewKey';

export const ActionsData = {
};

export default {
  component: ModalNewKey,
  title: 'Components/ModalNewKey',
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
