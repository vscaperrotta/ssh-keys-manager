
import { fn } from "@storybook/test";
import Divider from './Divider';
import StoriesWrapper from '@components/StoriesWrapper';

export const ActionsData = {
};

export default {
  component: Divider,
  title: 'Components/Divider',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
  parameters: {
    docs: {
      description: {
        component: 'A simple horizontal divider line used to separate content sections.'
      }
    }
  }
};

const Template = (args, { globals: { locale } }) => (
  <StoriesWrapper>
    <Divider {...args} />
  </StoriesWrapper>
);

export const Default = Template.bind({});
Default.args = {
  // This component doesn't accept any props
};

// Provide context for how to use the Divider
Default.decorators = [
  (Story) => (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>Content above the divider</div>
      <Story />
      <div style={{ marginTop: '20px' }}>Content below the divider</div>
    </div>
  ),
];
