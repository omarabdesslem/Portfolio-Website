/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  ...(isGitHubPages
    ? {
        output: 'export',
        images: {
          unoptimized: true,
        },
      }
    : {
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
      }),
};

export default nextConfig;
