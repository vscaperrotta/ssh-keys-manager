
import { fn } from "@storybook/test";
import ModalDetail from './ModalDetail';

export const ActionsData = {
};

export default {
  component: ModalDetail,
  title: 'Components/ModalDetail',
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
