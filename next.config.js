const isProd = process.env.NODE_ENCV === "production";

module.exports = {
  exportPathMap: () => ({
    "/": { page: "/" },
  }),
  assetPrefix: isProd ? "/Youtube-Audio-Player-LP" : "",
};
