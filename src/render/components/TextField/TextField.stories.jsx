
import { fn } from "@storybook/test";
import StoriesWrapper from '@components/StoriesWrapper';
import TextField from './TextField';

export const ActionsData = {
};

export default {
  component: TextField,
  title: 'Components/TextField',
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

const Template = (args, { globals: { locale } }) => (
  <StoriesWrapper>
    <TextField {...args} />
  </StoriesWrapper>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  value: 'Lorem ipsum door sit amet, consectetur adipiscing elit. Lorem ipsum door sit amet, consectetur adipiscing elit. Lorem ipsum door sit amet, consectetur adipiscing elit. Lorem ipsum door sit amet, consectetur adipiscing elit. Lorem ipsum door sit amet, consectetur adipiscing elit. Lorem ipsum door sit amet, consectetur adipiscing elit. Lorem ipsum door sit amet, consectetur adipiscing elit. Lorem ipsum door sit amet, consectetur adipiscing elit. Lorem ipsum door sit amet, consectetur adipiscing elit. Lorem ipsum door sit amet, consectetur adipiscing elit. Lorem ipsum door sit amet, consectetur adipiscing elit. Lorem ipsum door sit amet, consectetur adipiscing elit. Lorem ipsum door sit amet, consectetur adipiscing elit. Lorem ipsum door sit amet, consectetur adipiscing elit. ',
  id: 'PUBLIC_KEY',
};
