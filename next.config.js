/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.0.108:3000",
  ],
  async redirects() {
    return [
      {
        source: "/resume.pdf",
        destination: "/Manik_Singhal_Software_Engineer.pdf",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
