import '../src/render/styles/global.scss';
import '../src/render/styles/storybook.scss';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Base', 'System', 'Components'],
      },
    },
  }
};

export default preview;