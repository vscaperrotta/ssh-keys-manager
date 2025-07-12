import React, { useState } from 'react';
import { fn } from "@storybook/test";
import Modal from './Modal';
import { Download, Check, X } from 'react-feather';
import StoriesWrapper from '@components/StoriesWrapper';
import Button from '@components/Button';

export const ActionsData = {
  onClose: fn(),
  onPrimary: fn(),
  onSecondary: fn()
};

export default {
  component: Modal,
  title: 'Components/Modal',
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
        component: 'Modal component for displaying content in an overlay dialog with customizable actions.'
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
      <Modal {...storyArgs} isOpen={isOpen} onClose={toggleModal} />
    </StoriesWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  onClose: ActionsData.onClose,
  title: 'Modal Title',
  subtitle: 'Modal Subtitle',
  children: <div style={{ padding: '20px' }}>Modal Content</div>
};

export const WithoutSubtitle = Template.bind({});
WithoutSubtitle.args = {
  onClose: ActionsData.onClose,
  title: 'Modal Title',
  children: <div style={{ padding: '20px' }}>Modal Content</div>
};

export const WithActions = Template.bind({});
WithActions.args = {
  onClose: ActionsData.onClose,
  title: 'Confirm Action',
  subtitle: 'Please confirm to proceed',
  children: <div style={{ padding: '20px' }}>Are you sure you want to proceed with this action?</div>,
  actions: [
    {
      label: 'Cancel',
      onClick: ActionsData.onSecondary,
      isPrimary: false
    },
    {
      label: 'Confirm',
      onClick: ActionsData.onPrimary,
      isPrimary: true
    }
  ]
};

export const WithErrorAction = Template.bind({});
WithErrorAction.args = {
  onClose: ActionsData.onClose,
  title: 'Delete Key',
  subtitle: 'This action cannot be undone',
  children: <div style={{ padding: '20px' }}>Are you sure you want to delete this SSH key?</div>,
  actions: [
    {
      label: 'Cancel',
      onClick: ActionsData.onSecondary,
      isPrimary: false
    },
    {
      label: 'Delete',
      onClick: ActionsData.onPrimary,
      isPrimary: true,
      color: 'error'
    }
  ]
};

export const WithIconActions = Template.bind({});
WithIconActions.args = {
  onClose: ActionsData.onClose,
  title: 'SSH Key Details',
  subtitle: 'Review your SSH key information',
  children: (
    <div style={{ padding: '20px' }}>
      <p>Type: RSA</p>
      <p>Created: July 11, 2025</p>
      <p>Key: ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAAgQC5...</p>
    </div>
  ),
  actions: [
    {
      label: 'Close',
      onClick: ActionsData.onClose,
      isPrimary: false,
      icon: <X size={16} />
    },
    {
      label: 'Download',
      onClick: ActionsData.onPrimary,
      isPrimary: true,
      icon: <Download size={16} />
    }
  ]
};

export const WithComplexContent = Template.bind({});
WithComplexContent.args = {
  onClose: ActionsData.onClose,
  title: 'SSH Key Details',
  subtitle: 'Review your SSH key information',
  children: (
    <div style={{ padding: '20px' }}>
      <p>Type: RSA</p>
      <p>Created: July 11, 2025</p>
    </div>
  ),
  actions: [
    {
      label: 'Cancel',
      onClick: ActionsData.onClose,
      isPrimary: false
    },
    {
      label: 'Copy Key',
      onClick: ActionsData.onSecondary,
      isPrimary: false
    },
    {
      label: 'Approve',
      onClick: ActionsData.onPrimary,
      isPrimary: true,
      icon: <Check size={16} />
    }
  ]
};
