/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    OMDB_API_URL: process.env.OMDB_API_URL,
    OMDB_API_KEY: process.env.OMDB_API_KEY, 
  },
}

module.exports = nextConfig
