const isProd = process.env.NODE_ENV === "production";

module.exports = {
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
