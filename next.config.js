const isProd = process.env.NODE_ENV === "production";

const ASSET_PREFIX = isProd ? "/" : "";

module.exports = {
  assetPrefix: ASSET_PREFIX,
  env: {
    ASSET_PREFIX: ASSET_PREFIX,
  },
  webpack: (config, { dev }) => {
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === "babel-loader") {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });

    return config;
  },
};
