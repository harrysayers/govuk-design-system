module.exports = {
  components: {
    categories: [
      {
        name: "Inputs",
        include: [
          "src/components/Button/Button.jsx",
          "src/components/Card/Card.jsx",
        ],
      },
      {
        name: "Content",
        include: [
          "src/components/Input/Input.jsx",
          "src/components/Select/Select.jsx",
        ],
      },
    ],
    // Optional wrapper component that provides context/theming
    wrapper: "./src/components/RivveoWrapper.jsx",
    // Optional custom webpack config
    webpackConfig: "./webpack.rivveo.config.js",
  },
  name: "My Design System",
};
