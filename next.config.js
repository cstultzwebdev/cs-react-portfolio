/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export to /out (replaces the old `next export` command).
  output: 'export',
  // Built-in SWC transform for styled-components (replaces .babelrc).
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
