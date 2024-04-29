/** @type {import('next').NextConfig} */
const nextConfig = {
  // watchpackエラーが出るので、pollingを有効にする
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;
