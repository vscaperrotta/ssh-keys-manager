
import { fn } from "@storybook/test";
import Button from './Button';
import { Plus } from 'react-feather';
import StoriesWrapper from '@components/StoriesWrapper';

export const ActionsData = {
  onClick: fn()
};

export default {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
  parameters: {
    docs: {
      description: {
        component: 'Button component with support for different types, colors and icons.'
      }
    }
  }
};

const Template = (args, { globals: { locale } }) => (
  <StoriesWrapper>
    <Button {...args} />
  </StoriesWrapper>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  type: 'primary',
  color: 'info',
  onClick: ActionsData.onClick
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  type: 'secondary',
  color: 'info',
  onClick: ActionsData.onClick
};

export const Error = Template.bind({});
Error.args = {
  label: 'Delete',
  type: 'primary',
  color: 'error',
  onClick: ActionsData.onClick
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Add New',
  type: 'primary',
  color: 'info',
  icon: <Plus size={16} />,
  onClick: ActionsData.onClick
};
