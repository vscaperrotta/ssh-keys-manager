
import { fn } from "@storybook/test";
import Badge from './Badge';
import StoriesWrapper from '@components/StoriesWrapper';

export const ActionsData = {
};

export default {
  component: Badge,
  title: 'Components/Badge',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
  parameters: {
    docs: {
      description: {
        component: 'Badge component used to display status or labels with different visual styles.'
      }
    }
  }
};

const Template = (args, { globals: { locale } }) => (
  <StoriesWrapper>
    <Badge {...args} />
  </StoriesWrapper>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Active',
  type: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Disabled',
  type: 'secondary'
};
