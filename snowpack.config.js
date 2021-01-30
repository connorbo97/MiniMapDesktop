// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  plugins: [
    /* ... */
    "@snowpack/plugin-sass"
  ],
  packageOptions: {
    /* ... */
  },
  alias: {
    "@base": "./src",
    "@utils": "./src/utils"
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
