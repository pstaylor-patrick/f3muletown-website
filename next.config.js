/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/?page_id=33", // Locations
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/?page_id=18", // About
        destination: "/",
        permanent: true,
      },
      {
        source: "/?page_id=48", // FAQ
        destination: "/",
        permanent: true,
      },
      {
        source: "/?page_id=19", // CONTACT
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
