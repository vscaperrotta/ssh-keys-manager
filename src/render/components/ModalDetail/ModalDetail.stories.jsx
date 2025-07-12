
import React, { useState } from 'react';
import { fn } from "@storybook/test";
import ModalDetail from './ModalDetail';
import StoriesWrapper from '@components/StoriesWrapper';
import Button from '@components/Button';

export const ActionsData = {
  onClose: fn()
};

export default {
  component: ModalDetail,
  title: 'Components/ModalDetail',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
    isOpen: false // Set default to false for documentation page
  },
  parameters: {
    docs: {
      description: {
        component: 'Modal component displaying detailed information about an SSH key.'
      }
    }
  }
};

const Template = (args, { globals: { locale } }) => {
  // For Template, we want the modal to be visible by default
  const storyArgs = { ...args };

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StoriesWrapper>
      <Button onClick={toggleModal} label='Click me' type='primary' />
      <ModalDetail {...storyArgs} isOpen={isOpen} onClose={toggleModal} />
    </StoriesWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  onClose: ActionsData.onClose,
  detail: {
    id: 1,
    name: 'GitHub Key',
    type: 'RSA',
    file: '/Users/username/.ssh/github_rsa.pub',
    status: 'complete',
    publicKey: 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC5H2cAKj0N...',
    notes: 'Used for GitHub authentication',
    creation: 'Jul 11, 2025'
  }
};

export const WithPrivateKeyOnly = Template.bind({});
WithPrivateKeyOnly.args = {
  onClose: ActionsData.onClose,
  detail: {
    id: 2,
    name: 'Development Server',
    type: 'ED25519',
    file: '/Users/username/.ssh/dev_ed25519',
    status: 'only priv',
    publicKey: null,
    notes: 'Local development environment',
    creation: 'Jul 10, 2025'
  }
};
