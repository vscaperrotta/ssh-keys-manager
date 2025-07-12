
import { fn } from "@storybook/test";
import Card from './Card';
import StoriesWrapper from '@components/StoriesWrapper';

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
        component: 'Card component displays a label-value pair in a styled container.'
      }
    }
  }
};

const Template = (args, { globals: { locale } }) => (
  <StoriesWrapper>
    <Card {...args} />
  </StoriesWrapper>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Card Label',
  value: 'Card Value'
};

export const WithLongContent = Template.bind({});
WithLongContent.args = {
  label: 'SSH Key Path',
  value: '/Users/username/.ssh/id_rsa.pub'
};
