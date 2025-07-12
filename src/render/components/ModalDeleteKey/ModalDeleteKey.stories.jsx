
import React, { useState } from 'react';
import { fn } from "@storybook/test";
import StoriesWrapper from '@components/StoriesWrapper';
import Button from '@components/Button';
import ModalDeleteKey from './ModalDeleteKey';

export const ActionsData = {
  onClose: fn(),
  onDelete: fn()
};

export default {
  component: ModalDeleteKey,
  title: 'Components/ModalDeleteKey',
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
        component: 'Modal for confirming deletion of an SSH key with details about the key to be deleted.'
      }
    }
  }
};

const Template = (args, { globals: { locale } }) => {
  // For Template, we want the modal to be visible by default
  const storyArgs = { ...args };

  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <StoriesWrapper>
      <Button onClick={toggleModal} label='Click me' type='primary' />
      <ModalDeleteKey {...storyArgs} isOpen={isOpen} onClose={toggleModal} />
    </StoriesWrapper>
  );
};


export const Default = Template.bind({});
Default.args = {
  onClose: ActionsData.onClose,
  onDelete: ActionsData.onDelete,
  keyData: {
    id: '1',
    name: 'github_key',
    type: 'RSA'
  }
};

export const WithMoreDetails = Template.bind({});
WithMoreDetails.args = {
  onClose: ActionsData.onClose,
  onDelete: ActionsData.onDelete,
  keyData: {
    id: '2',
    name: 'production_server_key',
    type: 'ED25519',
    file: '/Users/username/.ssh/production_ed25519'
  }
};
