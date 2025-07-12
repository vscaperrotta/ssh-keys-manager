import { fn } from "@storybook/test";
import Header from './Header';
import StoriesWrapper from '@components/StoriesWrapper';

export const ActionsData = {
};

export default {
  component: Header,
  title: 'Components/Header',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
  parameters: {
    docs: {
      description: {
        component: 'Header component displaying application title and SSH key statistics with configurable cards.'
      }
    }
  }
};

const Template = (args) => {
  return (
    <StoriesWrapper>
      <Header {...args} />
    </StoriesWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'SSH Keys Manager',
  subtitle: 'Manage your SSH keys in one place',
  cards: [],
  keys: []
};

export const WithCards = Template.bind({});
WithCards.args = {
  title: 'SSH Keys Manager',
  subtitle: 'Manage your SSH keys in one place',
  cards: [
    { label: 'Total Keys', type: 'total' },
    { label: 'Complete Keys', type: 'complete' },
    { label: 'Private Keys', type: 'private' }
  ],
  keys: []
};

export const WithKeysAndCards = Template.bind({});
WithKeysAndCards.args = {
  title: 'SSH Keys Manager',
  subtitle: 'Manage your SSH keys in one place',
  cards: [
    { label: 'Total Keys', type: 'total' },
    { label: 'Complete Keys', type: 'complete' },
    { label: 'Private Keys', type: 'private' }
  ],
  keys: [
    { id: 1, status: 'complete', file: '/path/to/key1.pub' },
    { id: 2, status: 'complete', file: '/path/to/key2.pub' },
    { id: 3, status: 'only priv', file: '/path/to/key3' }
  ]
};

export const WithCustomCardFunction = Template.bind({});
WithCustomCardFunction.args = {
  title: 'SSH Keys Manager',
  subtitle: 'Manage your SSH keys in one place',
  cards: [
    { label: 'Total Keys', type: 'total' },
    { label: 'Complete Keys', type: 'complete' },
    { label: 'Private Keys', type: 'private' },
    {
      label: 'Average Key Age (days)',
      getValue: (keys) => {
        const currentDate = new Date('2025-07-11');
        return '15';
      }
    }
  ],
  keys: [
    { id: 1, status: 'complete', file: '/path/to/key1.pub', creation: '2025-07-01' },
    { id: 2, status: 'complete', file: '/path/to/key2.pub', creation: '2025-06-20' },
    { id: 3, status: 'only priv', file: '/path/to/key3', creation: '2025-06-25' }
  ]
};
