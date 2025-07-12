
import { fn } from "@storybook/test";
import SearchBar from './SearchBar';
import StoriesWrapper from '@components/StoriesWrapper';

export const ActionsData = {
  onChange: fn(),
  onReset: fn()
};

export default {
  component: SearchBar,
  title: 'Components/SearchBar',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
  parameters: {
    docs: {
      description: {
        component: 'Search bar component with input field and reset button for filtering content.'
      }
    }
  }
};

const Template = (args) => {
  return (
    <StoriesWrapper>
      <SearchBar {...args} />
    </StoriesWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  onChange: ActionsData.onChange,
  onReset: ActionsData.onReset,
  value: '',
  placeholder: 'Search...',
  resetButtonLabel: 'Reset'
};

export const WithValue = Template.bind({});
WithValue.args = {
  onChange: ActionsData.onChange,
  onReset: ActionsData.onReset,
  value: 'id_rsa',
  placeholder: 'Search...',
  resetButtonLabel: 'Clear'
};
