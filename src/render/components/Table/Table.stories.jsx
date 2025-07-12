
import { fn } from "@storybook/test";
import Table from './Table';
import StoriesWrapper from '@components/StoriesWrapper';

export const ActionsData = {
  onClickDetails: fn(),
  onClickDelete: fn()
};

export default {
  component: Table,
  title: 'Components/Table',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
  parameters: {
    docs: {
      description: {
        component: 'Table component for displaying SSH keys with actions for viewing details and deletion.'
      }
    }
  }
};

const Template = (args) => {
  return (
    <StoriesWrapper>
      <Table {...args} />
    </StoriesWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  headers: ['Name', 'Type', 'File', 'Notes', 'Status', 'Creation', 'Actions'],
  sshKeys: [
    {
      id: 1,
      name: 'GitHub',
      type: 'RSA',
      file: 'github_rsa.pub',
      note: 'Used for GitHub authentication',
      status: 'complete',
      creation: 'Jul 11, 2025'
    },
    {
      id: 2,
      name: 'AWS',
      type: 'ED25519',
      file: 'aws_ed25519.pub',
      note: 'For AWS servers',
      status: 'complete',
      creation: 'Jul 10, 2025'
    },
    {
      id: 3,
      name: 'Local Server',
      type: 'RSA',
      file: 'local_rsa',
      note: 'Development environment',
      status: 'only priv',
      creation: 'Jul 9, 2025'
    }
  ],
  onClickDetails: ActionsData.onClickDetails,
  onClickDelete: ActionsData.onClickDelete,
  noKeysMessage: 'No SSH keys found',
  detailsButtonLabel: 'Details',
  deleteButtonLabel: 'Delete'
};

export const Empty = Template.bind({});
Empty.args = {
  headers: ['Name', 'Type', 'File', 'Notes', 'Status', 'Creation', 'Actions'],
  sshKeys: [],
  onClickDetails: ActionsData.onClickDetails,
  onClickDelete: ActionsData.onClickDelete,
  noKeysMessage: 'No SSH keys found',
  detailsButtonLabel: 'Details',
  deleteButtonLabel: 'Delete'
};