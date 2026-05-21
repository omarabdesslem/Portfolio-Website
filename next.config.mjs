/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'utm_medium',
          },
        ],
        destination: '/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'utm_campaign',
          },
        ],
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
