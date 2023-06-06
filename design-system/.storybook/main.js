module.exports = {
  stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webComponents: {
    enable: true,
    // Include any additional configuration options here
  }
};