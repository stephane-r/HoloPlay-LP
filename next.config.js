const isProd = process.env.NODE_ENV === "production";

const ASSET_PREFIX = isProd ? "/Youtube-Audio-Player-LP" : "";

module.exports = {
  assetPrefix: ASSET_PREFIX,
  env: {
    ASSET_PREFIX: ASSET_PREFIX,
  },
};
