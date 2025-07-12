/**
 * English Translations
 *
 * @author Vittorio Scaperrotta
 * @date 10-Jul-2025
 */

export default {
  // Common
  'app.title': 'SSH Keys Manager',
  'app.loading': 'Loading...',
  'app.error': 'Error',
  'app.close': 'Close',
  'app.cancel': 'Cancel',
  'app.confirm': 'Confirm',
  'app.save': 'Save',
  'app.delete': 'Delete',
  'app.edit': 'Edit',
  'app.create': 'Create',
  'app.search': 'Search',
  'app.details': 'Details',
  'app.actions': 'Actions',
  'app.yes': 'Yes',
  'app.no': 'No',

  // SearchBar
  'searchbar.placeholder': 'Search...',
  'searchbar.reset': 'Reset',

  // Header
  'header.totalKeys': 'Total keys found',
  'header.subtitle': 'Tool to manage your local SSH keys',

  // Home
  'home.createNewKey': 'Create New Key',
  'home.search.placeholder': 'Search keys by name...',

  // Table
  'table.name': 'Name',
  'table.type': 'Type',
  'table.file': 'File',
  'table.notes': 'Notes',
  'table.status': 'Status',
  'table.creation': 'Creation',
  'table.actions': 'Actions',
  'table.noKeys': 'No SSH keys found',

  // Modal Detail
  'modal.detail.title': 'SSH Key Details',
  'modal.detail.subtitle': 'Detail information of the SSH key',
  'modal.detail.publicKey': 'Public Key',
  'modal.detail.privateKey': 'Private Key',
  'modal.detail.copyToClipboard': 'Copy to Clipboard',
  'modal.detail.copied': 'Copied!',

  // Modal Delete
  'modal.delete.title': 'Delete SSH Key',
  'modal.delete.confirmation': 'Are you sure you want to delete this SSH key?',
  'modal.delete.name': 'Name',
  'modal.delete.type': 'Type',
  'modal.delete.deleting': 'Deleting...',
  'modal.delete.error': 'Error while deleting the key',

  // Modal New Key
  'modal.newKey.title': 'Create New SSH Key',
  'modal.newKey.subtitle': 'Enter details to create a new SSH key',
  'modal.newKey.name.label': 'Key Name*:',
  'modal.newKey.name.placeholder': 'e.g. github_key',
  'modal.newKey.name.help': 'The key file name',
  'modal.newKey.name.required': 'Key name is required',
  'modal.newKey.name.invalid': 'Name can only contain letters, numbers, underscores, hyphens and dots',
  'modal.newKey.type.label': 'Key Type:',
  'modal.newKey.bits.label': 'Length (bits):',
  'modal.newKey.bits.recommended': 'recommended',
  'modal.newKey.obsolete': 'obsolete',
  'modal.newKey.dsa.warning': 'Warning: DSA is considered obsolete and insecure by current standards',
  'modal.newKey.comment.label': 'Comment:',
  'modal.newKey.comment.placeholder': 'e.g. user@email.com',
  'modal.newKey.comment.help': 'Usually an email address or identifier',
  'modal.newKey.creating': 'Creating...',
  'modal.newKey.create': 'Create Key',
  'modal.newKey.error': 'Error while creating the key',
  'modal.newKey.error.serverDown': 'Unable to contact server. Please verify it is running.',

  // Status
  'status.complete': 'Complete',
  'status.onlyPrivate': 'Only Private',
  'status.unknown': 'Unknown',
};
