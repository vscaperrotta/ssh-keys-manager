
import React, { useState } from 'react';
import { fn } from "@storybook/test";
import StoriesWrapper from '@components/StoriesWrapper';
import Button from '@components/Button';
import ModalNewKey from './ModalNewKey';

export const ActionsData = {
  onClose: fn(),
  onKeyCreated: fn()
};

export default {
  component: ModalNewKey,
  title: 'Components/ModalNewKey',
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
        component: 'Modal for creating a new SSH key with options for key type, bits, and comments. Uses the Modal component with actions prop for the buttons.'
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
      <ModalNewKey {...storyArgs} isOpen={isOpen} onClose={toggleModal} />
    </StoriesWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  onClose: ActionsData.onClose,
  onKeyCreated: ActionsData.onKeyCreated
};

export const WithPrefilledValues = Template.bind({});
WithPrefilledValues.args = {
  onClose: ActionsData.onClose,
  onKeyCreated: ActionsData.onKeyCreated,
  // These props would need to be supported in the component to work
  initialValues: {
    name: 'github_key',
    type: 'ed25519',
    comment: 'Key for GitHub authentication'
  }
};
