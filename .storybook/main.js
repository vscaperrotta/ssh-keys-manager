const config = {
  // Required
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: [
    '../src/render/components/**/*.stories.@(js|jsx)',
    '../src/render/stories/*.mdx'
  ],
  // Optional
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
};

export default config;