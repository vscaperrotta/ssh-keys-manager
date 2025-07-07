
import { fn } from "@storybook/test";
import ModalDeleteKey from './ModalDeleteKey';

export const ActionsData = {
};

export default {
  component: ModalDeleteKey,
  title: 'Components/ModalDeleteKey',
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
