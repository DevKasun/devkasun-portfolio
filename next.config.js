/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GHOST_API_URL: "https://css-blok.com",
    GHOST_API_KEY: "0fd88efdfedaac94f109a82ea6",
    GHOST_API_VERSION: "v5.0"
  }
}

module.exports = nextConfig
