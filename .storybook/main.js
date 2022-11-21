module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next-router",
<<<<<<< HEAD
    "storybook-addon-next",
=======
>>>>>>> d8c37cd960f4c2ef48732ca228eee99e544ae026
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
<<<<<<< HEAD
  staticDirs: ["../public"],
=======
>>>>>>> d8c37cd960f4c2ef48732ca228eee99e544ae026
};
